import React from "react";
import { observer } from "mobx-react";
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
import { useStores } from "stores/useStore";
import { UserPlusIcon, ValidationGreenIcon, ValidationRedIcon } from "icons";

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
        padding: "18px 0",
        width: 280,
        textAlign: "right",
        [theme.breakpoints.down("xs")]: {
            textAlign: "center",
            width: "auto"
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
        [theme.breakpoints.down("xs")]: {
            padding: "0 24px",
            maxWidth: "100%"
        }
    },
    typeGroup: {
        margin: "14px 0"
    },
    radioLabel: {
        fontSize: 14,
        fontWeight: 400
    },
    formGroup: {
        marginBottom: 16
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
            width: "45%",
            [theme.breakpoints.down("xs")]: {
                width: "100%"
            }
        },
        "& > fieldset:last-child": {
            width: "55%",
            paddingLeft: 24,
            [theme.breakpoints.down("xs")]: {
                width: "100%",
                paddingLeft: 0
            }
        },
        [theme.breakpoints.down("xs")]: {
            display: "block"
        }
    },
    genderGroup: {
        marginTop: 4,
        [theme.breakpoints.down("xs")]: {
            marginTop: 0
        }
    },
    agreement: {
        margin: "10px 0 32px"
    },
    agreementLabel: {
        fontSize: 14,
        paddingLeft: 10,
        "& a": {
            color: theme.palette.text.secondary
        }
    },
    passwordValidation: {
        display: "flex",
        flexWrap: "wrap"
    },
    passwordValidationItem: {
        display: "flex",
        alignItems: "center",
        padding: "8px 4px",
        marginRight: 22,
        "&:last-child": {
            marginRight: 0
        }
    },
    passwordValidationItemLabel: {
        marginLeft: 4,
        fontSize: 14
    }
}));

export const SignUpForm: React.FC = observer(() => {
    const classes = useStyles();
    const { modalsStore } = useStores();
    const { setModalIsOpen } = modalsStore;

    const handleOpenSignInModal = (): void => {
        setModalIsOpen("sign-in", true);
    };

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
                        onClick={handleOpenSignInModal}
                    >
                        Войти
                    </MaterialLink>
                </div>
            </div>
            <form className={classes.form} onSubmit={() => console.log("sign-up")}>
                <RadioGroup
                    className={classes.typeGroup}
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
                            className={classes.genderGroup}
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
                <FormControl
                    className={classes.formGroup}
                    component="fieldset"
                    fullWidth
                >
                    <FormLabel className={classes.groupLabel} component="legend">
                        Пароль должен содержать как минимум:
                    </FormLabel>
                    <div className={classes.passwordValidation}>
                        <div className={classes.passwordValidationItem}>
                            <ValidationGreenIcon />
                            <Typography
                                className={classes.passwordValidationItemLabel}
                                variant="h6"
                            >
                                8 символов
                            </Typography>
                        </div>
                        <div className={classes.passwordValidationItem}>
                            <ValidationRedIcon />
                            <Typography
                                className={classes.passwordValidationItemLabel}
                                variant="h6"
                            >
                                Заглавную букву
                            </Typography>
                        </div>
                        <div className={classes.passwordValidationItem}>
                            <ValidationRedIcon />
                            <Typography
                                className={classes.passwordValidationItemLabel}
                                variant="h6"
                            >
                                Строчную букву
                            </Typography>
                        </div>
                        <div className={classes.passwordValidationItem}>
                            <ValidationRedIcon />
                            <Typography
                                className={classes.passwordValidationItemLabel}
                                variant="h6"
                            >
                                Цифру
                            </Typography>
                        </div>
                    </div>
                </FormControl>
                <FormControlLabel
                    className={classes.agreement}
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
});
