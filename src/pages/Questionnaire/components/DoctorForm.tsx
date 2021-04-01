import React from "react";
import clsx from "clsx";
import { observer } from "mobx-react";
import {
    Button as MaterialButton,
    FormControl,
    FormLabel,
    TextField,
    Select,
    MenuItem,
    Typography,
    makeStyles,
    Theme
} from "@material-ui/core";

import { Button } from "components";
import { FormWrapper } from "./FormWrapper";
import { useFormStyles } from "./useFormStyles";
import { FormPhotoIcon, FormResumeIcon } from "icons";
import { categories } from "utils/constants";
import { useStores } from "stores/useStore";
import { KeysOfFile } from "stores/interfaces/IQuestionnaireStore";

const useStyles = makeStyles((theme: Theme) => ({
    experienceField: {
        marginRight: 12,
        maxWidth: 130
    },
    uploadFile: {
        display: "flex",
        alignItems: "center",
        marginBottom: 36,
        [theme.breakpoints.down(360)]: {
            display: "block"
        }
    },
    uploadFileImage: {
        display: "flex",
        justifyContent: "center",
        marginRight: 36,
        width: 131,
        height: 131,
        [theme.breakpoints.down("xs")]: {
            width: 72,
            height: 72,
            marginRight: 20
        },
        [theme.breakpoints.down(360)]: {
            width: 92,
            height: 92,
            marginRight: 0,
            marginBottom: 16
        },
        "& img": {
            width: "100%",
            objectFit: "cover",
            borderRadius: "50%"
        }
    },
    uploadFileContent: {
        marginBottom: 0
    },
    uploadFileButton: {
        margin: "4px 0 12px"
    }
}));

