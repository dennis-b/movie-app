import React, { useEffect } from 'react';

import { Header } from "./Header";
import { AppLoader, Margin, StContainer } from "../../../Components";
import { SearchBar } from "./SearchBar";
import { Content } from "./Content";
import axios from "axios";
import { buildUrl } from "../utils";
import { useQuery } from "react-query";
import { notifyError } from "../../../Components/Notify";
import { homeStoreSelector, WithHomeStore } from "../HomeStore";
import { compose } from "recompose";
import { inject, observer } from "mobx-react";

const HomeView = ({ homeStore }: WithHomeStore) => {

    const { title, year, page, error } = homeStore
    const queryFn = () => axios(buildUrl({ title, year, page }));

    const { isLoading, refetch } = useQuery('movies', queryFn, {
        enabled: false,
        onSuccess: ({ data }) => {
            if (data.Error) {
                homeStore.setError(data.Error);
            } else {
                homeStore.setData([...homeStore.videos, ...data.Search]);
                homeStore.setTotal(data.totalResults)
            }
        }
    })

    useEffect(() => {
        if (homeStore.page !== 1 && homeStore.hasMore) {
            refetch()
        }
        // eslint-disable-next-line
    }, [page])


    useEffect(() => {
        if (error) {
            notifyError({ message: homeStore.error })
            homeStore.setError(null)
        }
        // eslint-disable-next-line
    }, [error])


    const onSearch = () => {
        homeStore.reset()
        refetch()
    }
    const onTitleChange = (e) => homeStore.setTitle(e.target.value)
    const onYearChange = (e) => homeStore.setYear(e.target.value)


    return (
        <StContainer>
            <Header />
            {isLoading && <AppLoader />}
            <Margin mt={2} />
            <SearchBar
                onSearch={onSearch}
                onTitleChange={onTitleChange}
                onYearChange={onYearChange}
                title={title}
                year={year}
            />
            <StContainer position="relative" p={1}>
                <Content />
            </StContainer>
        </StContainer>
    );
};

const enhance = compose(
    inject(homeStoreSelector),
    observer,
);

export const Home = enhance(HomeView as any) as any;
