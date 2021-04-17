import React, { useContext } from "react";
import {
    Typography,
    Stepper,
    Step,
    StepConnector,
    StepLabel,
    makeStyles,
    Theme
} from "@material-ui/core";

import { StepsContext } from "./AppointmentSteps";

const useStyles = makeStyles((theme: Theme) => ({
    stepper: {
        backgroundColor: "transparent",
        padding: "24px 0",
        marginBottom: 32,
        [theme.breakpoints.down("sm")]: {
            marginBottom: 0,
            flexWrap: "wrap"
        }
    },
    step: {
        [theme.breakpoints.down("xs")]: {
            marginBottom: 12
        }
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
        <Stepper
            className={classes.stepper}
            connector={<StepConnector className={classes.step}></StepConnector>}
            activeStep={step}
            nonLinear
        >
            {steps.map(item => (
                <Step
                    key={item.id}
                    className={classes.step}
                    completed={item.id <= step}
                >
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
