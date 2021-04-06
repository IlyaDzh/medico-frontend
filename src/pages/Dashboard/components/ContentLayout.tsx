import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    layout: {
        padding: "56px 80px"
    }
}));

export const ContentLayout: React.FC = ({ children }) => {
    const classes = useStyles();

    return <section className={classes.layout}>{children}</section>;
};
