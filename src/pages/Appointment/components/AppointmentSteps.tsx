import React, { useState, createContext } from "react";

import { StepTime } from "./Steps";

type StepsContextProps = {
    step: number;
    onNextStep: () => void;
};

export const StepsContext = createContext<StepsContextProps>(
    {} as StepsContextProps
);

export const AppointmentSteps: React.FC = () => {
    const [step, setStep] = useState<number>(0);

    const onNextStep = (): void => {
        setStep(prev => prev + 1);
    };

    return (
        <StepsContext.Provider value={{ step, onNextStep }}>
            <section>
                <div hidden={step !== 0}>
                    <StepTime />
                </div>
                <div hidden={step !== 1}>step 2</div>
                <div hidden={step !== 2}>step 3</div>
                <div hidden={step !== 3}>step 4</div>
            </section>
        </StepsContext.Provider>
    );
};
