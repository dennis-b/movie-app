import React from 'react';
import { StGrid } from "../../../Components";
import { Button, TextField } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';

export const SearchBar = ({ onSearch, onYearChange, onTitleChange, title, year }) => {


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
                        value={title}
                        label="Enter Title"
                        onChange={onTitleChange}
                    />
                </StGrid>
                <StGrid item>
                    <TextField
                        value={year}
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
