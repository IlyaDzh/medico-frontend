import React from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";
import {
    TextField,
    Link as MaterialLink,
    makeStyles,
    Theme
} from "@material-ui/core";

import { DialogBase } from "./DialogBase";
import { Button, SubmissionError } from "components";
import { useStores } from "stores/useStore";
import { UserIcon } from "icons";

const useStyles = makeStyles((theme: Theme) => ({
    dialogForm: {
        marginBottom: 18
    },
    formInput: {
        marginBottom: 12
    },
    linkCenter: {
        textAlign: "center"
    },
    dialogLink: {
        textDecoration: "underline",
        fontSize: 14,
        color: theme.palette.text.secondary,
        "&:hover": {
            textDecoration: "none"
        }
    }
}));

export const DialogSignIn: React.FC = observer(() => {
    const classes = useStyles();
    const { modalsStore, signInStore } = useStores();
    const { getModalIsOpen, setModalIsOpen } = modalsStore;
    const {
        signInForm,
        pending,
        submissionError,
        setFormValue,
        doSignIn
    } = signInStore;

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        doSignIn();
    };

    const handleClose = (): void => {
        setModalIsOpen("sign-in", false);
    };

    return (
        <DialogBase
            isOpen={getModalIsOpen("sign-in")}
            title="Вход"
            icon={<UserIcon color="#fff" width={32} height={32} />}
            onClose={handleClose}
        >
            <form className={classes.dialogForm} onSubmit={handleSubmit}>
                <TextField
                    className={classes.formInput}
                    variant="outlined"
                    color="secondary"
                    placeholder="E-mail"
                    value={signInForm.email}
                    onChange={event => setFormValue("email", event.target.value)}
                    fullWidth
                />
                <TextField
                    type="password"
                    className={classes.formInput}
                    variant="outlined"
                    color="secondary"
                    placeholder="Пароль"
                    value={signInForm.password}
                    onChange={event => setFormValue("password", event.target.value)}
                    fullWidth
                />
                <div className={classes.linkCenter}>
                    <MaterialLink
                        className={classes.dialogLink}
                        type="button"
                        component="button"
                        variant="h6"
                        onClick={() => {
                            console.info("open forget-password dialog");
                        }}
                    >
                        Забыли пароль?
                    </MaterialLink>
                </div>
                <SubmissionError align="center">{submissionError}</SubmissionError>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={pending}
                    isLoaded={pending}
                    fullWidth
                >
                    Войти
                </Button>
            </form>
            <div className={classes.linkCenter}>
                <Link
                    className={classes.dialogLink}
                    onClick={handleClose}
                    to="sign-up"
                >
                    Зарегистрироваться
                </Link>
            </div>
        </DialogBase>
    );
});
