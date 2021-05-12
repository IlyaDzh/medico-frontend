import React from "react";
import { observer } from "mobx-react";
import {
    Button as MaterialButton,
    Typography,
    TextField,
    FormControl,
    FormControlLabel,
    FormLabel,
    RadioGroup,
    Radio,
    makeStyles,
    Theme
} from "@material-ui/core";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { Photo as PhotoIcon } from "@material-ui/icons";

import { Avatar, Button, Loader, SubmissionResult } from "components";
import { useStores } from "stores/useStore";

const useStyles = makeStyles((theme: Theme) => ({
    title: {
        marginBottom: 60,
        [theme.breakpoints.down("xs")]: {
            marginBottom: 40
        }
    },
    settings: {
        display: "flex",
        [theme.breakpoints.down("xs")]: {
            display: "block"
        }
    },
    formControl: {
        marginBottom: 20,
        [theme.breakpoints.down("xs")]: {
            marginBottom: 14
        }
    },
    groupLabel: {
        color: theme.palette.text.secondary,
        fontSize: 14,
        fontWeight: 400,
        marginBottom: 8
    },
    radioGroup: {
        padding: "5px 0",
        [theme.breakpoints.down("xs")]: {
            padding: 0
        }
    },
    radioLabel: {
        fontSize: 14,
        fontWeight: 400
    },
    avatarAttachmentWrapper: {
        position: "relative",
        display: "inline-block",
        marginRight: 56,
        [theme.breakpoints.down("sm")]: {
            marginRight: 32
        },
        [theme.breakpoints.down("xs")]: {
            marginRight: 0,
            marginBottom: 32
        }
    },
    avatarAttachment: {
        width: 80,
        height: 80
    },
    avatarUploadButton: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        borderRadius: 8,
        border: "none",
        background: "rgba(0, 0, 0, 0.3)",
        "&:hover": {
            background: "rgba(0, 0, 0, 0.6)"
        }
    },
    formColumns: {
        display: "flex",
        marginBottom: 32,
        [theme.breakpoints.down("xs")]: {
            display: "block",
            marginBottom: 16
        }
    },
    columnLeft: {
        width: "50%",
        marginRight: 56,
        [theme.breakpoints.down("sm")]: {
            marginRight: 32
        },
        [theme.breakpoints.down("xs")]: {
            width: "100%",
            marginRight: 0
        }
    },
    columnRight: {
        width: "50%",
        [theme.breakpoints.down("xs")]: {
            width: "100%"
        }
    }
}));

