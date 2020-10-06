import React from 'react';
import { StContainer, StText } from "../../../../Components";
import { AppTheme } from "../../../../assets/theme";

export const Total = ({ total }) => {
    if (total < 0) {
        return null
    }

    return (
        <StContainer display='flex' p={1}>
            <StText size={AppTheme.fontSizes.smallX2} textcolor={AppTheme.colors.lightBlue}>Total:</StText>
            <StText ml={1} textcolor={AppTheme.colors.gray2}>{total}</StText>
        </StContainer>
    );
};
