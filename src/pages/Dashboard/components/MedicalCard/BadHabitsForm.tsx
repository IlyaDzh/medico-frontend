import React from "react";
import { observer } from "mobx-react";
import {
    Typography,
    TextField,
    FormControl,
    FormControlLabel,
    FormHelperText,
    RadioGroup,
    Radio,
    FormLabel
} from "@material-ui/core";

import { Button, SubmissionError } from "components";
import { useStores } from "stores/useStore";
import { useFormStyles } from "styles/material/useFormStyles";

export const BadHabitsForm: React.FC = observer(() => {
    const formClasses = useFormStyles();
    const { userStore, dashboardMedicalCard } = useStores();
    const {
        changeCardForm,
        changeCardFormErrors,
        pending,
        submissionError,
        setFormValue
    } = dashboardMedicalCard;
    const { currentUser } = userStore;

    return (
        <React.Fragment>
            <FormControl className={formClasses.formGroup} component="fieldset">
                <FormLabel className={formClasses.groupLabel} component="legend">
                    Курение:
                </FormLabel>
                <RadioGroup
                    value={
                        changeCardForm.isSmoker === undefined
                            ? currentUser?.additionalData?.isSmoker
                            : changeCardForm.isSmoker || ""
                    }
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
                <FormHelperText error={Boolean(changeCardFormErrors.isSmoker)}>
                    {changeCardFormErrors.isSmoker}
                </FormHelperText>
            </FormControl>
            <FormControl className={formClasses.formGroup} component="fieldset">
                <FormLabel className={formClasses.groupLabel} component="legend">
                    Алкоголь:
                </FormLabel>
                <RadioGroup
                    value={
                        changeCardForm.isAlcoholic === undefined
                            ? currentUser?.additionalData?.isAlcoholic
                            : changeCardForm.isAlcoholic || ""
                    }
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
                <FormHelperText error={Boolean(changeCardFormErrors.isAlcoholic)}>
                    {changeCardFormErrors.isAlcoholic}
                </FormHelperText>
            </FormControl>
            <FormControl
                className={formClasses.formGroup}
                component="fieldset"
                fullWidth
            >
                <FormLabel className={formClasses.groupLabel} component="legend">
                    Другие вредные привычки:
                </FormLabel>
                <TextField
                    variant="outlined"
                    color="secondary"
                    placeholder="Заполните поле, если таковые имеются"
                    value={
                        changeCardForm.badHabits === undefined
                            ? currentUser?.additionalData?.badHabits
                            : changeCardForm.badHabits || ""
                    }
                    onChange={event => setFormValue("badHabits", event.target.value)}
                    fullWidth
                />
            </FormControl>
            <SubmissionError align="center">{submissionError}</SubmissionError>
            <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={pending}
                isLoaded={pending}
            >
                Изменить
            </Button>
        </React.Fragment>
    );
});
