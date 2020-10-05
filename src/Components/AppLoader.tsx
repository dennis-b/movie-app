import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

import { LoaderContainer } from "./styled";

export function AppLoader() {
    return (
        <LoaderContainer>
            <CircularProgress />
        </LoaderContainer>
    )
}
