import React from "react";
import { observer } from "mobx-react";
import {
    FormControl,
    FormLabel,
    TextField,
    RadioGroup,
    FormControlLabel,
    FormHelperText,
    Radio,
    Typography
} from "@material-ui/core";

import { FormWrapper } from "./FormWrapper";
import { useFormStyles } from "styles/material/useFormStyles";
import { Button, SubmissionResult } from "components";
import { useStores } from "stores/useStore";

export const PatientForm: React.FC = observer(() => {
    const formClasses = useFormStyles();
    const { questionnaireStore } = useStores();
    const {
        questionnaireForm,
        questionnaireFormErrors,
        submissionError,
        pending,
        sendPatientForm,
        setFormValue
    } = questionnaireStore;

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        sendPatientForm();
    };

    return (
        <FormWrapper
            title="Анкета"
            subtitle="Данные из анкеты будут использоваться врачом в качестве первичной медицинской карты"
            onSubmit={handleSubmit}
        >
            <FormControl className={formClasses.formGroup} component="fieldset">
                <FormLabel className={formClasses.groupLabel} component="legend">
                    1. Укажите Ваш вес (кг)
                </FormLabel>
                <TextField
                    type="number"
                    variant="outlined"
                    color="secondary"
                    placeholder="60"
                    InputProps={{ inputProps: { min: 0 } }}
                    value={questionnaireForm.weight}
                    onChange={event => setFormValue("weight", event.target.value)}
                    error={Boolean(questionnaireFormErrors.weight)}
                    helperText={questionnaireFormErrors.weight}
                />
            </FormControl>
            <FormControl className={formClasses.formGroup} component="fieldset">
                <FormLabel className={formClasses.groupLabel} component="legend">
                    2. Укажите Ваш рост (см)
                </FormLabel>
                <TextField
                    type="number"
                    variant="outlined"
                    color="secondary"
                    placeholder="180"
                    InputProps={{ inputProps: { min: 0 } }}
                    value={questionnaireForm.height}
                    onChange={event => setFormValue("height", event.target.value)}
                    error={Boolean(questionnaireFormErrors.height)}
                    helperText={questionnaireFormErrors.height}
                />
            </FormControl>
            <FormControl className={formClasses.formGroup} component="fieldset">
                <FormLabel className={formClasses.groupLabel} component="legend">
                    3. Группа крови:
                </FormLabel>
                <RadioGroup
                    value={questionnaireForm.bloodType}
                    onChange={event => setFormValue("bloodType", event.target.value)}
                    aria-label="Группа крови"
                >
                    <FormControlLabel
                        value="I"
                        control={<Radio color="secondary" />}
                        label={
                            <Typography variant="body1" color="textSecondary">
                                I
                            </Typography>
                        }
                    />
                    <FormControlLabel
                        value="II"
                        control={<Radio color="secondary" />}
                        label={
                            <Typography variant="body1" color="textSecondary">
                                II
                            </Typography>
                        }
                    />
                    <FormControlLabel
                        value="III"
                        control={<Radio color="secondary" />}
                        label={
                            <Typography variant="body1" color="textSecondary">
                                III
                            </Typography>
                        }
                    />
                    <FormControlLabel
                        value="IV"
                        control={<Radio color="secondary" />}
                        label={
                            <Typography variant="body1" color="textSecondary">
                                IV
                            </Typography>
                        }
                    />
                </RadioGroup>
                <FormHelperText error={Boolean(questionnaireFormErrors.bloodType)}>
                    {questionnaireFormErrors.bloodType}
                </FormHelperText>
            </FormControl>
            <FormControl className={formClasses.formGroup} component="fieldset">
                <FormLabel className={formClasses.groupLabel} component="legend">
                    4. Резус фактор:
                </FormLabel>
                <RadioGroup
                    value={questionnaireForm.RHFactor}
                    onChange={event => setFormValue("RHFactor", event.target.value)}
                    aria-label="Резус фактор"
                >
                    <FormControlLabel
                        value="Rh+"
                        control={<Radio color="secondary" />}
                        label={
                            <Typography variant="body1" color="textSecondary">
                                Rh+
                            </Typography>
                        }
                    />
                    <FormControlLabel
                        value="Rh-"
                        control={<Radio color="secondary" />}
                        label={
                            <Typography variant="body1" color="textSecondary">
                                Rh-
                            </Typography>
                        }
                    />
                </RadioGroup>
                <FormHelperText error={Boolean(questionnaireFormErrors.RHFactor)}>
                    {questionnaireFormErrors.RHFactor}
                </FormHelperText>
            </FormControl>
            <FormControl
                className={formClasses.formGroup}
                component="fieldset"
                fullWidth
            >
                <FormLabel className={formClasses.groupLabel} component="legend">
                    5. Аллергия
                </FormLabel>
                <TextField
                    variant="outlined"
                    color="secondary"
                    placeholder="Есть аллергия сезонная на полынь"
                    value={questionnaireForm.allergies}
                    onChange={event => setFormValue("allergies", event.target.value)}
                    fullWidth
                />
            </FormControl>
            <FormControl
                className={formClasses.formGroup}
                component="fieldset"
                fullWidth
            >
                <FormLabel className={formClasses.groupLabel} component="legend">
                    6. Хронические заболевания
                </FormLabel>
                <TextField
                    variant="outlined"
                    color="secondary"
                    placeholder="Гайморит, астма"
                    value={questionnaireForm.chronicDiseases}
                    onChange={event =>
                        setFormValue("chronicDiseases", event.target.value)
                    }
                    fullWidth
                />
            </FormControl>
            <FormControl
                className={formClasses.formGroup}
                component="fieldset"
                fullWidth
            >
                <FormLabel className={formClasses.groupLabel} component="legend">
                    7. Операции
                </FormLabel>
                <TextField
                    variant="outlined"
                    color="secondary"
                    placeholder="Операция - дата, ..."
                    value={questionnaireForm.operations}
                    onChange={event =>
                        setFormValue("operations", event.target.value)
                    }
                    fullWidth
                />
            </FormControl>
            <FormControl className={formClasses.formGroup} component="fieldset">
                <FormLabel className={formClasses.groupLabel} component="legend">
                    8. Курение:
                </FormLabel>
                <RadioGroup
                    value={questionnaireForm.isSmoker}
                    onChange={event => setFormValue("isSmoker", event.target.value)}
                    aria-label="Курение"
                >
                    <FormControlLabel
                        value="Да"
                        control={<Radio color="secondary" />}
                        label={
                            <Typography variant="body1" color="textSecondary">
                                Да
                            </Typography>
                        }
                    />
                    <FormControlLabel
                        value="Нет"
                        control={<Radio color="secondary" />}
                        label={
                            <Typography variant="body1" color="textSecondary">
                                Нет
                            </Typography>
                        }
                    />
                    <FormControlLabel
                        value="Иногда"
                        control={<Radio color="secondary" />}
                        label={
                            <Typography variant="body1" color="textSecondary">
                                Иногда
                            </Typography>
                        }
                    />
                </RadioGroup>
                <FormHelperText error={Boolean(questionnaireFormErrors.isSmoker)}>
                    {questionnaireFormErrors.isSmoker}
                </FormHelperText>
            </FormControl>
            <FormControl className={formClasses.formGroup} component="fieldset">
                <FormLabel className={formClasses.groupLabel} component="legend">
                    9. Алкоголь:
                </FormLabel>
                <RadioGroup
                    value={questionnaireForm.isAlcoholic}
                    onChange={event =>
                        setFormValue("isAlcoholic", event.target.value)
                    }
                    aria-label="Алкоголь"
                >
                    <FormControlLabel
                        value="1 раз в год"
                        control={<Radio color="secondary" />}
                        label={
                            <Typography variant="body1" color="textSecondary">
                                1 раз в год
                            </Typography>
                        }
                    />
                    <FormControlLabel
                        value="1 раз в месяц"
                        control={<Radio color="secondary" />}
                        label={
                            <Typography variant="body1" color="textSecondary">
                                1 раз в месяц
                            </Typography>
                        }
                    />
                    <FormControlLabel
                        value="1 раз в неделю"
                        control={<Radio color="secondary" />}
                        label={
                            <Typography variant="body1" color="textSecondary">
                                1 раз в неделю
                            </Typography>
                        }
                    />
                    <FormControlLabel
                        value="более 3 раз в неделю"
                        control={<Radio color="secondary" />}
                        label={
                            <Typography variant="body1" color="textSecondary">
                                более 3 раз в неделю
                            </Typography>
                        }
                    />
                </RadioGroup>
                <FormHelperText error={Boolean(questionnaireFormErrors.isAlcoholic)}>
                    {questionnaireFormErrors.isAlcoholic}
                </FormHelperText>
            </FormControl>
            <FormControl
                className={formClasses.formGroup}
                component="fieldset"
                fullWidth
            >
                <FormLabel className={formClasses.groupLabel} component="legend">
                    10. Другие вредные привычки:
                </FormLabel>
                <TextField
                    variant="outlined"
                    color="secondary"
                    placeholder="Заполните поле, если таковые имеются"
                    value={questionnaireForm.badHabits}
                    onChange={event => setFormValue("badHabits", event.target.value)}
                    fullWidth
                />
            </FormControl>
            <FormControl className={formClasses.formGroup} component="fieldset">
                <FormLabel className={formClasses.groupLabel} component="legend">
                    11. Была ли процедура по переливанию крови? (Гемотрансфузия)
                </FormLabel>
                <RadioGroup
                    value={questionnaireForm.bloodTransfusion}
                    onChange={event => {
                        setFormValue("bloodTransfusion", event.target.value);
                    }}
                    aria-label="Была ли процедура по переливанию крови?"
                >
                    <FormControlLabel
                        value="Да"
                        control={<Radio color="secondary" />}
                        label={
                            <Typography variant="body1" color="textSecondary">
                                Да
                            </Typography>
                        }
                    />
                    <FormControlLabel
                        value="Нет"
                        control={<Radio color="secondary" />}
                        label={
                            <Typography variant="body1" color="textSecondary">
                                Нет
                            </Typography>
                        }
                    />
                </RadioGroup>
                <FormHelperText
                    error={Boolean(questionnaireFormErrors.bloodTransfusion)}
                >
                    {questionnaireFormErrors.bloodTransfusion}
                </FormHelperText>
            </FormControl>
            <SubmissionResult isError>{submissionError}</SubmissionResult>
            <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={pending}
                isLoaded={pending}
            >
                Сохранить анкету
            </Button>
        </FormWrapper>
    );
});
