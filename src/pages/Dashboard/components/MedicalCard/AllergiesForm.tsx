import React from "react";
import { observer } from "mobx-react";
import { TextField, FormControl, FormLabel } from "@material-ui/core";

import { Button, SubmissionError } from "components";
import { useStores } from "stores/useStore";
import { useFormStyles } from "styles/material/useFormStyles";

export const AllergiesForm: React.FC = observer(() => {
    const formClasses = useFormStyles();
    const { userStore, dashboardMedicalCard } = useStores();
    const {
        changeCardForm,
        pending,
        submissionError,
        setFormValue
    } = dashboardMedicalCard;
    const { currentUser } = userStore;

    return (
        <React.Fragment>
            <FormControl
                className={formClasses.formGroup}
                component="fieldset"
                fullWidth
            >
                <FormLabel className={formClasses.groupLabel} component="legend">
                    Аллергия
                </FormLabel>
                <TextField
                    variant="outlined"
                    color="secondary"
                    placeholder="Есть аллергия сезонная на полынь"
                    value={
                        changeCardForm.allergies === undefined
                            ? currentUser?.additionalData?.allergies
                            : changeCardForm.allergies || ""
                    }
                    onChange={event => setFormValue("allergies", event.target.value)}
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
