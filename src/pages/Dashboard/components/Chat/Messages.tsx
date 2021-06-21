import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react";
import { Hidden, makeStyles } from "@material-ui/core";

import { MessagesHeader } from "./MessagesHeader";
import { MessagesList } from "./MessagesList";
import { MessagesInput } from "./MessagesInput";
import { MessagesClosed } from "./MessagesClosed";
import { DialogNotSelected } from "./DialogNotSelected";
import { useStores } from "stores/useStore";

const useStyles = makeStyles(() => ({
    messages: {
        position: "relative",
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
        if (!chatId) {
            resetCurrentDialog();
            return;
        }

        if (dialogs.length === 0) {
            return;
        }

        setCurrentDialog(chatId);
    }, [dialogs, chatId, setCurrentDialog, resetCurrentDialog]);

    return currentDialog ? (
        <div className={classes.messages}>
            <MessagesHeader dialog={currentDialog} />
            <MessagesList />
            {/* {currentDialog.isOpenedAccess ? <MessagesInput /> : <MessagesClosed />} */}
            <MessagesInput />
        </div>
    ) : (
        <Hidden xsDown>
            <DialogNotSelected />
        </Hidden>
    );
});
