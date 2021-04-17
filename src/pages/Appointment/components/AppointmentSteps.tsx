import React, { useState, createContext } from "react";
import { makeStyles } from "@material-ui/core";

import { StepTime, StepSymptoms } from "./Steps";
import { StepsNavigation } from "./StepsNavigation";
import { BackButton } from "./BackButton";

type StepsContextProps = {
    step: number;
    onNextStep: () => void;
    onPrevStep: () => void;
};

export const StepsContext = createContext<StepsContextProps>(
    {} as StepsContextProps
);

const useStyles = makeStyles(() => ({
    step: {
        marginBottom: 120,
        paddingTop: 20
    }
}));

export const AppointmentSteps: React.FC = () => {
    const classes = useStyles();
    const [step, setStep] = useState<number>(0);

    const onNextStep = (): void => {
        setStep(prev => prev + 1);
    };

    const onPrevStep = (): void => {
        setStep(prev => prev - 1);
    };

    return (
        <StepsContext.Provider value={{ step, onNextStep, onPrevStep }}>
            <StepsNavigation />
            {step !== 0 && <BackButton />}
            <section className={classes.step}>
                <div hidden={step !== 0}>
                    <StepTime />
                </div>
                <div hidden={step !== 1}>
                    <StepSymptoms />
                </div>
                <div hidden={step !== 2}>step 3</div>
                <div hidden={step !== 3}>step 4</div>
            </section>
        </StepsContext.Provider>
    );
};
