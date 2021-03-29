import React from "react";
import { observer } from "mobx-react";

import { PatientForm, DoctorForm } from "./components";
import { Header, Footer, PaddingLine } from "components";
import { useStores } from "stores/useStore";

export const QuestionnairePage: React.FC = observer(() => {
    const { userStore } = useStores();
    const { currentUser } = userStore;

    const isPatient: boolean = currentUser?.userType === "patient";

    return (
        <React.Fragment>
            <PaddingLine />
            <Header />
            <main>{isPatient ? <PatientForm /> : <DoctorForm />}</main>
            <Footer />
        </React.Fragment>
    );
});
