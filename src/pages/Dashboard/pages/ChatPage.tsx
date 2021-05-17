import React from "react";
import clsx from "clsx";
import { makeStyles, Theme } from "@material-ui/core";

import { DialogList, MessageList } from "../components";

const useStyles = makeStyles((theme: Theme) => ({
    chat: {
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        display: "flex",
        height: "calc(100vh - 83px)",
        [theme.breakpoints.down("sm")]: {
            height: "calc(100vh - 61px)"
        }
    }
}));

export const ChatPage: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={clsx(classes.chat, "chat-scrollbar")}>
            <DialogList />
            <MessageList />
        </div>
    );
};
