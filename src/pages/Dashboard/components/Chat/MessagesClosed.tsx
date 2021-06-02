import React, { useState, useEffect } from "react";
import {
    Typography,
    TextField,
    IconButton,
    makeStyles,
    Theme
} from "@material-ui/core";

import { InfoIcon } from "icons";

const useStyles = makeStyles((theme: Theme) => ({
    messagesClosed: {
        display: "flex",
        justifyContent: "center",
        padding: "14px 32px",
        backgroundColor: "#fff",
        [theme.breakpoints.down("sm")]: {
            padding: "10px 16px"
        }
    },
    closedIcon: {
        paddingTop: 4,
        marginRight: 12,
        [theme.breakpoints.down("xs")]: {
            paddingTop: 0,
            marginRight: 8
        }
    },
    caption: {
        fontWeight: 400
    }
}));

export const MessagesClosed: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.messagesClosed}>
            <span className={classes.closedIcon}>
                <InfoIcon />
            </span>
            <Typography
                className={classes.caption}
                variant="h5"
                color="textSecondary"
            >
                К сожалению, доступ к чату разрешен только во время консультации
            </Typography>
        </div>
    );
};
