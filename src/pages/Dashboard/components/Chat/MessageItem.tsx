import React, { memo } from "react";
import { makeStyles, Theme } from "@material-ui/core";

import { Message } from "stores/interfaces/IChatStore";

interface IMessageItem {
    message: Message;
}

const useStyles = makeStyles((theme: Theme) => ({
    message: {}
}));

export const MessageItem: React.FC<IMessageItem> = memo(({ message }) => {
    const classes = useStyles();

    console.log("render: ", message.id);

    return <div className={classes.message}>{message.text}</div>;
});
