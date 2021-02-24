import React from "react";
import {
    TextField,
    FormControlLabel,
    Checkbox,
    Link,
    Typography,
    makeStyles
} from "@material-ui/core";

import { DialogBase } from "./DialogBase";
import { Button } from "components";
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

export const DialogReset: React.FC = () => {
    const classes = useStyles();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        console.log("submit");
    };

    return (
        <DialogBase
            title="Сброс пароля"
            icon={<ResetIcon />}
            onClose={() => console.log("close")}
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
};
