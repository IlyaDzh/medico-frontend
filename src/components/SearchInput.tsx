import React from "react";
import { TextField, makeStyles, Theme, TextFieldProps } from "@material-ui/core";

interface ISearchInput {}

const useStyles = makeStyles((theme: Theme) => ({
    searchInput: {}
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
            {...props}
        />
    );
};
