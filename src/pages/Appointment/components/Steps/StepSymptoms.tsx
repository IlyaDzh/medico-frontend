import React, { useContext } from "react";
import { observer } from "mobx-react";
import {
    Typography,
    TextField,
    FormControl,
    FormLabel,
    makeStyles
} from "@material-ui/core";

import { StepsContext } from "../AppointmentSteps";
import { Button } from "components";
import { useStores } from "stores/useStore";

const useStyles = makeStyles(() => ({
    symptomsForm: {},
    symptomsTitle: {
        marginBottom: 36
    },
    symptomsField: {
        display: "block",
        marginBottom: 55,
        maxWidth: 822,
        width: "100%"
    }
}));

export const StepSymptoms: React.FC = observer(() => {
    const classes = useStyles();
    const { onNextStep } = useContext(StepsContext);
    const { appointmentStore } = useStores();
    const {
        appointmentForm,
        appointmentFormErrors,
        setFormValue,
        validateForm
    } = appointmentStore;

    const handleNextStepClick = (): void => {
        if (!validateForm()) {
            return;
        }

        onNextStep();
    };

    return (
        <form className={classes.symptomsForm}>
            <FormControl
                className={classes.symptomsField}
                component="fieldset"
                fullWidth
            >
                <FormLabel className={classes.symptomsTitle} component="legend">
                    <Typography variant="h3">Укажите ваши симптомы</Typography>
                </FormLabel>
                <TextField
                    variant="outlined"
                    color="secondary"
                    placeholder="Дополнительная информация"
                    value={appointmentForm.symptoms}
                    onChange={event => setFormValue("symptoms", event.target.value)}
                    rows={4}
                    error={Boolean(appointmentFormErrors.symptoms)}
                    helperText={appointmentFormErrors.symptoms}
                    multiline
                    fullWidth
                />
            </FormControl>
            <Button variant="contained" onClick={handleNextStepClick}>
                Продолжить
            </Button>
        </form>
    );
});
