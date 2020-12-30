import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";

import { UiKitPage, HomePage, DoctorsPage, DoctorPage } from "./pages";

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
                    <Route exact path="/tariffs" component={HomePage} />
                    <Route
                        exact
                        path="/sign-up"
                        component={() => <div>Sign-up page</div>}
                    />
                    <Route path="/dashboard" component={DashboardPage} />
                    <Route component={() => <div>Error</div>} />
                </Switch>
            </Suspense>
        </React.Fragment>
    );
};
