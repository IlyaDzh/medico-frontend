import React from "react";
import { NavLink } from "react-router-dom";
import { Typography, makeStyles, Theme } from "@material-ui/core";

import { Avatar } from "components";
import { Dialog } from "stores/interfaces/IChatStore";
import { formatSpecialties } from "utils/formatSpecialties";
import { formatDate } from "utils/formatDate";

interface IDialogItem {
    dialog: Dialog;
}

const useStyles = makeStyles((theme: Theme) => ({
    dialog: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "9px 22px 9px 8px",
        backgroundColor: "#fff",
        borderRadius: 8,
        marginBottom: 6,
        textDecoration: "none",
        "&:hover:not($dialogActive)": {
            backgroundColor: "#f6f9fc"
        },
        "&:last-child": {
            marginBottom: 0
        }
    },
    dialogActive: {
        backgroundColor: theme.palette.background.blue,
        "& .MuiTypography-root": {
            color: "#fff"
        }
    },
    dialogUser: {
        display: "flex",
        alignItems: "center",
        width: "100%"
    },
    dialogUserInfo: {
        display: "grid",
        overflow: "hidden",
        marginLeft: 12
    }
}));

export const DialogItem: React.FC<IDialogItem> = ({ dialog }) => {
    const classes = useStyles();

    return (
        <NavLink
            to={`/dashboard/chat/${dialog.id}`}
            activeClassName={classes.dialogActive}
            className={classes.dialog}
        >
            <div className={classes.dialogUser}>
                <Avatar
                    size={52}
                    src={
                        dialog.interlocutor.avatar
                            ? process.env.REACT_APP_API_BASE_URL +
                              dialog.interlocutor.avatar
                            : undefined
                    }
                    alt={`${dialog.interlocutor.name} аватар`}
                />
                <div className={classes.dialogUserInfo}>
                    <Typography variant="body2" color="textSecondary" noWrap>
                        {dialog.interlocutor.name} {dialog.interlocutor.surname}
                    </Typography>
                    {dialog.interlocutor.specialties && (
                        <Typography variant="h6" color="textSecondary" noWrap>
                            {formatSpecialties(dialog.interlocutor.specialties)}
                        </Typography>
                    )}
                </div>
            </div>
            {dialog.messages.length > 0 && (
                <Typography variant="h6" color="textSecondary">
                    {formatDate(dialog.messages[0].createdAt.toString())}
                </Typography>
            )}
        </NavLink>
    );
};
