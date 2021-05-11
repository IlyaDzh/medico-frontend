import React from "react";
import { observer } from "mobx-react";
import { TextField, FormControl, FormLabel } from "@material-ui/core";

import { Button, SubmissionResult } from "components";
import { useStores } from "stores/useStore";
import { useFormStyles } from "styles/material/useFormStyles";

export const OperationsForm: React.FC = observer(() => {
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
            <FormControl
                className={formClasses.formGroup}
                component="fieldset"
                fullWidth
            >
                <FormLabel className={formClasses.groupLabel} component="legend">
                    Операции
                </FormLabel>
                <TextField
                    variant="outlined"
                    color="secondary"
                    placeholder="Операция - дата, ..."
                    value={changeCardForm.operations}
                    onChange={event =>
                        setFormValue("operations", event.target.value)
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
