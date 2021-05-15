import React from "react";
import { Switch, Route } from "react-router-dom";

import {
    DoctorMainPage,
    DoctorSchedulePage,
    DoctorPatientsPage,
    PatientProfilePage,
    MessagesPage,
    SettingsPage,
    ErrorPage
} from "../pages";

export const DoctorRoutes: React.FC = () => (
    <Switch>
        <Route
            exact
            path={["/dashboard", "/dashboard/main"]}
            component={DoctorMainPage}
        />
        <Route exact path="/dashboard/schedule" component={DoctorSchedulePage} />
        <Route exact path="/dashboard/patients" component={DoctorPatientsPage} />
        <Route
            exact
            path="/dashboard/patient/:patientId/consultation/:consultationId"
            component={PatientProfilePage}
        />
        <Route exact path="/dashboard/messages" component={MessagesPage} />
        <Route exact path="/dashboard/settings" component={SettingsPage} />
        <Route component={ErrorPage} />
    </Switch>
);
