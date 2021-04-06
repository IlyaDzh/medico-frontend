import React, { useContext } from "react";
import {
    FormControl,
    FormLabel,
    TextField,
    makeStyles,
    Theme
} from "@material-ui/core";

import { StepsContext } from "../AppointmentSteps";
import { BackButton } from "../BackButton";
import { Button } from "components";

const useStyles = makeStyles((theme: Theme) => ({
    step: {
        marginBottom: 120
    },
    stepContent: {
        display: "flex",
        padding: "36px 24px 16px"
    },
    doctorCard: {
        width: 600,
        borderRadius: 8,
        border: `1px solid ${theme.palette.other!.main}`,
        backgroundColor: "#fff",
        marginRight: 72
    },
    doctorCardHeader: {
        display: "flex",
        alignItems: "center"
    },
    doctorCardFooter: {},
    timeForm: {}
}));

export const StepTime: React.FC = () => {
    const classes = useStyles();
    const { onNextStep } = useContext(StepsContext);

    return (
        <div className={classes.step}>
            <BackButton />
            <div className={classes.stepContent}>
                <div className={classes.doctorCard}>
                    <div className={classes.doctorCardHeader}></div>
                    <div className={classes.doctorCardFooter}></div>
                </div>
                <form className={classes.timeForm}>
                    <FormControl component="fieldset" fullWidth>
                        <FormLabel component="legend">Дата приёма:</FormLabel>
                        <TextField
                            variant="outlined"
                            color="secondary"
                            placeholder="Не выбрана"
                        />
                    </FormControl>
                    <Button variant="contained" onClick={onNextStep}>
                        Выбрать и продолжить
                    </Button>
                </form>
            </div>
        </div>
    );
};
