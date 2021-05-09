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

import { Avatar, Button } from "components";
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
        padding: "4px 0",
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
        background: "rgba(0, 0, 0, 0.6)",
        "&:hover": {
            background: "rgba(0, 0, 0, 0.3)"
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
        marginRight: 56,
        [theme.breakpoints.down("sm")]: {
            marginRight: 32
        },
        [theme.breakpoints.down("xs")]: {
            marginRight: 0
        }
    }
}));

export const SettingsPage: React.FC = observer(() => {
    const classes = useStyles();
    const { userStore } = useStores();
    const { currentUser } = userStore;

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        // doSignUp();
    };

    const handleFileAttachment = (files: any): void => {
        if (files && files.length !== 0) {
            // setGroupAvatar(files[0]);
            console.log(files[0]);
        }
    };

    return (
        <React.Fragment>
            <Typography className={classes.title} variant="h4">
                Настройки
            </Typography>
            <div className={classes.settings}>
                <div>
                    <div className={classes.avatarAttachmentWrapper}>
                        <Avatar
                            variant="rounded"
                            size={102}
                            src={
                                currentUser?.additionalData?.avatar
                                    ? "123"
                                    : undefined
                            }
                        />
                        <MaterialButton
                            component="label"
                            variant="outlined"
                            className={classes.avatarUploadButton}
                        >
                            <PhotoIcon style={{ color: "#fff" }} />
                            <input
                                type="file"
                                style={{ display: "none" }}
                                accept="image/png, image/jpg, image/jpeg"
                                onChange={event =>
                                    handleFileAttachment(event.target.files)
                                }
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
                                    value={currentUser?.surname}
                                    // value={signUpForm.lastName}
                                    // onChange={event =>
                                    //     setFormValue("lastName", event.target.value)
                                    // }
                                    // error={Boolean(signUpFormErrors.lastName)}
                                    // helperText={signUpFormErrors.lastName}
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
                                    value={currentUser?.name}
                                    // value={signUpForm.lastName}
                                    // onChange={event =>
                                    //     setFormValue("lastName", event.target.value)
                                    // }
                                    // error={Boolean(signUpFormErrors.lastName)}
                                    // helperText={signUpFormErrors.lastName}
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
                                    value={currentUser?.middleName}
                                    // value={signUpForm.lastName}
                                    // onChange={event =>
                                    //     setFormValue("lastName", event.target.value)
                                    // }
                                    // error={Boolean(signUpFormErrors.lastName)}
                                    // helperText={signUpFormErrors.lastName}
                                />
                            </FormControl>
                        </div>
                        <div>
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
                                    value={currentUser?.birthDate}
                                    // value={signUpForm.birthDate}
                                    onChange={() => console.log("kek")}
                                    // onChange={handleDateChange}
                                    // error={Boolean(signUpFormErrors.birthDate)}
                                    // helperText={signUpFormErrors.birthDate}
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
                                    value={currentUser?.phone}
                                    // value={signUpForm.phoneNumber}
                                    // onChange={event =>
                                    //     setFormValue("phoneNumber", event.target.value)
                                    // }
                                    // error={Boolean(signUpFormErrors.phoneNumber)}
                                    // helperText={signUpFormErrors.phoneNumber}
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
                                    value={currentUser?.sex}
                                    // value={signUpForm.gender}
                                    // onChange={event =>
                                    //     setFormValue("gender", event.target.value)
                                    // }
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
                    <Button variant="contained">Сохранить изменения</Button>
                </form>
            </div>
        </React.Fragment>
    );
});
