import React from 'react';
import { Card, CardContent, CardMedia, createStyles, Theme, Typography } from "@material-ui/core";
import { StGrid, StText } from "../../../../Components";
import { AppTheme } from "../../../../assets/theme";
import { Video } from "../../models";
import { makeStyles } from "@material-ui/core/styles";
import { AppImages } from "../../../../assets";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            height: 240,
            maxWidth: 400,
        },
        media: {
            height: 140,
        },
    }),
);


export const VideoItem: any = ({ video }: { video: Video }) => {
    const classes = useStyles();
    const { Title, Type, Year, Poster } = video;

    return (
        <StGrid item xs={6}>
            <Card className={classes.root}>
                <CardMedia
                    className={classes.media}
                    image={Poster === 'N/A' ? AppImages.Video : Poster}
                />
                <CardContent>
                    <StText textcolor={AppTheme.colors.lightBlue}>
                        {Title}
                    </StText>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {Type} - {Year}
                    </Typography>
                </CardContent>
            </Card>
        </StGrid>
    );
};

