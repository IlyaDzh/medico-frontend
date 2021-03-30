import React from "react";
import { observer } from "mobx-react";
import { Typography, makeStyles } from "@material-ui/core";

import { DialogBase } from "./DialogBase";
import { Button } from "components";
import { useStores } from "stores/useStore";
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

export const DialogEmail: React.FC = observer(() => {
    const classes = useStyles();
    const { modalsStore, signUpStore } = useStores();
    const { getModalIsOpen, setModalIsOpen } = modalsStore;
    const { sentEmail, sendMail, resetForm } = signUpStore;

    const handleClose = (): void => {
        setModalIsOpen("email", false);
        resetForm();
    };

    return (
        <DialogBase
            isOpen={getModalIsOpen("email")}
            title="Регистрация"
            icon={<UserPlusIcon />}
            onClose={handleClose}
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
            <Button
                variant="outlined"
                color="primary"
                onClick={sendMail}
                disabled={sentEmail}
                fullWidth
            >
                Отправить письмо повторно
            </Button>
        </DialogBase>
    );
});
