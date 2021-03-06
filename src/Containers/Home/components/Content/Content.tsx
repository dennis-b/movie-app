import React from "react";

import { StContainer } from "../../../../Components";
import { VideoList } from "./VideoList";
import { compose } from "recompose";
import { inject, observer } from "mobx-react";
import { homeStoreSelector, WithHomeStore } from "../../HomeStore";
import { StInfiniteScroll } from "../styled";
import { CircularProgress } from "@material-ui/core";
import { Total } from "./Total";


export const ContentView = ({ homeStore }: WithHomeStore) => {

    const fetchMoreData = () => homeStore.setPage(homeStore.page + 1);

    return (
        <StContainer p={1} display='flex' justify='center'>
            <StInfiniteScroll
                dataLength={homeStore.videos.length}
                next={fetchMoreData}
                hasMore={homeStore.hasMore}
                loader={<CircularProgress />}
            >
                <Total total={homeStore.total} />
                <VideoList videos={homeStore.videos} />
            </StInfiniteScroll>

        </StContainer>
    )
};

const enhance = compose(
    inject(homeStoreSelector),
    observer,
);

export const Content = enhance(ContentView as any);
