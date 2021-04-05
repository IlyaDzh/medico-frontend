import React, { useEffect } from "react";
import { observer } from "mobx-react";
import { Typography, makeStyles } from "@material-ui/core";

import { DialogBase } from "./DialogBase";
import { Button } from "components";
import { useStores } from "stores/useStore";
import { ConfirmationIcon } from "icons";

interface IDialogConfirmation {
    isOpen?: boolean;
}

const useStyles = makeStyles(() => ({
    confirmationText: {
        marginBottom: 24
    },
    formInput: {
        marginBottom: 24
    }
}));

export const DialogConfirmation: React.FC<IDialogConfirmation> = observer(
    ({ isOpen }) => {
        const classes = useStyles();
        const { modalsStore, routerStore } = useStores();
        const { getModalIsOpen, setModalIsOpen } = modalsStore;

        useEffect(() => {
            if (isOpen) {
                setModalIsOpen("confirmation", true);
            }
        }, []); // eslint-disable-line

        const handleSignIn = (): void => {
            setModalIsOpen("confirmation", false);
            setModalIsOpen("sign-in", true);
        };

        const handleClose = (): void => {
            setModalIsOpen("confirmation", false);
            routerStore.push("/");
        };

        return (
            <DialogBase
                isOpen={getModalIsOpen("confirmation")}
                title="Подтверждение"
                icon={<ConfirmationIcon />}
                onClose={handleClose}
                paperWidth={544}
            >
                <div className={classes.confirmationText}>
                    <Typography variant="h5">
                        Вы успешно зарегистрировались!
                    </Typography>
                    <Typography color="textSecondary">
                        Нажмите на кнопку, чтобы войти в систему
                    </Typography>
                </div>
                <Button
                    to="/"
                    onClick={handleSignIn}
                    variant="contained"
                    color="primary"
                    fullWidth
                >
                    Войти
                </Button>
            </DialogBase>
        );
    }
);
