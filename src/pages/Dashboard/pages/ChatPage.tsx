import React from "react";
import { makeStyles, Theme } from "@material-ui/core";

import { Dialogs, Messages } from "../components";

const useStyles = makeStyles((theme: Theme) => ({
    chat: {
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        display: "flex",
        height: "calc(100vh - 83px)",
        minHeight: 350,
        [theme.breakpoints.down("sm")]: {
            height: "calc(100vh - 61px)"
        }
    }
}));

export const ChatPage: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.chat}>
            <Dialogs />
            <Messages />
        </div>
    );
};
