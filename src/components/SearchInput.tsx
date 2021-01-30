import React from "react";
import {
    TextField,
    InputAdornment,
    IconButton,
    makeStyles,
    Theme,
    TextFieldProps
} from "@material-ui/core";

import { SearchIcon, CrossIcon } from "icons";

interface ISearchInput {}

const useStyles = makeStyles((theme: Theme) => ({
    searchInput: {},
    cross: {
        padding: 8
    }
}));

export const SearchInput: React.FC<ISearchInput & TextFieldProps> = ({
    placeholder = "Поиск",
    ...props
}) => {
    const classes = useStyles();

    return (
        <TextField
            className={classes.searchInput}
            variant="outlined"
            placeholder={placeholder}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                ),
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton
                            className={classes.cross}
                            aria-label="remove all text"
                        >
                            <CrossIcon width={18} height={18} />
                        </IconButton>
                    </InputAdornment>
                )
            }}
            {...props}
        />
    );
};
