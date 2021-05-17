import React from "react";
import { Switch, Route } from "react-router-dom";

import {
    PatientAlertsPage,
    PatientResultsPage,
    PatientAnalyzesPage,
    PatientMedicalCardPage,
    ChatPage,
    SettingsPage,
    ErrorPage
} from "../pages";

export const PatientRoutes: React.FC = () => (
    <Switch>
        <Route
            exact
            path={["/dashboard", "/dashboard/alerts"]}
            component={PatientAlertsPage}
        />
        <Route exact path="/dashboard/results" component={PatientResultsPage} />
        <Route exact path="/dashboard/analyzes" component={PatientAnalyzesPage} />
        <Route
            exact
            path="/dashboard/medical-card"
            component={PatientMedicalCardPage}
        />
        <Route
            exact
            path={["/dashboard/chat", "/dashboard/chat/:chatId"]}
            component={ChatPage}
        />
        <Route exact path="/dashboard/settings" component={SettingsPage} />
        <Route component={ErrorPage} />
    </Switch>
);
