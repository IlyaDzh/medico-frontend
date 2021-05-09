import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { observer } from "mobx-react";
import {
    Button as MaterialButton,
    FormControl,
    FormLabel,
    FormHelperText,
    TextField,
    MenuItem,
    Typography,
    makeStyles,
    Theme
} from "@material-ui/core";
import { Remove as RemoveIcon } from "@material-ui/icons";

import { FormWrapper } from "./FormWrapper";
import { Button, Select, Loader, SubmissionError } from "components";
import { useFormStyles } from "styles/material/useFormStyles";
import { useStores } from "stores/useStore";
import { KeysOfFile } from "stores/interfaces/IQuestionnaireStore";
import { truncateText } from "utils/truncateText";
import { FormPhotoIcon, FormResumeIcon } from "icons";

const useStyles = makeStyles((theme: Theme) => ({
    formGroup: {
        display: "block",
        border: 0,
        margin: "0 0 36px 0",
        padding: 0
    },
    categoriesRow: {
        display: "flex",
        alignItems: "center",
        marginBottom: 12,
        "&:last-child": {
            marginBottom: 0
        }
    },
    categoriesRemoveBtn: {
        marginLeft: 24,
        borderRadius: "50%",
        minWidth: 32,
        height: 32,
        padding: 0
    },
    categoriesAddBtn: {
        marginBottom: 36
    },
    experienceField: {
        marginRight: 12,
        maxWidth: 130
    },
    uploadFile: {
        display: "flex",
        alignItems: "center",
        marginBottom: 36,
        [theme.breakpoints.down(400)]: {
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
            marginRight: 20,
            "& svg": {
                height: "100%"
            }
        },
        [theme.breakpoints.down(400)]: {
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
    const [categoriesList, setCategoriesList] = useState<undefined[]>([undefined]);
    const [questionnaireSpecialties, setQuestionnaireSpecialties] = useState<
        number[]
    >([1]);
    const { questionnaireStore, userStore, specialtiesStore } = useStores();
    const {
        questionnaireForm,
        questionnaireFormErrors,
        submissionError,
        pending,
        sendDoctorForm,
        setFormValue,
        setFile
    } = questionnaireStore;
    const { currentUser } = userStore;
    const { specialties, getSpecialties } = specialtiesStore;

    useEffect(() => {
        if (!specialties) {
            getSpecialties();
        }
    }, [specialties, getSpecialties]);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        setFormValue("specialties", questionnaireSpecialties);
        sendDoctorForm();
    };

    const handleFileAttachment = (property: KeysOfFile, files: any): void => {
        if (files && files.length !== 0) {
            setFile(property, files[0]);
        }
    };

    const increaseCategories = (): void => {
        setCategoriesList(prevState => [...prevState, undefined]);
        setQuestionnaireSpecialties(prevState => [...prevState, 1]);
    };

    const decreaseCategories = (index: number): void => {
        const tempSpecialtiesArray = [...questionnaireSpecialties];
        tempSpecialtiesArray.splice(index, 1);
        const tempCategoriesArray = [...categoriesList];
        tempCategoriesArray.splice(index, 1);
        setCategoriesList(tempCategoriesArray);
        setQuestionnaireSpecialties(tempSpecialtiesArray);
    };

    const handleSelectChange = (index: number, value: number): void => {
        const tempArray = [...questionnaireSpecialties];
        tempArray[index] = value;
        setQuestionnaireSpecialties(tempArray);
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
                <Select value={currentUser ? currentUser.sex : "male"} disabled>
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
            <fieldset className={classes.formGroup}>
                <FormLabel className={formClasses.groupLabel} component="legend">
                    Специальность
                </FormLabel>
                {specialties ? (
                    categoriesList.map((_, index) => (
                        <div key={index} className={classes.categoriesRow}>
                            <Select
                                value={questionnaireSpecialties[index]}
                                onChange={event =>
                                    handleSelectChange(
                                        index,
                                        event.target.value as number
                                    )
                                }
                            >
                                {specialties.map(specialty => (
                                    <MenuItem
                                        key={specialty.id}
                                        value={specialty.id}
                                    >
                                        {specialty.name}
                                    </MenuItem>
                                ))}
                            </Select>
                            {categoriesList.length > 1 ? (
                                <Button
                                    className={classes.categoriesRemoveBtn}
                                    variant="contained"
                                    color="primary"
                                    onClick={() => decreaseCategories(index)}
                                    aria-label="Удалить специальность"
                                >
                                    <RemoveIcon />
                                </Button>
                            ) : null}
                        </div>
                    ))
                ) : (
                    <Loader level={3} />
                )}
            </fieldset>
            <Button
                className={classes.categoriesAddBtn}
                variant="contained"
                color="primary"
                onClick={increaseCategories}
                disabled={!specialties}
            >
                Добавить специальность
            </Button>
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
                            alt="Ваше фото"
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
                    <label htmlFor="photo-file">
                        <MaterialButton
                            className={classes.uploadFileButton}
                            variant="outlined"
                            color="primary"
                            component="span"
                        >
                            {questionnaireForm.photo
                                ? truncateText(questionnaireForm.photo.name)
                                : "Выбрать файл"}
                        </MaterialButton>
                    </label>
                    <input
                        id="photo-file"
                        type="file"
                        accept="image/png, image/jpg, image/jpeg"
                        onChange={event =>
                            handleFileAttachment("photo", event.target.files)
                        }
                        hidden
                    />
                    <Typography variant="body1" color="textSecondary">
                        Допустимые форматы: jpeg, png
                    </Typography>
                    <FormHelperText error={Boolean(questionnaireFormErrors.photo)}>
                        {questionnaireFormErrors.photo}
                    </FormHelperText>
                </FormControl>
            </div>
            <div className={classes.uploadFile}>
                <div className={classes.uploadFileImage}>
                    {questionnaireForm.summary &&
                    questionnaireForm.summary.type !== "application/pdf" &&
                    questionnaireForm.summary.type !== "application/docx" ? (
                        <img
                            src={URL.createObjectURL(questionnaireForm.summary)}
                            alt="Ваше резюме"
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
                    <label htmlFor="summary-file">
                        <MaterialButton
                            className={classes.uploadFileButton}
                            variant="outlined"
                            color="primary"
                            component="span"
                        >
                            {questionnaireForm.summary
                                ? truncateText(questionnaireForm.summary.name)
                                : "Выбрать файл"}
                        </MaterialButton>
                    </label>
                    <input
                        id="summary-file"
                        type="file"
                        accept="image/png, image/jpg, image/jpeg, application/pdf"
                        onChange={event =>
                            handleFileAttachment("summary", event.target.files)
                        }
                        hidden
                    />
                    <Typography variant="body1" color="textSecondary">
                        Допустимые форматы: jpeg, png, txt, pdf, docx
                    </Typography>
                    <FormHelperText error={Boolean(questionnaireFormErrors.summary)}>
                        {questionnaireFormErrors.summary}
                    </FormHelperText>
                </FormControl>
            </div>
            <div className={classes.uploadFile}>
                <div className={classes.uploadFileImage}>
                    {questionnaireForm.diploma &&
                    questionnaireForm.diploma.type !== "application/pdf" ? (
                        <img
                            src={URL.createObjectURL(questionnaireForm.diploma)}
                            alt="Ваш диплом"
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
                    <label htmlFor="diploma-file">
                        <MaterialButton
                            className={classes.uploadFileButton}
                            variant="outlined"
                            color="primary"
                            component="span"
                        >
                            {questionnaireForm.diploma
                                ? truncateText(questionnaireForm.diploma.name)
                                : "Выбрать файл"}
                        </MaterialButton>
                    </label>
                    <input
                        id="diploma-file"
                        type="file"
                        accept="image/png, image/jpg, image/jpeg, application/pdf"
                        onChange={event =>
                            handleFileAttachment("diploma", event.target.files)
                        }
                        hidden
                    />
                    <Typography variant="body1" color="textSecondary">
                        Допустимые форматы: jpeg, png, pdf
                    </Typography>
                    <FormHelperText error={Boolean(questionnaireFormErrors.diploma)}>
                        {questionnaireFormErrors.diploma}
                    </FormHelperText>
                </FormControl>
            </div>
            <SubmissionError>{submissionError}</SubmissionError>
            <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={pending}
                isLoaded={pending}
            >
                Отправить модератору
            </Button>
        </FormWrapper>
    );
});
