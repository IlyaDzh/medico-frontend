import React from "react";
import { Redirect } from "react-router-dom";
import { observer } from "mobx-react";

import { PatientForm, DoctorForm } from "./components";
import { Header, Footer, PaddingLine } from "components";
import { useStores } from "stores/useStore";

export const QuestionnairePage: React.FC = observer(() => {
    const { userStore } = useStores();
    const { currentUser } = userStore;

    const isPatient: boolean = currentUser?.userType === "patient";

    const patientComponent = currentUser?.additionalData ? (
        <Redirect to="/dashboard" />
    ) : (
        <PatientForm />
    );

    const doctorComponent = currentUser?.additionalData?.isVerified ? (
        <Redirect to="/dashboard" />
    ) : currentUser?.additionalData ? (
        <div>На досмотре</div>
    ) : (
        <DoctorForm />
    );

    return (
        <React.Fragment>
            <PaddingLine />
            <Header />
            <main>{isPatient ? patientComponent : doctorComponent}</main>
            <Footer />
        </React.Fragment>
    );
});
