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
        padding: "0 40px",
        marginRight: 6,
        overflowY: "auto"
    },
    loader: {
        position: "absolute",
        top: 64,
        left: "50%",
        transform: "translateX(-50%)"
    }
}));

export const MessagesList: React.FC = observer(() => {
    const classes = useStyles();
    const { chatStore, userStore } = useStores();
    const { currentDialog, hasMore, pendingMessages, getMessages } = chatStore;
    const { currentUser } = userStore;

    useEffect(() => {
        if (currentDialog && currentDialog.messages.length === 1) {
            getMessages();
        }
    }, [currentDialog, getMessages]);

    const handleScrollList = (e: React.UIEvent<HTMLDivElement>): void => {
        let offset;

        if (e.currentTarget.scrollTop <= 0) {
            offset =
                e.currentTarget.scrollHeight -
                (Math.abs(e.currentTarget.scrollTop) + e.currentTarget.clientHeight);
        } else {
            offset = e.currentTarget.scrollTop;
        }

        // console.log(e.currentTarget.scrollTop, offset)

        if (offset < 160 && hasMore && !pendingMessages) {
            getMessages();
        }
    };

    return (
        <div
            className={clsx(classes.messagesList, "chat-scrollbar")}
            onScroll={handleScrollList}
        >
            {pendingMessages && (
                <div className={classes.loader}>
                    <Loader level={2} />
                </div>
            )}
            
            {currentDialog?.messages.map(message => (
                <MessageItem
                    key={message.id}
                    message={message}
                    isMy={message.user.id === currentUser!.id}
                />
            ))}

            <br />
        </div>
    );
});
