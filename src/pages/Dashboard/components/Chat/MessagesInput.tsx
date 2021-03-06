import React, { useState, useEffect } from "react";
import { observer } from "mobx-react";
import { useReactMediaRecorder } from "react-media-recorder";
import {
    Typography,
    TextField,
    IconButton,
    makeStyles,
    Theme
} from "@material-ui/core";
import {
    MicNone as MicNoneIcon,
    StopOutlined as StopOutlinedIcon,
    DeleteOutline as DeleteOutlineIcon
} from "@material-ui/icons";

import { AppendFileIcon, SendMessageIcon } from "icons";
import { useStores } from "stores/useStore";

const useStyles = makeStyles((theme: Theme) => ({
    messagesInput: {
        display: "flex",
        alignItems: "center",
        padding: "8px 14px",
        backgroundColor: "#fff",
        [theme.breakpoints.down("sm")]: {
            padding: "6px 10px"
        }
    },
    textField: {
        margin: "0 12px",
        [theme.breakpoints.down("xs")]: {
            margin: "0 8px"
        }
    },
    audioCaption: {
        width: "100%",
        margin: "0 12px",
        [theme.breakpoints.down("xs")]: {
            margin: "0 8px"
        }
    },
    audio: {
        width: "100%",
        margin: "0 12px",
        "&:focus": {
            outline: "none"
        },
        [theme.breakpoints.down("xs")]: {
            margin: "0 8px"
        }
    },
    inputBase: {
        padding: "12px 16px"
    },
    iconButton: {
        width: 52,
        height: 52,
        padding: 0,
        [theme.breakpoints.down("sm")]: {
            width: 48,
            height: 48
        },
        [theme.breakpoints.down("xs")]: {
            width: 42,
            height: 42
        }
    }
}));

export const MessagesInput: React.FC = observer(() => {
    const classes = useStyles();
    const [isRecording, setIsRecording] = useState<boolean>(false);
    const { chatStore } = useStores();
    const {
        messageText,
        setMessageText,
        sendMessage,
        sendAudio,
        sendFile,
        setAudioBlobUrl
    } = chatStore;
    const { startRecording, stopRecording, mediaBlobUrl, clearBlobUrl } =
        useReactMediaRecorder({
            audio: true,
            video: false
        });

    useEffect(() => {
        if (mediaBlobUrl) {
            setAudioBlobUrl(mediaBlobUrl);
        }
    }, [mediaBlobUrl, setAudioBlobUrl]);

    const handleFileAttachment = (files: any): void => {
        if (files && files.length !== 0) {
            sendFile(files[0]);
        }
    };

    const handleAudioClick = (): void => {
        if (mediaBlobUrl) {
            clearBlobUrl();
            return;
        }

        if (!isRecording) {
            setIsRecording(true);
            startRecording();
        } else {
            setIsRecording(false);
            stopRecording();
        }
    };

    const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>): void => {
        if (event.key === "Enter") {
            if (!event.shiftKey) {
                event.preventDefault();
                event.stopPropagation();
                if (mediaBlobUrl) {
                    sendAudio();
                    clearBlobUrl();
                } else {
                    sendMessage();
                }
            }
        }
    };

    const handleSendClick = (): void => {
        if (mediaBlobUrl) {
            sendAudio();
            clearBlobUrl();
        } else {
            sendMessage();
        }
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
                hidden
            />
            <IconButton
                className={classes.iconButton}
                onClick={handleAudioClick}
                aria-label="Записать голосовое сообщение"
            >
                {mediaBlobUrl ? (
                    <DeleteOutlineIcon htmlColor="#212121" />
                ) : isRecording ? (
                    <StopOutlinedIcon htmlColor="#212121" />
                ) : (
                    <MicNoneIcon htmlColor="#212121" />
                )}
            </IconButton>
            {!mediaBlobUrl ? (
                !isRecording ? (
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
                ) : (
                    <Typography
                        className={classes.audioCaption}
                        variant="body1"
                        color="textSecondary"
                    >
                        Идет запись аудио...
                    </Typography>
                )
            ) : (
                <audio className={classes.audio} controls>
                    <source src={mediaBlobUrl} type="audio/wav" />
                    Your browser does not support the audio tag.
                </audio>
            )}
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
