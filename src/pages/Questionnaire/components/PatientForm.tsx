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

import { Button } from "components";
import { FormWrapper } from "./FormWrapper";
import { useFormStyles } from "./useFormStyles";
import { useStores } from "stores/useStore";

export const PatientForm: React.FC = observer(() => {
    const formClasses = useFormStyles();
    const { questionnaireStore } = useStores();
    const {
        questionnaireForm,
        questionnaireFormErrors,
        sendForm,
        setFormValue
    } = questionnaireStore;

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        sendForm();
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
                    value={questionnaireForm.height}
                    onChange={event => setFormValue("height", event.target.value)}
                    error={Boolean(questionnaireFormErrors.height)}
                    helperText={questionnaireFormErrors.height}
                />
            </FormControl>
            <FormControl
                className={formClasses.formGroup}
                component="fieldset"
                error={Boolean(questionnaireFormErrors.bloodType)}
            >
                <FormLabel className={formClasses.groupLabel} component="legend">
                    3. Группа крови:
                </FormLabel>
                <RadioGroup
                    value={questionnaireForm.bloodType}
                    onChange={event => setFormValue("bloodType", event.target.value)}
                    aria-label="blood type"
                >
                    <FormControlLabel
                        value="1"
                        control={<Radio color="secondary" />}
                        label={
                            <Typography variant="body1" color="textSecondary">
                                I
                            </Typography>
                        }
                    />
                    <FormControlLabel
                        value="2"
                        control={<Radio color="secondary" />}
                        label={
                            <Typography variant="body1" color="textSecondary">
                                II
                            </Typography>
                        }
                    />
                    <FormControlLabel
                        value="3"
                        control={<Radio color="secondary" />}
                        label={
                            <Typography variant="body1" color="textSecondary">
                                III
                            </Typography>
                        }
                    />
                    <FormControlLabel
                        value="4"
                        control={<Radio color="secondary" />}
                        label={
                            <Typography variant="body1" color="textSecondary">
                                IV
                            </Typography>
                        }
                    />
                </RadioGroup>
                <FormHelperText>{questionnaireFormErrors.bloodType}</FormHelperText>
            </FormControl>
            <FormControl className={formClasses.formGroup} component="fieldset">
                <FormLabel
                    className={formClasses.groupLabel}
                    component="legend"
                    error={Boolean(questionnaireFormErrors.RHFactor)}
                >
                    4. Резус фактор:
                </FormLabel>
                <RadioGroup
                    value={questionnaireForm.RHFactor}
                    onChange={event => setFormValue("RHFactor", event.target.value)}
                    aria-label="rhesus factor"
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
                <FormHelperText>{questionnaireFormErrors.RHFactor}</FormHelperText>
            </FormControl>
            <FormControl
                className={formClasses.formGroup}
                component="fieldset"
                fullWidth
            >
                <FormLabel className={formClasses.groupLabel} component="legend">
                    5. Есть ли у вас аллергия? Если да, то на что?
                </FormLabel>
                <TextField
                    variant="outlined"
                    color="secondary"
                    placeholder="Да, есть аллергия сезонная на полынь"
                    value={questionnaireForm.allergies}
                    onChange={event => setFormValue("allergies", event.target.value)}
                    error={Boolean(questionnaireFormErrors.allergies)}
                    helperText={questionnaireFormErrors.allergies}
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
                    error={Boolean(questionnaireFormErrors.chronicDiseases)}
                    helperText={questionnaireFormErrors.chronicDiseases}
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
                    error={Boolean(questionnaireFormErrors.operations)}
                    helperText={questionnaireFormErrors.operations}
                    fullWidth
                />
            </FormControl>
            <FormControl
                className={formClasses.formGroup}
                component="fieldset"
                error={Boolean(questionnaireFormErrors.isSmoker)}
            >
                <FormLabel className={formClasses.groupLabel} component="legend">
                    8. Курение:
                </FormLabel>
                <RadioGroup
                    value={questionnaireForm.isSmoker}
                    onChange={event => setFormValue("isSmoker", event.target.value)}
                    aria-label="smoking"
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
                <FormHelperText>{questionnaireFormErrors.isSmoker}</FormHelperText>
            </FormControl>
            <FormControl
                className={formClasses.formGroup}
                component="fieldset"
                error={Boolean(questionnaireFormErrors.isAlcoholic)}
            >
                <FormLabel className={formClasses.groupLabel} component="legend">
                    9. Алкоголь:
                </FormLabel>
                <RadioGroup
                    value={questionnaireForm.isAlcoholic}
                    onChange={event =>
                        setFormValue("isAlcoholic", event.target.value)
                    }
                    aria-label="alcohol"
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
                <FormHelperText>
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
                    error={Boolean(questionnaireFormErrors.badHabits)}
                    helperText={questionnaireFormErrors.badHabits}
                    fullWidth
                />
            </FormControl>
            <FormControl
                className={formClasses.formGroup}
                component="fieldset"
                error={Boolean(questionnaireFormErrors.bloodTransfusion)}
            >
                <FormLabel className={formClasses.groupLabel} component="legend">
                    11. Была ли процедура по переливанию крови? (Гемотрансфузия)
                </FormLabel>
                <RadioGroup
                    value={questionnaireForm.bloodTransfusion}
                    onChange={event => {
                        setFormValue("bloodTransfusion", event.target.value);
                    }}
                    aria-label="blood transfusion"
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
                <FormHelperText>
                    {questionnaireFormErrors.bloodTransfusion}
                </FormHelperText>
            </FormControl>
            <Button type="submit" variant="contained" color="primary">
                Сохранить анкету
            </Button>
        </FormWrapper>
    );
});
