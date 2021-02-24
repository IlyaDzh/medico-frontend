import React from "react";
import { Typography, makeStyles } from "@material-ui/core";

import { DialogBase } from "./DialogBase";
import { Button } from "components";
import { UserPlusIcon, MailIcon } from "icons";

const useStyles = makeStyles(() => ({
    content: {
        display: "flex",
        alignItems: "center",
        marginBottom: 36
    },
    icon: {
        marginRight: 24
    }
}));

export const DialogEmail: React.FC = () => {
    const classes = useStyles();

    return (
        <DialogBase
            title="Регистрация"
            icon={<UserPlusIcon />}
            onClose={() => console.log("close")}
            paperWidth={544}
        >
            <div className={classes.content}>
                <span className={classes.icon}>
                    <MailIcon />
                </span>
                <Typography variant="body2" color="textSecondary">
                    На вашу почту отправлено письмо с подтверждением регистрации
                </Typography>
            </div>
            <Button variant="outlined" color="primary" fullWidth>
                Отправить письмо повторно
            </Button>
        </DialogBase>
    );
};