export const DoctorForm: React.FC = observer(() => {
    const classes = useStyles();
    const formClasses = useFormStyles();
    const { questionnaireStore, userStore } = useStores();
    const {
        questionnaireForm,
        questionnaireFormErrors,
        sendDoctorForm,
        setFormValue,
        setFile
    } = questionnaireStore;
    const { currentUser } = userStore;

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        sendDoctorForm();
    };

    const handleFileAttachment = (property: KeysOfFile, files: any): void => {
        if (files && files.length !== 0) {
            setFile(property, files[0]);
        }
    };

    return (
        <FormWrapper
            title="Заявка на врача"
            subtitle="Данные из анкеты будут использоваться в качестве отображения ваших персональных данных"
            onSubmit={handleSubmit}
        >
            <FormControl className={formClasses.formGroup} component="fieldset">
                <FormLabel className={formClasses.groupLabel} component="legend">
                    Фамилия Имя Отчество
                </FormLabel>
                <TextField
                    variant="outlined"
                    color="secondary"
                    placeholder="Фамилия Имя Отчество"
                    value={
                        currentUser
                            ? `${currentUser.surname} ${currentUser.name} ${currentUser.middleName}`
                            : ""
                    }
                    fullWidth
                    disabled
                />
            </FormControl>
            <FormControl className={formClasses.formGroup} component="fieldset">
                <FormLabel className={formClasses.groupLabel} component="legend">
                    ИИН
                </FormLabel>
                <TextField
                    variant="outlined"
                    color="secondary"
                    placeholder="XXX XXX XXX XXX"
                    value={questionnaireForm.IIN}
                    onChange={event => setFormValue("IIN", event.target.value)}
                    error={Boolean(questionnaireFormErrors.IIN)}
                    helperText={questionnaireFormErrors.IIN}
                />
            </FormControl>
            <FormControl className={formClasses.formGroup} component="fieldset">
                <FormLabel className={formClasses.groupLabel} component="legend">
                    Пол
                </FormLabel>
                <Select
                    variant="outlined"
                    color="secondary"
                    value={currentUser ? currentUser.sex : "male"}
                    disabled
                >
                    <MenuItem value="male">Мужской</MenuItem>
                    <MenuItem value="female">Женский</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={formClasses.formGroup} component="fieldset">
                <FormLabel className={formClasses.groupLabel} component="legend">
                    Ваш e-mail
                </FormLabel>
                <TextField
                    variant="outlined"
                    color="secondary"
                    placeholder="doctor_agyn@gmail.com"
                    value={currentUser?.email}
                    fullWidth
                    disabled
                />
            </FormControl>
            <FormControl className={formClasses.formGroup} component="fieldset">
                <FormLabel className={formClasses.groupLabel} component="legend">
                    Ваш номер телефона
                </FormLabel>
                <TextField
                    variant="outlined"
                    color="secondary"
                    placeholder="+7 (XXX) XXX XX XX"
                    value={currentUser?.phone}
                    fullWidth
                    disabled
                />
            </FormControl>
            <FormControl className={formClasses.formGroup} component="fieldset">
                <FormLabel className={formClasses.groupLabel} component="legend">
                    Специальность
                </FormLabel>
                <Select
                    variant="outlined"
                    color="secondary"
                    value={categories[0].code}
                >
                    {categories.map(category => (
                        <MenuItem key={category.code} value={category.code}>
                            {category.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl className={formClasses.formGroup} component="fieldset">
                <FormLabel className={formClasses.groupLabel} component="legend">
                    Стаж
                </FormLabel>
                <div>
                    <TextField
                        type="number"
                        className={classes.experienceField}
                        variant="outlined"
                        color="secondary"
                        placeholder="1"
                        InputProps={{ inputProps: { min: 1 } }}
                        value={questionnaireForm.experienceNumber}
                        onChange={event =>
                            setFormValue("experienceNumber", event.target.value)
                        }
                        error={Boolean(questionnaireFormErrors.experienceNumber)}
                        helperText={questionnaireFormErrors.experienceNumber}
                    />
                    <Select
                        variant="outlined"
                        color="secondary"
                        value={questionnaireForm.experienceType}
                        onChange={event =>
                            setFormValue(
                                "experienceType",
                                event.target.value as string
                            )
                        }
                    >
                        <MenuItem value="month">Месяцев</MenuItem>
                        <MenuItem value="years">Лет</MenuItem>
                    </Select>
                </div>
            </FormControl>
            <div className={classes.uploadFile}>
                <div className={classes.uploadFileImage}>
                    {questionnaireForm.photo ? (
                        <img
                            src={URL.createObjectURL(questionnaireForm.photo)}
                            alt="Загруженное фото"
                        />
                    ) : (
                        <FormPhotoIcon />
                    )}
                </div>
                <FormControl
                    className={clsx(
                        formClasses.formGroup,
                        classes.uploadFileContent
                    )}
                    component="fieldset"
                >
                    <FormLabel className={formClasses.groupLabel} component="legend">
                        Загрузить фото
                    </FormLabel>
                    <MaterialButton
                        component="label"
                        className={classes.uploadFileButton}
                        variant="outlined"
                        color="primary"
                    >
                        Выбрать файл
                        <input
                            type="file"
                            accept="image/png, image/jpg, image/jpeg"
                            onChange={event =>
                                handleFileAttachment("photo", event.target.files)
                            }
                            hidden
                        />
                    </MaterialButton>
                    <Typography variant="body1" color="textSecondary">
                        Допустимые форматы: jpeg, png
                    </Typography>
                </FormControl>
            </div>
            <div className={classes.uploadFile}>
                <div className={classes.uploadFileImage}>
                    {questionnaireForm.summary ? (
                        <img
                            src={URL.createObjectURL(questionnaireForm.summary)}
                            alt="Загруженное резюме"
                        />
                    ) : (
                        <FormResumeIcon />
                    )}
                </div>
                <FormControl
                    className={clsx(
                        formClasses.formGroup,
                        classes.uploadFileContent
                    )}
                    component="fieldset"
                >
                    <FormLabel className={formClasses.groupLabel} component="legend">
                        Загрузить резюме
                    </FormLabel>
                    <MaterialButton
                        component="label"
                        className={classes.uploadFileButton}
                        variant="outlined"
                        color="primary"
                    >
                        Выбрать файл
                        <input
                            type="file"
                            accept="image/png, image/jpg, image/jpeg"
                            onChange={event =>
                                handleFileAttachment("summary", event.target.files)
                            }
                            hidden
                        />
                    </MaterialButton>
                    <Typography variant="body1" color="textSecondary">
                        Допустимые форматы: jpeg, png, txt, pdf
                    </Typography>
                </FormControl>
            </div>
            <div className={classes.uploadFile}>
                <div className={classes.uploadFileImage}>
                    {questionnaireForm.diploma ? (
                        <img
                            src={URL.createObjectURL(questionnaireForm.diploma)}
                            alt="Загруженный диплом"
                        />
                    ) : (
                        <FormResumeIcon />
                    )}
                </div>
                <FormControl
                    className={clsx(
                        formClasses.formGroup,
                        classes.uploadFileContent
                    )}
                    component="fieldset"
                >
                    <FormLabel className={formClasses.groupLabel} component="legend">
                        Загрузить диплом
                    </FormLabel>
                    <MaterialButton
                        component="label"
                        className={classes.uploadFileButton}
                        variant="outlined"
                        color="primary"
                    >
                        Выбрать файл
                        <input
                            type="file"
                            accept="image/png, image/jpg, image/jpeg"
                            onChange={event =>
                                handleFileAttachment("diploma", event.target.files)
                            }
                            hidden
                        />
                    </MaterialButton>
                    <Typography variant="body1" color="textSecondary">
                        Допустимые форматы: jpeg, png, pdf
                    </Typography>
                </FormControl>
            </div>
            <Button type="submit" variant="contained" color="primary">
                Отправить модератору
            </Button>
        </FormWrapper>
    );
});
