import React from "react";
import {
    FormControl,
    FormLabel,
    TextField,
    RadioGroup,
    FormControlLabel,
    Radio,
    Checkbox,
    Typography
} from "@material-ui/core";

import { Button } from "components";
import { FormWrapper } from "./FormWrapper";
import { useFormStyles } from "./useFormStyles";

export const PatientForm: React.FC = () => {
    const formClasses = useFormStyles();

    return (
        <FormWrapper
            title="Анкета"
            subtitle="Данные из анкеты будут использоваться врачом в качестве первичной медицинской карты"
        >
            <FormControl className={formClasses.formGroup} component="fieldset">
                <FormLabel className={formClasses.groupLabel} component="legend">
                    1. Укажите Ваш вес (кг)
                </FormLabel>
                <TextField
                    variant="outlined"
                    color="secondary"
                    placeholder="60 кг*"
                />
            </FormControl>
            <FormControl className={formClasses.formGroup} component="fieldset">
                <FormLabel className={formClasses.groupLabel} component="legend">
                    2. Укажите Ваш рост (см)
                </FormLabel>
                <TextField
                    variant="outlined"
                    color="secondary"
                    placeholder="180 см*"
                />
            </FormControl>
            <FormControl className={formClasses.formGroup} component="fieldset">
                <FormLabel className={formClasses.groupLabel} component="legend">
                    3. Группа крови на рукаве:
                </FormLabel>
                <RadioGroup name="blood_type" aria-label="blood type">
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
            </FormControl>
            <FormControl className={formClasses.formGroup} component="fieldset">
                <FormLabel className={formClasses.groupLabel} component="legend">
                    4. Резус фактор:
                </FormLabel>
                <RadioGroup name="rhesus_factor" aria-label="rhesus factor">
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
                    fullWidth
                />
            </FormControl>
            <FormControl
                className={formClasses.formGroup}
                component="fieldset"
                fullWidth
            >
                <FormLabel className={formClasses.groupLabel} component="legend">
                    7. Операции с датой
                </FormLabel>
                <TextField
                    variant="outlined"
                    color="secondary"
                    placeholder="Операция - дата, ..."
                    fullWidth
                />
            </FormControl>
            <FormControl className={formClasses.formGroup} component="fieldset">
                <FormLabel className={formClasses.groupLabel} component="legend">
                    8. Курение:
                </FormLabel>
                <RadioGroup name="smoking" aria-label="smoking">
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
            </FormControl>
            <FormControl className={formClasses.formGroup} component="fieldset">
                <FormLabel className={formClasses.groupLabel} component="legend">
                    9. Алкоголь:
                </FormLabel>
                <RadioGroup name="alcohol" aria-label="alcohol">
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
                    fullWidth
                />
            </FormControl>
            <FormControl className={formClasses.formGroup} component="fieldset">
                <FormLabel className={formClasses.groupLabel} component="legend">
                    11. Была ли процедура по переливанию крови? (Гемотрансфузия)
                </FormLabel>
                <RadioGroup name="blood_transfusion" aria-label="blood transfusion">
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
            </FormControl>
            <FormControl className={formClasses.formGroup} component="fieldset">
                <FormLabel className={formClasses.groupLabel} component="legend">
                    12. Переносили ли вы следующие заболевания? (Можно выбрать
                    несколько)
                </FormLabel>
                <RadioGroup name="diseases" aria-label="diseases">
                    <FormControlLabel
                        value="Гепатит"
                        control={<Checkbox color="secondary" />}
                        label={
                            <Typography variant="body1" color="textSecondary">
                                Гепатит
                            </Typography>
                        }
                    />
                    <FormControlLabel
                        value="ТСБ"
                        control={<Checkbox color="secondary" />}
                        label={
                            <Typography variant="body1" color="textSecondary">
                                ТСБ
                            </Typography>
                        }
                    />
                    <FormControlLabel
                        value="Кожно-венерологические заболевания"
                        control={<Checkbox color="secondary" />}
                        label={
                            <Typography variant="body1" color="textSecondary">
                                Кожно-венерологические заболевания
                            </Typography>
                        }
                    />
                </RadioGroup>
            </FormControl>
            <Button type="submit" variant="contained" color="primary">
                Сохранить анкету
            </Button>
        </FormWrapper>
    );
};
