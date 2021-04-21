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
import { KeyboardDatePicker } from "@material-ui/pickers";

import { PasswordRequirement } from "./PasswordRequirement";
import { Button, SubmissionError } from "components";
import { useStores } from "stores/useStore";
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
            width: "55%",
            [theme.breakpoints.down("xs")]: {
                width: "100%"
            }
        },
        "& > fieldset:last-child": {
            width: "45%",
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
    }
}));

export const SignUpForm: React.FC = observer(() => {
    const classes = useStyles();
    const { modalsStore, signUpStore } = useStores();
    const { setModalIsOpen } = modalsStore;
    const {
        signUpForm,
        signUpFormErrors,
        submissionError,
        pending,
        doSignUp,
        setFormValue
    } = signUpStore;

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        doSignUp();
    };

    const handleDateChange = (date: any): void => {
        setFormValue("birthDate", date);
    };

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
            <form className={classes.form} onSubmit={handleSubmit}>
                <RadioGroup
                    className={classes.typeGroup}
                    value={signUpForm.userType}
                    onChange={event => setFormValue("userType", event.target.value)}
                    name="user_type"
                    aria-label="user type"
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
                        value={signUpForm.lastName}
                        onChange={event =>
                            setFormValue("lastName", event.target.value)
                        }
                        error={Boolean(signUpFormErrors.lastName)}
                        helperText={signUpFormErrors.lastName}
                    />
                    <TextField
                        className={classes.nameGroupField}
                        variant="outlined"
                        color="secondary"
                        placeholder="Имя*"
                        value={signUpForm.firstName}
                        onChange={event =>
                            setFormValue("firstName", event.target.value)
                        }
                        error={Boolean(signUpFormErrors.firstName)}
                        helperText={signUpFormErrors.firstName}
                    />
                    <TextField
                        variant="outlined"
                        color="secondary"
                        placeholder="Отчество"
                        value={signUpForm.middleName}
                        onChange={event =>
                            setFormValue("middleName", event.target.value)
                        }
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
                        <KeyboardDatePicker
                            inputVariant="outlined"
                            color="secondary"
                            placeholder="ДД/ММ/ГГ"
                            format="dd/MM/yyyy"
                            value={signUpForm.birthDate}
                            onChange={handleDateChange}
                            error={Boolean(signUpFormErrors.birthDate)}
                            helperText={signUpFormErrors.birthDate}
                            KeyboardButtonProps={{
                                "aria-label": "change date"
                            }}
                            cancelLabel="Отмена"
                            okLabel="Ок"
                            disableFuture
                            autoOk
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
                            value={signUpForm.gender}
                            onChange={event =>
                                setFormValue("gender", event.target.value)
                            }
                            name="user_gender"
                            aria-label="user gender"
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
                        value={signUpForm.phoneNumber}
                        onChange={event =>
                            setFormValue("phoneNumber", event.target.value)
                        }
                        error={Boolean(signUpFormErrors.phoneNumber)}
                        helperText={signUpFormErrors.phoneNumber}
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
                        value={signUpForm.email}
                        onChange={event => setFormValue("email", event.target.value)}
                        error={Boolean(signUpFormErrors.email)}
                        helperText={signUpFormErrors.email}
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
                        value={signUpForm.password}
                        onChange={event =>
                            setFormValue("password", event.target.value)
                        }
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
                        <PasswordRequirement
                            requirement={signUpFormErrors.password.isLength}
                            label="8 символов"
                        />
                        <PasswordRequirement
                            requirement={signUpFormErrors.password.isUppercase}
                            label="Заглавную букву"
                        />
                        <PasswordRequirement
                            requirement={signUpFormErrors.password.isLowercase}
                            label="Строчную букву"
                        />
                        <PasswordRequirement
                            requirement={signUpFormErrors.password.isNumber}
                            label="Цифру"
                        />
                    </div>
                </FormControl>
                <FormControlLabel
                    className={classes.agreement}
                    control={
                        <Checkbox
                            color="secondary"
                            checked={signUpForm.acceptedUserAgreement}
                            onChange={(_, checked) =>
                                setFormValue("acceptedUserAgreement", checked)
                            }
                        />
                    }
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
                <SubmissionError>{submissionError}</SubmissionError>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={!signUpForm.acceptedUserAgreement || pending}
                    isLoaded={pending}
                    fullWidth
                >
                    Зарегистрироваться
                </Button>
            </form>
        </React.Fragment>
    );
});
