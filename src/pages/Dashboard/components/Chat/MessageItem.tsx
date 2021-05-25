import React, { memo } from "react";
import { Typography, makeStyles, Theme } from "@material-ui/core";

import { Avatar } from "components";
import { Message } from "stores/interfaces/IChatStore";
import { formatDate } from "utils/formatDate";

interface IMessageItem {
    message: Message;
    isMy: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
    message: isMy => ({
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
        }
    }),
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
    })
}));

export const MessageItem: React.FC<IMessageItem> = memo(({ message, isMy }) => {
    const classes = useStyles(isMy);

    return (
        <div className={classes.message}>
            <Typography
                className={classes.messageText}
                variant="body1"
                color="textSecondary"
            >
                {message.text} {message.id}
            </Typography>
            {message.pending ? (
                <Typography className={classes.messageDate} variant="h6">
                    доставляется...
                </Typography>
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
