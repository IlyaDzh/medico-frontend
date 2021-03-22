import React from "react";

import { PatientForm, DoctorForm } from "./components";
import { Header, Footer, PaddingLine } from "components";

export const QuestionnairePage: React.FC = () => {
    const isDoctor: boolean = true;

    return (
        <React.Fragment>
            <PaddingLine />
            <Header />
            <main>{!isDoctor ? <PatientForm /> : <DoctorForm />}</main>
            <Footer />
        </React.Fragment>
    );
};
