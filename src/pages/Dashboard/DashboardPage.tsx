import React from "react";
import { observer } from "mobx-react";

import { Header, PaddingLine } from "components";
import { Menu, ContentLayout } from "./components";
import { DoctorRoutes, PatientRoutes } from "./routes";
import { useStores } from "stores/useStore";

export const DashboardPage: React.FC = observer(() => {
    const { userStore } = useStores();
    const { currentUser } = userStore;

    const isDoctor: boolean = currentUser?.userType === "doctor";

    return (
        <React.Fragment>
            <PaddingLine />
            <Header isHeader isDashboard />

            <main>
                <Menu isDoctor={isDoctor} />
                <ContentLayout>
                    {isDoctor ? <DoctorRoutes /> : <PatientRoutes />}
                </ContentLayout>
            </main>
        </React.Fragment>
    );
});
