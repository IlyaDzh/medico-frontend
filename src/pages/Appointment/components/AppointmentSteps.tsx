import React, { useState, createContext } from "react";
import { makeStyles } from "@material-ui/core";

import { StepTime, StepSymptoms } from "./Steps";
import { StepsNavigation } from "./StepsNavigation";
import { BackButton } from "./BackButton";

type StepsContextProps = {
    step: number;
    onNextStep: () => void;
};

export const StepsContext = createContext<StepsContextProps>(
    {} as StepsContextProps
);

const useStyles = makeStyles(() => ({
    step: {
        marginBottom: 120
    }
}));

export const AppointmentSteps: React.FC = () => {
    const classes = useStyles();
    const [step, setStep] = useState<number>(0);

    const onNextStep = (): void => {
        setStep(prev => prev + 1);
    };

    return (
        <StepsContext.Provider value={{ step, onNextStep }}>
            <StepsNavigation />
            {step !== 0 && <BackButton />}
            <section>
                <div className={classes.step} hidden={step !== 0}>
                    <StepTime />
                </div>
                <div className={classes.step} hidden={step !== 1}>
                    <StepSymptoms />
                </div>
                <div className={classes.step} hidden={step !== 2}>
                    step 3
                </div>
                <div className={classes.step} hidden={step !== 3}>
                    step 4
                </div>
            </section>
        </StepsContext.Provider>
    );
};
