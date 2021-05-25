import React from "react";
import { Link } from "react-router-dom";
import {
    Typography,
    IconButton,
    Hidden,
    makeStyles,
    Theme
} from "@material-ui/core";

import { Avatar, Button } from "components";
import { PhoneIcon, CameraIcon, DialogsLeftArrowIcon } from "icons";
import { Dialog } from "stores/interfaces/IChatStore";
import { formatSpecialties } from "utils/formatSpecialties";

interface IMessagesHeader {
    dialog: Dialog;
}

const useStyles = makeStyles((theme: Theme) => ({
    header: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "8px 28px",
        backgroundColor: "#fff",
        [theme.breakpoints.down("sm")]: {
            padding: "8px 16px"
        }
    },
    headerLeft: {
        display: "flex",
        alignItems: "center"
    },
    interlocutorInfo: {
        marginLeft: 18
    },
    iconButton: {
        minWidth: 44,
        height: 44,
        padding: 0,
        borderRadius: "50%"
    },
    dialogsButton: {
        minWidth: 48,
        height: 48,
        padding: 0,
        marginRight: 16
    }
}));

const communicationMethods = {
    2: <PhoneIcon color="#5a5f6f" width={25} height={25} />,
    3: <CameraIcon color="#5a5f6f" width={25} height={25} />
};

export const MessagesHeader: React.FC<IMessagesHeader> = ({ dialog }) => {
    const classes = useStyles();

    return (
        <div className={classes.header}>
            <div className={classes.headerLeft}>
                <Hidden smUp>
                    <IconButton
                        className={classes.dialogsButton}
                        component={Link}
                        to="/dashboard/chat"
                        aria-label="Перейти к диалогам"
                    >
                        <DialogsLeftArrowIcon />
                    </IconButton>
                </Hidden>
                <Avatar
                    size={48}
                    src={
                        dialog.interlocutor.avatar
                            ? process.env.REACT_APP_API_BASE_URL +
                              dialog.interlocutor.avatar
                            : undefined
                    }
                    alt={`${dialog.interlocutor.name} аватар`}
                />
                <div className={classes.interlocutorInfo}>
                    <Typography variant="body2">
                        {dialog.interlocutor.name} {dialog.interlocutor.surname}
                    </Typography>
                    {dialog.interlocutor.specialties && (
                        <Typography variant="h6" color="textPrimary">
                            {formatSpecialties(dialog.interlocutor.specialties)}
                        </Typography>
                    )}
                </div>
            </div>
            {dialog.isOpenedAccess && dialog.communicationMethod && (
                <Button
                    className={classes.iconButton}
                    variant="contained"
                    color="default"
                    aria-label={dialog.communicationMethod.method}
                >
                    {communicationMethods[dialog.communicationMethod.id as 2 | 3]}
                </Button>
            )}
        </div>
    );
};
