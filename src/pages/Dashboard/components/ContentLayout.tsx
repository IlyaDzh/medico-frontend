import React from "react";
import { makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
    layout: {
        padding: "56px 80px",
        width: "100%",
        [theme.breakpoints.down("sm")]: {
            padding: "28px 40px"
        },
        [theme.breakpoints.down("xs")]: {
            padding: "20px 24px"
        }
    }
}));

export const ContentLayout: React.FC = ({ children }) => {
    const classes = useStyles();

    return <section className={classes.layout}>{children}</section>;
};
