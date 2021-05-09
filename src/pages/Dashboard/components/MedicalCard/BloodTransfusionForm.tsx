import React from "react";
import { observer } from "mobx-react";
import {
    Typography,
    FormControl,
    FormControlLabel,
    RadioGroup,
    Radio,
    FormLabel
} from "@material-ui/core";

import { Button, SubmissionError } from "components";
import { useStores } from "stores/useStore";
import { useFormStyles } from "styles/material/useFormStyles";

export const BloodTransfusionForm: React.FC = observer(() => {
    const formClasses = useFormStyles();
    const { dashboardMedicalCard } = useStores();
    const {
        changeCardForm,
        pending,
        submissionError,
        setFormValue
    } = dashboardMedicalCard;

    return (
        <React.Fragment>
            <FormControl className={formClasses.formGroup} component="fieldset">
                <FormLabel className={formClasses.groupLabel} component="legend">
                    Была ли процедура по переливанию крови? (Гемотрансфузия)
                </FormLabel>
                <RadioGroup
                    value={changeCardForm.bloodTransfusion}
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
