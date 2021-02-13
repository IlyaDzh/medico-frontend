import React from "react";
import clsx from "clsx";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    Typography,
    IconButton,
    makeStyles,
    Theme
} from "@material-ui/core";

import { CrossIcon } from "icons";

interface IDialogBase {
    title: string;
    icon: React.ReactNode;
    onClose: () => any;
}

const useStyles = makeStyles((theme: Theme) => ({
    dialogPaper: {
        width: "100%",
        maxWidth: 481
    },
    dialogTitle: {
        display: "flex",
        justifyContent: "space-between",
        padding: 0
    },
    dialogTitleInner: {
        display: "flex",
        alignItems: "center",
        padding: "30px 56px 30px 48px",
        backgroundColor: theme.palette.background.blue,
        borderBottomRightRadius: 16,
        [theme.breakpoints.down("sm")]: {
            padding: "22px 44px 22px 32px"
        },
        [theme.breakpoints.down("xs")]: {
            padding: "12px 30px 12px 16px"
        }
    },
    dialogTitleText: {
        color: "#fff",
        marginLeft: 16
    },
    closeButton: {
        padding: 8
    },
    dialogContent: {
        padding: "32px 48px",
        [theme.breakpoints.down("sm")]: {
            padding: "30px 36px"
        },
        [theme.breakpoints.down("xs")]: {
            padding: "28px 24px"
        }
    }
}));

export const DialogBase: React.FC<IDialogBase> = ({
    title,
    icon,
    onClose,
    children
}) => {
    const classes = useStyles();

    return (
        <Dialog
            scroll="body"
            PaperProps={{ className: clsx(classes.dialogPaper) }}
            open={true}
            onClose={onClose}
            aria-labelledby="alert-dialog-title"
        >
            <DialogTitle
                id="alert-dialog-title"
                className={classes.dialogTitle}
                disableTypography
            >
                <div className={classes.dialogTitleInner}>
                    {icon}{" "}
                    <Typography className={classes.dialogTitleText} variant="h3">
                        {title}
                    </Typography>
                </div>
                <div className={classes.closeButton}>
                    <IconButton aria-label="close dialog" onClick={onClose}>
                        <CrossIcon />
                    </IconButton>
                </div>
            </DialogTitle>
            <DialogContent className={classes.dialogContent}>
                {children}
            </DialogContent>
        </Dialog>
    );
};
