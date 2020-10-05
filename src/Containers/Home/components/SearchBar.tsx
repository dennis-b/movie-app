import React, { useEffect } from 'react';
import { AppLoader, StGrid } from "../../../Components";
import { Button, TextField } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import { compose } from "recompose";
import { inject, observer } from "mobx-react";
import axios from 'axios';
import { useQuery } from 'react-query'

import { homeStoreSelector, WithHomeStore } from "../HomeStore";
import { buildUrl } from "../utils";
import { notifyError } from "../../../Components/Notify";

const SearchBarView = ({ homeStore }: WithHomeStore) => {

        const queryFn = () => axios(buildUrl({
                title: homeStore.title,
                year: homeStore.year,
                page: homeStore.page
            })
        );

        const { isLoading, refetch } = useQuery('movies', queryFn, {
            enabled: false,
            onSuccess: ({ data }) => {
                console.log(data)
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
        }, [homeStore.page])


        useEffect(() => {
            if (homeStore.error) {
                notifyError({ message: homeStore.error })
                homeStore.setError(null)
            }
            // eslint-disable-next-line
        }, [homeStore.error])


        const onSearch = () => {
            homeStore.reset()
            refetch()
        }
        const onTitleChange = (e) => homeStore.setTitle(e.target.value)
        const onYearChange = (e) => homeStore.setYear(e.target.value)

        if (isLoading) {
            return <AppLoader />
        }

        return (
            <StGrid
                container
                spacing={4}
                justify="center"
                align="center"
                m={0}
                width="100%"

            >
                <StGrid item>
                    <TextField
                        value={homeStore.title}
                        label="Enter Title"
                        onChange={onTitleChange}
                    />
                </StGrid>
                <StGrid item>
                    <TextField
                        value={homeStore.year}
                        label="Enter Year"
                        onChange={onYearChange}
                    />
                </StGrid>
                <StGrid item>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={onSearch}
                        endIcon={<SearchIcon />}
                        size={'small'}
                    >
                        Search
                    </Button>
                </StGrid>
            </StGrid>
        );
    }
;

const enhance = compose(
    inject(homeStoreSelector),
    observer,
);

export const SearchBar = enhance(SearchBarView as any) as any;
