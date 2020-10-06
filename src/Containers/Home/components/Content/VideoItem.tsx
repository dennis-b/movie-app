import React from 'react';
import { CardContent, Typography } from "@material-ui/core";
import { StGrid, StText } from "../../../../Components";
import { AppTheme } from "../../../../assets/theme";
import { Video } from "../../models";
import { AppImages } from "../../../../assets";
import { StCard, StCardMedia } from "./styled";

const NO_POSTER = 'N/A'

export const VideoItem: any = ({ video }: { video: Video }) => {
    const { Title, Type, Year, Poster } = video;

    return (
        <StGrid item xs={6}>
            <StCard>
                <StCardMedia image={Poster === NO_POSTER ? AppImages.Video : Poster} />
                <CardContent>
                    <StText textcolor={AppTheme.colors.lightBlue}>
                        {Title}
                    </StText>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {Type} - {Year}
                    </Typography>
                </CardContent>
            </StCard>
        </StGrid>
    );
};

