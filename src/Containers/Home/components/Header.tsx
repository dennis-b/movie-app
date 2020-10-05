import React from 'react';
import { StContainer, StText } from "../../../Components";
import { AppTheme } from "../../../assets/theme";

export const Header = () => {
    return (
        <StContainer
            display='flex'
            justify='center'
            width={'100%'}
            pt={1}
            pb={1}
            bgColor={AppTheme.colors.lightBlue}
        >
            <StText
                size={AppTheme.fontSizes.largeX2}
                weight={'bold'}
                textcolor={AppTheme.colors.blueDark}
            >
                Movie search application
            </StText>
        </StContainer>
    );
};
