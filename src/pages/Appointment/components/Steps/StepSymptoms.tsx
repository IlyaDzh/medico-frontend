import React, { useContext } from "react";
import {
    Typography,
    TextField,
    FormControl,
    FormLabel,
    makeStyles,
    Theme
} from "@material-ui/core";

import { StepsContext } from "../AppointmentSteps";
import { Button } from "components";

const useStyles = makeStyles((theme: Theme) => ({
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

export const StepSymptoms: React.FC = () => {
    const classes = useStyles();
    const { onNextStep } = useContext(StepsContext);

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
                    rows={4}
                    multiline
                    fullWidth
                ></TextField>
            </FormControl>
            <Button variant="contained" onClick={onNextStep}>
                Продолжить
            </Button>
        </form>
    );
};
