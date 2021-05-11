import React from "react";
import { observer } from "mobx-react";
import { TextField, FormControl, FormLabel } from "@material-ui/core";

import { Button, SubmissionResult } from "components";
import { useStores } from "stores/useStore";
import { useFormStyles } from "styles/material/useFormStyles";

export const HeightWeightForm: React.FC = observer(() => {
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
                    Укажите Ваш вес (кг)
                </FormLabel>
                <TextField
                    type="number"
                    variant="outlined"
                    color="secondary"
                    placeholder="60"
                    InputProps={{ inputProps: { min: 1 } }}
                    value={changeCardForm.weight}
                    onChange={event => setFormValue("weight", event.target.value)}
                />
            </FormControl>
            <FormControl className={formClasses.formGroup} component="fieldset">
                <FormLabel className={formClasses.groupLabel} component="legend">
                    Укажите Ваш рост (см)
                </FormLabel>
                <TextField
                    type="number"
                    variant="outlined"
                    color="secondary"
                    placeholder="180"
                    InputProps={{ inputProps: { min: 1 } }}
                    value={changeCardForm.height}
                    onChange={event => setFormValue("height", event.target.value)}
                />
            </FormControl>
            <SubmissionResult align="center" isError>
                {submissionError}
            </SubmissionResult>
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
