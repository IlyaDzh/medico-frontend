import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { observer } from "mobx-react";
import { CssBaseline } from "@material-ui/core";

import {
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
    Drawer,
    DialogSignIn,
    DialogReset,
    DialogEmail,
    PrivateRoute
} from "components";
import { useStores } from "stores/useStore";

export const App: React.FC = observer(() => {
    const { userStore } = useStores();
    const { isAuthorized, currentUser, pending, fetchUser } = userStore;

    useEffect(() => {
        if (localStorage.getItem("accessToken")) {
            fetchUser();
        }
    }, [fetchUser]);

    if (pending) {
        return <Backdrop />;
    }

    const dashboardIsActive = currentUser
        ? currentUser.userType === "patient"
            ? Boolean(currentUser.additionalData)
            : Boolean(currentUser.additionalData?.isVerified)
        : localStorage.getItem("accessToken")
        ? true
        : false;

    return (
        <React.Fragment>
            <CssBaseline />
            <ScrollHandler />
            <Drawer />

            <Switch>
                <Route
                    exact
                    path={["/", "/home", "/sign-up-confirmation"]}
                    component={HomePage}
                />
                <Route
                    exact
                    path={[
                        "/doctors",
                        "/doctors/:specialty",
                        "/doctors/:specialty/:page"
                    ]}
                    component={DoctorsPage}
                />
                <Route exact path="/doctor/:id" component={DoctorPage} />
                <PrivateRoute
                    exact
                    path="/sign-up"
                    component={SignUpPage}
                    canRoute={!isAuthorized}
                />
                <PrivateRoute
                    exact
                    path="/appointment/:id"
                    component={AppointmentPage}
                    canRoute={isAuthorized}
                />
                <PrivateRoute
                    exact
                    path="/questionnaire"
                    component={QuestionnairePage}
                    canRoute={isAuthorized}
                />
                <PrivateRoute
                    path="/dashboard"
                    component={DashboardPage}
                    canRoute={dashboardIsActive}
                />
                <Route component={ErrorPage} />
            </Switch>

            <DialogSignIn />
            <DialogReset />
            <DialogEmail />
        </React.Fragment>
    );
});
