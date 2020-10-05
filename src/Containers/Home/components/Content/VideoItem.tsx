import React from 'react';
import { Card, CardContent } from "@material-ui/core";
import { StGrid, StText } from "../../../../Components";
import { AppTheme } from "../../../../assets/theme";


export const VideoItem: any = ({ video }) => {

    const { Title, Type, Year } = video;

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

