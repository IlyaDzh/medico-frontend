import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { observer } from "mobx-react";
import { CssBaseline } from "@material-ui/core";

import {
    UiKitPage,
    HomePage,
    DoctorsPage,
    DoctorPage,
    SignUpPage,
    QuestionnairePage,
    DashboardPage,
    AppointmentPage,
    ErrorPage
} from "./pages";
import {
    Backdrop,
    ScrollHandler,
    DialogSignIn,
    DialogReset,
    DialogEmail,
    PrivateRoute
} from "components";
import { useStores } from "stores/useStore";

export const App: React.FC = observer(() => {
    const { userStore } = useStores();
    const { isAuthorized, pending, fetchUser } = userStore;

    useEffect(() => {
        if (localStorage.getItem("accessToken")) {
            fetchUser();
        }
    }, [fetchUser]);

    if (pending) {
        return <Backdrop />;
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <ScrollHandler />

            <Switch>
                <Route exact path="/ui-kit" component={UiKitPage} />
                <Route
                    exact
                    path={["/", "/home", "/sign-up-confirmation"]}
                    component={HomePage}
                />
                <Route
                    exact
                    path={["/doctors", "/doctors/:page"]}
                    component={DoctorsPage}
                />
                <Route exact path="/doctor/:id" component={DoctorPage} />
                <PrivateRoute
                    exact
                    path="/sign-up"
                    component={SignUpPage}
                    isAuthorized={!isAuthorized}
                />
                <PrivateRoute
                    exact
                    path="/appointment"
                    component={AppointmentPage}
                    isAuthorized={isAuthorized}
                />
                <PrivateRoute
                    exact
                    path="/questionnaire"
                    component={QuestionnairePage}
                    isAuthorized={isAuthorized}
                />
                <PrivateRoute
                    path="/dashboard"
                    component={DashboardPage}
                    isAuthorized={isAuthorized}
                />
                <Route component={ErrorPage} />
            </Switch>

            <DialogSignIn />
            <DialogReset />
            <DialogEmail />
        </React.Fragment>
    );
});
