import React from "react";
import { makeStyles, Theme } from "@material-ui/core";

import { SearchInput } from "components";

const useStyles = makeStyles((theme: Theme) => ({
    doctorsSearch: {
        padding: "20px 0 0"
    }
}));

export const DoctorsSearch: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.doctorsSearch}>
            <SearchInput placeholder="Поиск специалиста" fullWidth />
        </div>
    );
};
