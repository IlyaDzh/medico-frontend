import React from "react";
import { Switch, Route } from "react-router-dom";

import { DashboardHeader } from "components";
import { Menu } from "./components";
import {
    DoctorMainPage,
    DoctorCalendarPage,
    DoctorLogbookPage,
    DoctorPatientsPage,
    PatientAlertsPage,
    PatientResultsPage,
    PatientAnalyzesPage,
    PatientMedicalCardPage,
    MessagesPage,
    SettingsPage,
    ErrorPage
} from "./pages";

export const DashboardPage: React.FC = () => {
    const isDoctor: boolean = true;

    return (
        <div>
            <DashboardHeader isDoctor={isDoctor} />

            <Menu isDoctor={isDoctor} />

            {isDoctor ? (
                <Switch>
                    <Route
                        exact
                        path={["/dashboard", "/dashboard/main"]}
                        component={DoctorMainPage}
                    />
                    <Route
                        exact
                        path="/dashboard/calendar"
                        component={DoctorCalendarPage}
                    />
                    <Route
                        exact
                        path="/dashboard/logbook"
                        component={DoctorLogbookPage}
                    />
                    <Route
                        exact
                        path="/dashboard/patients"
                        component={DoctorPatientsPage}
                    />
                    <Route
                        exact
                        path="/dashboard/messages"
                        component={MessagesPage}
                    />
                    <Route
                        exact
                        path="/dashboard/settings"
                        component={SettingsPage}
                    />
                    <Route component={ErrorPage} />
                </Switch>
            ) : (
                <Switch>
                    <Route
                        exact
                        path={["/dashboard", "/dashboard/alerts"]}
                        component={PatientAlertsPage}
                    />
                    <Route
                        exact
                        path="/dashboard/results"
                        component={PatientResultsPage}
                    />
                    <Route
                        exact
                        path="/dashboard/analyzes"
                        component={PatientAnalyzesPage}
                    />
                    <Route
                        exact
                        path="/dashboard/medical-card"
                        component={PatientMedicalCardPage}
                    />
                    <Route
                        exact
                        path="/dashboard/messages"
                        component={MessagesPage}
                    />
                    <Route
                        exact
                        path="/dashboard/settings"
                        component={SettingsPage}
                    />
                    <Route component={ErrorPage} />
                </Switch>
            )}
        </div>
    );
};
