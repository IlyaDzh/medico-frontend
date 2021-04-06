import React from "react";
import { Switch, Route } from "react-router-dom";

import {
    DoctorMainPage,
    DoctorCalendarPage,
    DoctorLogbookPage,
    DoctorPatientsPage,
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
        <Route exact path="/dashboard/calendar" component={DoctorCalendarPage} />
        <Route exact path="/dashboard/logbook" component={DoctorLogbookPage} />
        <Route exact path="/dashboard/patients" component={DoctorPatientsPage} />
        <Route exact path="/dashboard/messages" component={MessagesPage} />
        <Route exact path="/dashboard/settings" component={SettingsPage} />
        <Route component={ErrorPage} />
    </Switch>
);
