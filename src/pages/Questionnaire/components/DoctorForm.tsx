import React from "react";
import clsx from "clsx";
import {
    FormControl,
    FormLabel,
    TextField,
    Select,
    MenuItem,
    Typography,
    makeStyles
} from "@material-ui/core";

import { Button } from "components";
import { FormWrapper } from "./FormWrapper";
import { useFormStyles } from "./useFormStyles";
import { FormPhotoIcon, FormResumeIcon } from "icons";
import { categories } from "utils/constants";

const useStyles = makeStyles(() => ({
    experienceField: {
        marginRight: 12,
        maxWidth: 75
    },
    uploadFile: {
        display: "flex",
        alignItems: "center",
        marginBottom: 36
    },
    uploadFileImage: {
        display: "flex",
        justifyContent: "center",
        marginRight: 36,
        width: 131
    },
    uploadFileContent: {
        marginBottom: 0
    },
    uploadFileButton: {
        margin: "4px 0 12px"
    }
}));

export const DoctorForm: React.FC = () => {
    const classes = useStyles();
    const formClasses = useFormStyles();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        // sendForm();
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
                    fullWidth
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
                />
            </FormControl>
            <FormControl className={formClasses.formGroup} component="fieldset">
                <FormLabel className={formClasses.groupLabel} component="legend">
                    Пол
                </FormLabel>
                <Select variant="outlined" color="secondary" value="male">
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
                    fullWidth
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
                    fullWidth
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
                        className={classes.experienceField}
                        variant="outlined"
                        color="secondary"
                        placeholder="1"
                    />
                    <Select variant="outlined" color="secondary" value="month">
                        <MenuItem value="month">Месяцев</MenuItem>
                        <MenuItem value="years">Лет</MenuItem>
                    </Select>
                </div>
            </FormControl>
            <div className={classes.uploadFile}>
                <div className={classes.uploadFileImage}>
                    <FormPhotoIcon />
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
                    <Button
                        className={classes.uploadFileButton}
                        variant="outlined"
                        color="primary"
                    >
                        Выбрать файл
                    </Button>
                    <Typography variant="body1" color="textSecondary">
                        Допустимые форматы: jpeg, png
                    </Typography>
                </FormControl>
            </div>
            <div className={classes.uploadFile}>
                <div className={classes.uploadFileImage}>
                    <FormResumeIcon />
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
                    <Button
                        className={classes.uploadFileButton}
                        variant="outlined"
                        color="primary"
                    >
                        Выбрать файл
                    </Button>
                    <Typography variant="body1" color="textSecondary">
                        Допустимые форматы: jpeg, png, txt, pdf
                    </Typography>
                </FormControl>
            </div>
            <div className={classes.uploadFile}>
                <div className={classes.uploadFileImage}>
                    <FormResumeIcon />
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
                    <Button
                        className={classes.uploadFileButton}
                        variant="outlined"
                        color="primary"
                    >
                        Выбрать файл
                    </Button>
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
};
