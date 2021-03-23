import React from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";
import {
    TextField,
    FormControlLabel,
    Checkbox,
    Link as MaterialLink,
    Typography,
    makeStyles,
    Theme
} from "@material-ui/core";

import { DialogBase } from "./DialogBase";
import { Button } from "components";
import { useStores } from "stores/useStore";
import { UserIcon } from "icons";

const useStyles = makeStyles((theme: Theme) => ({
    dialogForm: {
        marginBottom: 28
    },
    formInput: {
        marginBottom: 12
    },
    formFlex: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 26,
        paddingTop: 4,
        [theme.breakpoints.down(400)]: {
            display: "block",
            textAlign: "center"
        }
    },
    rememberMeLabel: {
        fontSize: 14
    },
    dialogFooter: {
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
    const { signInForm, setFormValue, doSignIn } = signInStore;

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
                    type="email"
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
                <div className={classes.formFlex}>
                    <FormControlLabel
                        control={<Checkbox color="secondary" />}
                        label={
                            <Typography
                                className={classes.rememberMeLabel}
                                variant="body2"
                                color="textSecondary"
                            >
                                Запомнить меня
                            </Typography>
                        }
                    />
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
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Войти
                </Button>
            </form>
            <div className={classes.dialogFooter}>
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
