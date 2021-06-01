import React, { memo } from "react";
import clsx from "clsx";
import { Typography, makeStyles, Theme } from "@material-ui/core";
import { InsertDriveFile as InsertDriveFileIcon } from "@material-ui/icons";

import { Avatar, Loader } from "components";
import { Message } from "stores/interfaces/IChatStore";
import { formatDate } from "utils/formatDate";
import { bytesToMegaBytes } from "utils/bytesToMegaBytes";

interface IMessageItem {
    message: Message;
    isMy: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
    message: isMy => ({
        display: "inline-flex",
        position: "relative",
        padding: "14px 18px",
        backgroundColor: isMy ? "#cdeafc" : "#eceff9",
        margin: isMy ? "0 54px 30px auto" : "0 auto 30px 54px",
        wordBreak: "break-word",
        borderRadius: 8,
        maxWidth: 400,
        "&::after": {
            content: '""',
            position: "absolute",
            right: isMy ? -8 : "unset",
            left: isMy ? "unset" : -8,
            bottom: 0,
            borderTop: "26px solid transparent",
            borderLeft: isMy ? "14px solid #cdeafc" : "unset",
            borderRight: isMy ? "unset" : "14px solid #eceff9"
        },
        [theme.breakpoints.down("sm")]: {
            padding: "10px 14px"
        },
        [theme.breakpoints.down("xs")]: {
            padding: "8px 12px"
        }
    }),
    messageRemovePadding: {
        padding: "0 !important",
        background: "none !important",
        minWidth: 60,
        "&::after": {
            content: "none !important"
        }
    },
    messageText: {
        wordBreak: "break-word",
        whiteSpace: "pre-line",
        lineHeight: "22px"
    },
    messageDate: isMy => ({
        position: "absolute",
        left: isMy ? 2 : "unset",
        right: isMy ? "unset" : 2,
        bottom: -22,
        color: theme.palette.text.hint
    }),
    avatar: isMy => ({
        position: "absolute",
        right: isMy ? -52 : "unset",
        left: isMy ? "unset" : -52,
        bottom: 0
    }),
    audio: {
        width: 350,
        "&:focus": {
            outline: "none"
        },
        [theme.breakpoints.down("md")]: {
            width: 280
        },
        [theme.breakpoints.down("sm")]: {
            width: 220
        }
    },
    image: {
        width: "100%",
        borderRadius: 8,
        lineHeight: "48px"
    },
    file: {
        display: "flex",
        alignItems: "center",
        textDecoration: "none"
    },
    fileIcon: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minWidth: 44,
        minHeight: 44,
        borderRadius: "50%",
        backgroundColor: theme.palette.background.blue,
        marginRight: 12
    },
    loader: isMy => ({
        position: "absolute",
        left: isMy ? 2 : "unset",
        right: isMy ? "unset" : 2,
        bottom: -24
    })
}));

export const MessageItem: React.FC<IMessageItem> = memo(({ message, isMy }) => {
    const classes = useStyles(isMy);

    return (
        <div
            className={clsx(
                classes.message,
                message.file &&
                    (message.file.type === "audio" ||
                        message.file.type === "image") &&
                    classes.messageRemovePadding
            )}
        >
            {message.file ? (
                message.file.type === "audio" ? (
                    <audio className={classes.audio} controls>
                        <source
                            src={
                                message.uuid
                                    ? message.file.path
                                    : process.env.REACT_APP_API_BASE_URL +
                                      message.file.path
                            }
                            type="audio/wav"
                        />
                        Your browser does not support the audio tag.
                    </audio>
                ) : message.file.type === "file" ? (
                    <a
                        className={classes.file}
                        href={
                            message.uuid
                                ? message.file.path
                                : process.env.REACT_APP_API_BASE_URL +
                                  message.file.path
                        }
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div className={classes.fileIcon}>
                            <InsertDriveFileIcon htmlColor="#fff" />
                        </div>
                        <div>
                            <Typography variant="body1" color="textSecondary">
                                {message.file.name || <i>Неизвестно</i>}
                            </Typography>
                            <Typography variant="h6" color="textSecondary">
                                {bytesToMegaBytes(message.file.size || 0)}
                            </Typography>
                        </div>
                    </a>
                ) : (
                    <img
                        className={classes.image}
                        src={
                            message.uuid
                                ? message.file.path
                                : process.env.REACT_APP_API_BASE_URL +
                                  message.file.path
                        }
                        alt="Изображение не найдено"
                    />
                )
            ) : (
                <Typography
                    className={classes.messageText}
                    variant="body1"
                    color="textSecondary"
                >
                    {message.text}
                </Typography>
            )}
            {message.pending ? (
                <span className={classes.loader}>
                    <Loader level={1} />
                </span>
            ) : (
                <Typography className={classes.messageDate} variant="h6">
                    {formatDate(message.createdAt.toString())}
                </Typography>
            )}
            <Avatar
                className={classes.avatar}
                size={48}
                src={
                    message.user.avatar
                        ? process.env.REACT_APP_API_BASE_URL + message.user.avatar
                        : undefined
                }
                alt={`${message.user.name} аватар`}
            />
        </div>
    );
});
