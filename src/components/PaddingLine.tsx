import React from "react";
import { makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
    paddingLine: {
        [theme.breakpoints.down("sm")]: {
            paddingTop: 60
        }
    }
}));

export const PaddingLine: React.FC = () => {
    const classes = useStyles();

    return <div className={classes.paddingLine} />;
};
