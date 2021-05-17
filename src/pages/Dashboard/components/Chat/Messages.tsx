import React from "react";
import { makeStyles, Theme } from "@material-ui/core";

import { MessagesHeader } from "./MessagesHeader";
import { MessagesInput } from "./MessagesInput";

const useStyles = makeStyles((theme: Theme) => ({
    messages: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        width: "100%"
    }
}));

export const Messages: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.messages}>
            <MessagesHeader />
            <MessagesInput />
        </div>
    );
};
