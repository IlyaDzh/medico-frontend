import React from "react";
import { Link } from "react-router-dom";
import {
    Typography,
    Link as MaterialLink,
    RadioGroup,
    FormControlLabel,
    Radio,
    FormControl,
    FormLabel,
    TextField,
    Checkbox,
    makeStyles,
    Theme
} from "@material-ui/core";

import { Button } from "components";
import { UserPlusIcon } from "icons";

const useStyles = makeStyles((theme: Theme) => ({
    header: {
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.down("xs")]: {
            display: "block"
        }
    },
    headerLeft: {
        display: "flex",
        justifyContent: "flex-end",
        backgroundColor: theme.palette.background.blue,
        borderRadius: "0 0 16px",
        padding: "28px 56px",
        width: "50%",
        [theme.breakpoints.down("xs")]: {
            width: "100%",
            borderRadius: 0,
            justifyContent: "center",
            padding: "18px 12px"
        }
    },
    headerRight: {
        padding: "18px 40px",
        textAlign: "right",
        [theme.breakpoints.down("xs")]: {
            textAlign: "center"
        }
    },
    headerTitle: {
        color: "#fff",
        marginLeft: 18
    },
    headerEnter: {
        fontSize: 18,
        textDecoration: "underline",
        "&:hover": {
            textDecoration: "none"
        }
    },
    form: {
        maxWidth: 560,
        margin: "0 auto 54px",
        paddingRight: 100
    },
    radioGroup: {
        margin: "8px 0"
    },
    radioLabel: {
        fontSize: 14,
        fontWeight: 400
    },
    formGroup: {
        marginBottom: 12
    },
    groupLabel: {
        marginBottom: 8,
        fontSize: 14,
        fontWeight: 400,
        color: theme.palette.text.secondary
    },
    nameGroupField: {
        marginBottom: 12
    },
    formRow: {
        display: "flex",
        "& > fieldset:first-child": {
            width: "45%"
        },
        "& > fieldset:last-child": {
            width: "55%",
            paddingLeft: 24
        }
    },
    agreementLabel: {
        fontSize: 14,
        margin: "29px 0 36px",
        "& a": {
            color: theme.palette.text.secondary
        }
    }
}));

export const SignUpForm: React.FC = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <div className={classes.header}>
                <div className={classes.headerLeft}>
                    <div>
                        <UserPlusIcon />
                    </div>
                    <Typography className={classes.headerTitle} variant="h3">
                        Регистрация
                    </Typography>
                </div>
                <div className={classes.headerRight}>
                    <Typography>Есть аккаунт?</Typography>
                    <MaterialLink
                        className={classes.headerEnter}
                        type="button"
                        component="button"
                        color="textSecondary"
                        onClick={() => {
                            console.log("Войти");
                        }}
                    >
                        Войти
                    </MaterialLink>
                </div>
            </div>
            <form className={classes.form} onSubmit={() => console.log("sign-up")}>
                <RadioGroup
                    className={classes.radioGroup}
                    aria-label="user type"
                    name="user_type"
                >
                    <FormControlLabel
                        value="patient"
                        control={<Radio color="secondary" />}
                        label={
                            <Typography
                                className={classes.radioLabel}
                                variant="body1"
                                color="textSecondary"
                            >
                                Я пациент
                            </Typography>
                        }
                        defaultChecked
                    />
                    <FormControlLabel
                        value="doctor"
                        control={<Radio color="secondary" />}
                        label={
                            <Typography
                                className={classes.radioLabel}
                                variant="body1"
                                color="textSecondary"
                            >
                                Я врач
                            </Typography>
                        }
                    />
                </RadioGroup>
                <FormControl
                    className={classes.formGroup}
                    component="fieldset"
                    fullWidth
                >
                    <FormLabel className={classes.groupLabel} component="legend">
                        Фамилия, имя, отчество
                    </FormLabel>
                    <TextField
                        className={classes.nameGroupField}
                        variant="outlined"
                        color="secondary"
                        placeholder="Фамилия*"
                    />
                    <TextField
                        className={classes.nameGroupField}
                        variant="outlined"
                        color="secondary"
                        placeholder="Имя*"
                    />
                    <TextField
                        variant="outlined"
                        color="secondary"
                        placeholder="Отчество"
                    />
                </FormControl>
                <div className={classes.formRow}>
                    <FormControl
                        className={classes.formGroup}
                        component="fieldset"
                        fullWidth
                    >
                        <FormLabel className={classes.groupLabel} component="legend">
                            Дата рождения*
                        </FormLabel>
                        <TextField
                            variant="outlined"
                            color="secondary"
                            placeholder="ДД/ММ/ГГ"
                        />
                    </FormControl>
                    <FormControl
                        className={classes.formGroup}
                        component="fieldset"
                        fullWidth
                    >
                        <FormLabel className={classes.groupLabel} component="legend">
                            Пол
                        </FormLabel>
                        <RadioGroup
                            className={classes.radioGroup}
                            aria-label="user gender"
                            name="user_gender"
                            row
                        >
                            <FormControlLabel
                                value="male"
                                control={<Radio color="secondary" />}
                                label={
                                    <Typography
                                        className={classes.radioLabel}
                                        variant="body1"
                                        color="textSecondary"
                                    >
                                        Мужской
                                    </Typography>
                                }
                                defaultChecked
                            />
                            <FormControlLabel
                                value="female"
                                control={<Radio color="secondary" />}
                                label={
                                    <Typography
                                        className={classes.radioLabel}
                                        variant="body1"
                                        color="textSecondary"
                                    >
                                        Женский
                                    </Typography>
                                }
                            />
                        </RadioGroup>
                    </FormControl>
                </div>
                <FormControl
                    className={classes.formGroup}
                    component="fieldset"
                    fullWidth
                >
                    <FormLabel className={classes.groupLabel} component="legend">
                        Телефон*
                    </FormLabel>
                    <TextField
                        variant="outlined"
                        color="secondary"
                        placeholder="+7 (XXX) XXX-XX-XX"
                    />
                </FormControl>
                <FormControl
                    className={classes.formGroup}
                    component="fieldset"
                    fullWidth
                >
                    <FormLabel className={classes.groupLabel} component="legend">
                        Email*
                    </FormLabel>
                    <TextField
                        variant="outlined"
                        color="secondary"
                        placeholder="example@gmail.com"
                    />
                </FormControl>
                <FormControl
                    className={classes.formGroup}
                    component="fieldset"
                    fullWidth
                >
                    <FormLabel className={classes.groupLabel} component="legend">
                        Пароль*
                    </FormLabel>
                    <TextField
                        type="password"
                        variant="outlined"
                        color="secondary"
                        placeholder="Пароль"
                    />
                </FormControl>
                <FormControlLabel
                    control={<Checkbox color="secondary" />}
                    label={
                        <Typography
                            className={classes.agreementLabel}
                            variant="body2"
                            color="textSecondary"
                        >
                            Принимаю условия{" "}
                            <Link to="/">пользовательского соглашения</Link> и даю
                            согласие на{" "}
                            <Link to="/">обработку моих персональных данных</Link>
                        </Typography>
                    }
                />
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Зарегистрироваться
                </Button>
            </form>
        </React.Fragment>
    );
};
