import React from "react";
import { observer } from "mobx-react";
import { TextField, FormControl, FormLabel } from "@material-ui/core";

import { Button, SubmissionResult } from "components";
import { useStores } from "stores/useStore";
import { useFormStyles } from "styles/material/useFormStyles";

export const AboutForm: React.FC = observer(() => {
    const formClasses = useFormStyles();
    const { dashboardDoctorProfileStore } = useStores();
    const { doctorProfileForm, pendingUpdate, submissionError, setFormValue } =
        dashboardDoctorProfileStore;

    return (
        <React.Fragment>
            <FormControl className={formClasses.formGroup} component="fieldset">
                <FormLabel className={formClasses.groupLabel} component="legend">
                    Напишите информацию о себе
                </FormLabel>
                <TextField
                    variant="outlined"
                    color="secondary"
                    placeholder="О себе..."
                    value={doctorProfileForm.about}
                    onChange={event => setFormValue("about", event.target.value)}
                    rows={4}
                    multiline
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
                disabled={pendingUpdate}
                isLoaded={pendingUpdate}
            >
                Изменить
            </Button>
        </React.Fragment>
    );
});
