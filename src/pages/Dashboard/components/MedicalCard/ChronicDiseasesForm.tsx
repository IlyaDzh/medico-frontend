import React from "react";
import { observer } from "mobx-react";
import { TextField, FormControl, FormLabel } from "@material-ui/core";

import { Button, SubmissionResult } from "components";
import { useStores } from "stores/useStore";
import { useFormStyles } from "styles/material/useFormStyles";

export const ChronicDiseasesForm: React.FC = observer(() => {
    const formClasses = useFormStyles();
    const { dashboardMedicalCardStore } = useStores();
    const {
        changeCardForm,
        pending,
        submissionError,
        setFormValue
    } = dashboardMedicalCardStore;

    return (
        <React.Fragment>
            <FormControl
                className={formClasses.formGroup}
                component="fieldset"
                fullWidth
            >
                <FormLabel className={formClasses.groupLabel} component="legend">
                    Хронические заболевания
                </FormLabel>
                <TextField
                    variant="outlined"
                    color="secondary"
                    placeholder="Гайморит, астма"
                    value={changeCardForm.chronicDiseases}
                    onChange={event =>
                        setFormValue("chronicDiseases", event.target.value)
                    }
                    fullWidth
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