export const SettingsPage: React.FC = observer(() => {
    const classes = useStyles();
    const { dashboardSettingsStore, userStore } = useStores();
    const {
        updateForm,
        updateFormErrors,
        submissionError,
        pending,
        avatarPending,
        setFormValue,
        setAvatar,
        updateUserInfo
    } = dashboardSettingsStore;
    const { currentUser } = userStore;

    const avatarSrc = currentUser?.additionalData
        ? currentUser.userType === "doctor"
            ? currentUser.additionalData.photo &&
              process.env.REACT_APP_API_BASE_URL + currentUser.additionalData.photo
            : currentUser.additionalData.avatar &&
              process.env.REACT_APP_API_BASE_URL + currentUser.additionalData.avatar
        : undefined;

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        updateUserInfo();
    };

    const handleFileAttachment = (files: any): void => {
        if (files && files.length !== 0) {
            setAvatar(files[0]);
        }
    };

    const handleDateChange = (date: any): void => {
        setFormValue("birthDate", date);
    };

    return (
        <React.Fragment>
            <Typography className={classes.title} variant="h4">
                Настройки
            </Typography>
            <div className={classes.settings}>
                <div>
                    <div className={classes.avatarAttachmentWrapper}>
                        <Avatar variant="rounded" size={102} src={avatarSrc} />
                        <MaterialButton
                            component="label"
                            variant="outlined"
                            className={classes.avatarUploadButton}
                            disabled={avatarPending}
                        >
                            {avatarPending ? (
                                <Loader level={2.5} isCenter />
                            ) : (
                                <PhotoIcon style={{ color: "#fff" }} />
                            )}
                            <input
                                type="file"
                                accept="image/png, image/jpg, image/jpeg"
                                onChange={event =>
                                    handleFileAttachment(event.target.files)
                                }
                                hidden
                            />
                        </MaterialButton>
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className={classes.formColumns}>
                        <div className={classes.columnLeft}>
                            <FormControl
                                className={classes.formControl}
                                component="fieldset"
                                fullWidth
                            >
                                <FormLabel
                                    className={classes.groupLabel}
                                    component="legend"
                                >
                                    Фамилия
                                </FormLabel>
                                <TextField
                                    variant="outlined"
                                    color="secondary"
                                    placeholder="Фамилия*"
                                    value={updateForm.surname}
                                    onChange={event =>
                                        setFormValue("surname", event.target.value)
                                    }
                                    error={Boolean(updateFormErrors.surname)}
                                    helperText={updateFormErrors.surname}
                                />
                            </FormControl>
                            <FormControl
                                className={classes.formControl}
                                component="fieldset"
                                fullWidth
                            >
                                <FormLabel
                                    className={classes.groupLabel}
                                    component="legend"
                                >
                                    Имя
                                </FormLabel>
                                <TextField
                                    variant="outlined"
                                    color="secondary"
                                    placeholder="Имя*"
                                    value={updateForm.name}
                                    onChange={event =>
                                        setFormValue("name", event.target.value)
                                    }
                                    error={Boolean(updateFormErrors.name)}
                                    helperText={updateFormErrors.name}
                                />
                            </FormControl>
                            <FormControl
                                className={classes.formControl}
                                component="fieldset"
                                fullWidth
                            >
                                <FormLabel
                                    className={classes.groupLabel}
                                    component="legend"
                                >
                                    Отчество
                                </FormLabel>
                                <TextField
                                    variant="outlined"
                                    color="secondary"
                                    placeholder="Отчество*"
                                    value={updateForm.middleName}
                                    onChange={event =>
                                        setFormValue(
                                            "middleName",
                                            event.target.value
                                        )
                                    }
                                />
                            </FormControl>
                        </div>
                        <div className={classes.columnRight}>
                            <FormControl
                                className={classes.formControl}
                                component="fieldset"
                                fullWidth
                            >
                                <FormLabel
                                    className={classes.groupLabel}
                                    component="legend"
                                >
                                    Дата рождения*
                                </FormLabel>
                                <KeyboardDatePicker
                                    inputVariant="outlined"
                                    color="secondary"
                                    placeholder="ДД/ММ/ГГ"
                                    format="dd/MM/yyyy"
                                    value={updateForm.birthDate}
                                    onChange={handleDateChange}
                                    error={Boolean(updateFormErrors.birthDate)}
                                    helperText={updateFormErrors.birthDate}
                                    KeyboardButtonProps={{
                                        "aria-label": "Изменение даты рождения"
                                    }}
                                    cancelLabel="Отмена"
                                    okLabel="Ок"
                                    disableFuture
                                    autoOk
                                />
                            </FormControl>
                            <FormControl
                                className={classes.formControl}
                                component="fieldset"
                                fullWidth
                            >
                                <FormLabel
                                    className={classes.groupLabel}
                                    component="legend"
                                >
                                    Телефон*
                                </FormLabel>
                                <TextField
                                    variant="outlined"
                                    color="secondary"
                                    placeholder="+7 (XXX) XXX-XX-XX"
                                    value={updateForm.phone}
                                    onChange={event =>
                                        setFormValue("phone", event.target.value)
                                    }
                                    error={Boolean(updateFormErrors.phone)}
                                    helperText={updateFormErrors.phone}
                                />
                            </FormControl>
                            <FormControl
                                className={classes.formControl}
                                component="fieldset"
                                fullWidth
                            >
                                <FormLabel
                                    className={classes.groupLabel}
                                    component="legend"
                                >
                                    Пол
                                </FormLabel>
                                <RadioGroup
                                    className={classes.radioGroup}
                                    value={updateForm.sex}
                                    onChange={event =>
                                        setFormValue(
                                            "sex",
                                            event.target.value as "male" | "female"
                                        )
                                    }
                                    name="user_gender"
                                    aria-label="Ваш пол"
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
                    </div>
                    <SubmissionResult isError>{submissionError}</SubmissionResult>
                    <Button
                        type="submit"
                        variant="contained"
                        disabled={pending}
                        isLoaded={pending}
                    >
                        Сохранить изменения
                    </Button>
                </form>
            </div>
        </React.Fragment>
    );
});
