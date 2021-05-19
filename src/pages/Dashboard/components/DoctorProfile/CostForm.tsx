import React from "react";
import { observer } from "mobx-react";
import { TextField, FormControl, FormLabel } from "@material-ui/core";

import { Button, SubmissionResult } from "components";
import { useStores } from "stores/useStore";
import { useFormStyles } from "styles/material/useFormStyles";

export const CostForm: React.FC = observer(() => {
    const formClasses = useFormStyles();
    const { dashboardDoctorProfileStore } = useStores();
    const { doctorProfileForm, pendingUpdate, submissionError, setFormValue } =
        dashboardDoctorProfileStore;

    return (
        <React.Fragment>
            <FormControl className={formClasses.formGroup} component="fieldset">
                <FormLabel className={formClasses.groupLabel} component="legend">
                    Укажите стоимость консультации
                </FormLabel>
                <TextField
                    type="number"
                    variant="outlined"
                    color="secondary"
                    placeholder="1000"
                    InputProps={{ inputProps: { min: 300, max: 100000 } }}
                    value={doctorProfileForm.cost}
                    onChange={event => setFormValue("cost", event.target.value)}
                />
            </FormControl>
            <SubmissionResult align="center" isError>
                {submissionError}
            </SubmissionResult>
            <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={pendingUpdate}
                isLoaded={pendingUpdate}
            >
                Изменить
            </Button>
        </React.Fragment>
    );
});
