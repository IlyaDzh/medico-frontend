import React from "react";
import { makeStyles } from "@material-ui/core";

import { SearchInput } from "./";

const useStyles = makeStyles(() => ({
    doctorsSearch: {
        padding: "20px 0 0"
    }
}));

export const DoctorsSearch: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.doctorsSearch}>
            <SearchInput />
        </div>
    );
};
