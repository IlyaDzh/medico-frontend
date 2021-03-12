import React from "react";
import { observer } from "mobx-react";
import { TextField, makeStyles } from "@material-ui/core";

import { DialogBase } from "./DialogBase";
import { Button } from "components";
import { useStores } from "stores/useStore";
import { ResetIcon } from "icons";

const useStyles = makeStyles(() => ({
    formInput: {
        marginBottom: 36,
        "& .MuiOutlinedInput-notchedOutline": {
            "& legend": {
                lineHeight: "12px"
            }
        }
    },
    buttonMargin: {
        marginBottom: 16
    }
}));

export const DialogReset: React.FC = observer(() => {
    const classes = useStyles();
    const { modalsStore } = useStores();
    const { getModalIsOpen, setModalIsOpen } = modalsStore;

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        console.log("submit");
    };

    const handleClose = (): void => {
        setModalIsOpen("reset", false);
    };

    return (
        <DialogBase
            isOpen={getModalIsOpen("reset")}
            title="Сброс пароля"
            icon={<ResetIcon />}
            onClose={handleClose}
        >
            <form onSubmit={handleSubmit}>
                <TextField
                    type="email"
                    className={classes.formInput}
                    variant="outlined"
                    color="secondary"
                    placeholder="E-mail"
                    fullWidth
                />
                <Button
                    className={classes.buttonMargin}
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                >
                    Продолжить
                </Button>
                <Button variant="outlined" color="primary" fullWidth>
                    Назад
                </Button>
            </form>
        </DialogBase>
    );
});
