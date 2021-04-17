import React, { useContext } from "react";
import { Typography, Stepper, Step, StepLabel, makeStyles } from "@material-ui/core";

import { StepsContext } from "./AppointmentSteps";

const useStyles = makeStyles(() => ({
    stepper: {
        backgroundColor: "transparent",
        padding: "24px 0",
        marginBottom: 32
    },
    stepLabel: {
        "& text": {
            fill: "#fff"
        }
    }
}));

const steps = [
    {
        id: 1,
        label: "Время"
    },
    {
        id: 2,
        label: "Симптомы"
    },
    {
        id: 3,
        label: "Оплата"
    },
    {
        id: 4,
        label: "Вы записались"
    }
];

export const StepsNavigation: React.FC = () => {
    const classes = useStyles();
    const { step } = useContext(StepsContext);

    return (
        <Stepper className={classes.stepper} nonLinear activeStep={step}>
            {steps.map(item => (
                <Step key={item.id} completed={item.id === step}>
                    <StepLabel className={classes.stepLabel}>
                        <Typography variant="h5" color="textSecondary">
                            {item.label}
                        </Typography>
                    </StepLabel>
                </Step>
            ))}
        </Stepper>
    );
};
