import React from 'react';
import { Card, CardContent } from "@material-ui/core";
import { inject } from "mobx-react";
import { StGrid, StText } from "../../../../Components";
import { AppTheme } from "../../../../assets/theme";
import { homeStoreSelector, WithHomeStore } from "../../HomeStore";
import { Video } from "../../models";

interface Props extends WithHomeStore {
    video: Video
}

const VideoItemView: any = ({ video, homeStore }: Props) => {

    const { Title, Type, Poster, Year } = video;

    return (
        <>
            <StGrid item xs={6}>
                <Card style={{ height: 150 }}>
                    <CardContent>
                        <StText textcolor={AppTheme.colors.lightBlue}>
                            {Title}
                        </StText>
                        <StText textcolor={AppTheme.colors.gray} mt={1}>
                            {Type}
                        </StText>
                        <StText textcolor={AppTheme.colors.gray}>
                            {Year}
                        </StText>
                    </CardContent>
                </Card>
            </StGrid>
        </>
    );
};

export const VideoItem = inject(homeStoreSelector)(VideoItemView)
