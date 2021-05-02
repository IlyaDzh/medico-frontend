import React, { useEffect, useState, createContext } from "react";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react";
import { makeStyles, Theme } from "@material-ui/core";

import { ErrorAnimation } from "components";
import { StepTime, StepSymptoms, StepPayment, StepResult } from "./Steps";
import { StepsNavigation } from "./StepsNavigation";
import { BackButton } from "./BackButton";
import { useStores } from "stores/useStore";

type StepsContextProps = {
    step: number;
    onNextStep: () => void;
    onPrevStep: () => void;
};

export const StepsContext = createContext<StepsContextProps>(
    {} as StepsContextProps
);

const useStyles = makeStyles((theme: Theme) => ({
    step: {
        marginBottom: 120,
        paddingTop: 20,
        [theme.breakpoints.down("xs")]: {
            marginBottom: 60
        }
    },
    error: {
        marginTop: 80,
        marginBottom: 80
    }
}));

const steps = [
    {
        step: 0,
        component: <StepTime />
    },
    {
        step: 1,
        component: <StepSymptoms />
    },
    {
        step: 2,
        component: <StepPayment />
    },
    {
        step: 3,
        component: <StepResult />
    }
];

export const AppointmentSteps: React.FC = observer(() => {
    const classes = useStyles();
    const [step, setStep] = useState<number>(0);
    const { id } = useParams<{ id: string }>();
    const { appointmentStore } = useStores();
    const {
        chosenDoctor,
        pendingMetaInfo,
        fetchingMetaInfoError,
        getMetaInfo,
        resetAppointment
    } = appointmentStore;

    useEffect(() => {
        if (chosenDoctor || pendingMetaInfo || fetchingMetaInfoError) {
            return;
        }

        getMetaInfo(Number(id));
    }, [id, chosenDoctor, pendingMetaInfo, fetchingMetaInfoError, getMetaInfo]);

    useEffect(() => {
        return () => resetAppointment();
    }, [resetAppointment]);

    const onNextStep = (): void => {
        setStep(prev => prev + 1);
    };

    const onPrevStep = (): void => {
        setStep(prev => prev - 1);
    };

    if (fetchingMetaInfoError) {
        return (
            <div className={classes.error}>
                <ErrorAnimation path="/doctors" title="Перейти к списку врачей" />
            </div>
        );
    }

    return (
        <StepsContext.Provider value={{ step, onNextStep, onPrevStep }}>
            <StepsNavigation />
            {step !== 0 && step !== 3 && <BackButton />}
            <section className={classes.step}>
                {steps.map(
                    item =>
                        item.step === step && (
                            <React.Fragment key={item.step}>
                                {item.component}
                            </React.Fragment>
                        )
                )}
            </section>
        </StepsContext.Provider>
    );
});
