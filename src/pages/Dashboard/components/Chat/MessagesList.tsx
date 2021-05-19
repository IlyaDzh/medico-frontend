import React, { useEffect } from "react";
import clsx from "clsx";
import { observer } from "mobx-react";
import { makeStyles, Theme } from "@material-ui/core";

import { Loader } from "components";
import { MessageItem } from "./MessageItem";
import { useStores } from "stores/useStore";

const useStyles = makeStyles((theme: Theme) => ({
    messagesList: {
        display: "flex",
        flexDirection: "column-reverse",
        height: "100%",
        padding: "0 60px 20px",
        marginRight: 6,
        overflowY: "auto"
    },
    loader: {}
}));

export const MessagesList: React.FC = observer(() => {
    const classes = useStyles();
    const { chatStore } = useStores();
    const { currentDialog, hasMore, pendingMessages, getMessages } = chatStore;

    useEffect(() => {
        if (currentDialog && currentDialog.messages.length === 1) {
            getMessages();
        }
    }, [currentDialog, getMessages]);

    const handleScrollList = (e: React.UIEvent<HTMLDivElement>): void => {
        if (e.currentTarget.scrollTop < 160 && hasMore && !pendingMessages) {
            getMessages();
        }
    };

    return (
        <React.Fragment>
            {pendingMessages && (
                <div className={classes.loader}>
                    <Loader level={2} isCenter />
                </div>
            )}
            <div
                className={clsx(classes.messagesList, "chat-scrollbar")}
                onScroll={handleScrollList}
            >
                {currentDialog?.messages.map(message => (
                    <MessageItem key={message.id} message={message} />
                ))}
            </div>
        </React.Fragment>
    );
});
