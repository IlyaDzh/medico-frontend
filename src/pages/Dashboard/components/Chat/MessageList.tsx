import React from "react";
import { makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
    messages: {
        width: "100%",
        paddingTop: 12
    }
}));

export const MessageList: React.FC = () => {
    const classes = useStyles();

    return <div className={classes.messages}>messages</div>;
};
