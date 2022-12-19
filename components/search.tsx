import {
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
} from "@mui/material";
import React from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
type SearchProps = {
    value: string;
    handleChange: (newValue: string) => void;
};
const Search = ({ value, handleChange }: SearchProps) => {
    return (
        <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
                Search
            </InputLabel>
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
                label="Search"
                color="secondary"
                value={value}
                onChange={(e) => handleChange(e.target.value)}
            />
        </FormControl>
    );
};

export default Search;
