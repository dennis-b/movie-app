import React from 'react';

import { Header } from "./Header";
import { Margin, StContainer } from "../../../Components";
import { SearchBar } from "./SearchBar";
import { Content } from "./Content";

export const Home = () => {
    return (
        <>
            <Header />
            <Margin mt={2} />
            <SearchBar />
            <StContainer position="relative" height={'100%'} p={1}>
                <Content />
            </StContainer>
        </>
    );
};


