import React from "react";
import { TextField, IconButton, makeStyles, Theme } from "@material-ui/core";

import { AppendFileIcon, SendMessageIcon } from "icons";

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

export const MessagesInput: React.FC = () => {
    const classes = useStyles();

    const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>): void => {
        if (event.key === "Enter") {
            if (!event.shiftKey) {
                event.preventDefault();
                event.stopPropagation();
                // sendMessage();
                console.log("send message");
            }
        }
    };

    return (
        <div className={classes.messagesInput}>
            <IconButton className={classes.iconButton} aria-label="Прикрепить файл">
                <AppendFileIcon />
            </IconButton>
            <TextField
                className={classes.textField}
                variant="outlined"
                color="secondary"
                placeholder="Введите текст"
                onKeyDown={onKeyDown}
                // value={commentForm.text}
                // onChange={event => setFormValue("text", event.target.value)}
                rowsMax={4}
                // error={Boolean(commentFormErrors.text)}
                // helperText={commentFormErrors.text}
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
                aria-label="Отправить сообщение"
            >
                <SendMessageIcon />
            </IconButton>
        </div>
    );
};
