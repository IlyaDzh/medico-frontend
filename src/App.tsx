import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";

import {
    UiKitPage,
    HomePage,
    DoctorsPage,
    DoctorPage,
    SignUpPage,
    QuestionnairePage
} from "./pages";
import {
    DialogSignIn,
    DialogReset,
    DialogEmail,
    DialogConfirmation
} from "components";

const DashboardPage = lazy(() => import("./pages/Dashboard"));

export const App: React.FC = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route exact path="/ui-kit" component={UiKitPage} />
                    <Route exact path={["/", "/home"]} component={HomePage} />
                    <Route exact path="/doctors" component={DoctorsPage} />
                    <Route exact path="/doctor/:id" component={DoctorPage} />
                    <Route exact path="/sign-up" component={SignUpPage} />
                    <Route
                        exact
                        path="/questionnaire"
                        component={QuestionnairePage}
                    />
                    <Route path="/dashboard" component={DashboardPage} />
                    <Route component={() => <div>Error</div>} />
                </Switch>
            </Suspense>
            <DialogSignIn />
            <DialogReset />
            <DialogEmail />
            <DialogConfirmation />
        </React.Fragment>
    );
};
