import React from "react";
import { observer } from "mobx-react";
import { TextField, IconButton, makeStyles, Theme } from "@material-ui/core";

import { AppendFileIcon, SendMessageIcon } from "icons";
import { useStores } from "stores/useStore";

const useStyles = makeStyles((theme: Theme) => ({
    messagesInput: {
        display: "flex",
        padding: "8px 14px",
        backgroundColor: "#fff"
    },
    textField: {
        margin: "0 12px"
    },
    inputBase: {
        padding: "12px 16px"
    },
    iconButton: {
        width: 52,
        height: 52
    }
}));

export const MessagesInput: React.FC = observer(() => {
    const classes = useStyles();
    const { chatStore } = useStores();
    const { messageText, setMessageText, sendMessage } = chatStore;

    const handleFileAttachment = (files: any): void => {
        if (files && files.length !== 0) {
            // setFile(files[0]);
            console.log(files[0]);
        }
    };

    const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>): void => {
        if (event.key === "Enter") {
            if (!event.shiftKey) {
                event.preventDefault();
                event.stopPropagation();
                sendMessage();
            }
        }
    };

    const handleSendClick = (): void => {
        sendMessage();
    };

    return (
        <div className={classes.messagesInput}>
            <label htmlFor="message-file">
                <IconButton
                    className={classes.iconButton}
                    component="span"
                    aria-label="Прикрепить файл"
                >
                    <AppendFileIcon />
                </IconButton>
            </label>
            <input
                id="message-file"
                type="file"
                onChange={event => handleFileAttachment(event.target.files)}
                multiple
                hidden
            />
            <TextField
                className={classes.textField}
                variant="outlined"
                color="secondary"
                placeholder="Введите текст"
                onKeyDown={onKeyDown}
                value={messageText}
                onChange={event => setMessageText(event.target.value)}
                rowsMax={4}
                InputProps={{
                    classes: {
                        root: classes.inputBase
                    }
                }}
                multiline
                fullWidth
            />
            <IconButton
                className={classes.iconButton}
                onClick={handleSendClick}
                aria-label="Отправить сообщение"
            >
                <SendMessageIcon />
            </IconButton>
        </div>
    );
});
