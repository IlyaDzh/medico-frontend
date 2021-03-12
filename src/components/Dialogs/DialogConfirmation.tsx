import React from "react";
import { observer } from "mobx-react";
import { Typography, TextField, makeStyles } from "@material-ui/core";

import { DialogBase } from "./DialogBase";
import { Button } from "components";
import { useStores } from "stores/useStore";
import { ConfirmationIcon } from "icons";

const useStyles = makeStyles(() => ({
    confirmationText: {
        marginBottom: 24
    },
    formInput: {
        marginBottom: 24,
        "& .MuiOutlinedInput-notchedOutline": {
            "& legend": {
                lineHeight: "12px"
            }
        }
    }
}));

export const DialogConfirmation: React.FC = observer(() => {
    const classes = useStyles();
    const { modalsStore } = useStores();
    const { getModalIsOpen, setModalIsOpen } = modalsStore;

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        console.log("submit");
    };

    const handleClose = (): void => {
        setModalIsOpen("confirmation", false);
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
                <Typography variant="h5">Вы успешно зарегистрировались!</Typography>
                <Typography color="textSecondary">
                    Введите пароль, чтобы войти в систему
                </Typography>
            </div>
            <form onSubmit={handleSubmit}>
                <TextField
                    type="password"
                    className={classes.formInput}
                    variant="outlined"
                    color="secondary"
                    placeholder="Пароль"
                    fullWidth
                />
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Войти
                </Button>
            </form>
        </DialogBase>
    );
});
