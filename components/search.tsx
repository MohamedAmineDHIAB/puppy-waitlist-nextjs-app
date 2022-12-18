import { IconButton, InputAdornment, OutlinedInput } from "@mui/material";
import React from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
type SearchProps = {
    value: string;
    handleChange: (newValue: string) => void;
};
const Search = ({ value, handleChange }: SearchProps) => {
    return (
        <OutlinedInput
            id="search-bar"
            type="text"
            endAdornment={
                <InputAdornment position="end">
                    <IconButton>
                        <SearchRoundedIcon />
                    </IconButton>
                </InputAdornment>
            }
            placeholder="Search"
            color="secondary"
            value={value}
            onChange={(e) => handleChange(e.target.value)}
        />
    );
};

export default Search;
