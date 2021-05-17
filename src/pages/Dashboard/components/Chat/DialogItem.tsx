import React from "react";
import { NavLink } from "react-router-dom";
import { Typography, makeStyles, Theme } from "@material-ui/core";

import { Avatar } from "components";

interface IDialogItem {
    index: number;
}

const useStyles = makeStyles((theme: Theme) => ({
    dialog: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "9px 22px 9px 8px",
        background: "#fff",
        borderRadius: 8,
        marginBottom: 6,
        textDecoration: "none",
        "&:last-child": {
            marginBottom: 0
        }
    },
    dialogActive: {
        background: theme.palette.background.blue,
        "& .MuiTypography-root": {
            color: "#fff"
        }
    },
    dialogUser: {
        display: "flex",
        alignItems: "center"
    },
    dialogUserInfo: {
        marginLeft: 12
    }
}));

export const DialogItem: React.FC<IDialogItem> = ({ index }) => {
    const classes = useStyles();

    return (
        <NavLink
            to={`/dashboard/chat/${index}`}
            activeClassName={classes.dialogActive}
            className={classes.dialog}
        >
            <div className={classes.dialogUser}>
                <Avatar size={50} src={undefined} alt={`Илья аватар`} />
                <div className={classes.dialogUserInfo}>
                    <Typography variant="body2" color="textSecondary">
                        Алла Иванова
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                        Терапевт
                    </Typography>
                </div>
            </div>
            <Typography variant="h6" color="textSecondary">
                11:38
            </Typography>
        </NavLink>
    );
};
