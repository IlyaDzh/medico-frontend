import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react";
import { makeStyles, Theme } from "@material-ui/core";

import { MessagesHeader } from "./MessagesHeader";
import { MessagesList } from "./MessagesList";
import { MessagesInput } from "./MessagesInput";
import { useStores } from "stores/useStore";

const useStyles = makeStyles((theme: Theme) => ({
    messages: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        width: "100%"
    }
}));

export const Messages: React.FC = observer(() => {
    const classes = useStyles();
    const { chatId } = useParams<{ chatId: string }>();
    const { chatStore } = useStores();
    const { dialogs, currentDialog, setCurrentDialog, resetCurrentDialog } =
        chatStore;

    useEffect(() => {
        if (dialogs.length === 0 || !chatId) {
            return;
        }

        setCurrentDialog(chatId);
    }, [dialogs, chatId, setCurrentDialog]);

    useEffect(() => {
        return () => resetCurrentDialog();
    }, [resetCurrentDialog]);

    return currentDialog ? (
        <div className={classes.messages}>
            <MessagesHeader dialog={currentDialog} />
            <MessagesList />
            <MessagesInput />
        </div>
    ) : (
        <div>Диалог не выбран</div>
    );
});
