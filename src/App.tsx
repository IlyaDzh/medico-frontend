import React, { useEffect, Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import { observer } from "mobx-react";
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
    Backdrop,
    ScrollHandler,
    DialogSignIn,
    DialogReset,
    DialogEmail,
    PrivateRoute
} from "components";
import { useStores } from "stores/useStore";

const DashboardPage = lazy(() => import("./pages/Dashboard"));

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
            <Suspense fallback={<Backdrop />}>
                <Switch>
                    <Route exact path="/ui-kit" component={UiKitPage} />
                    <Route
                        exact
                        path={["/", "/home", "/sign-up-confirmation"]}
                        component={HomePage}
                    />
                    <Route exact path="/doctors" component={DoctorsPage} />
                    <Route exact path="/doctor/:id" component={DoctorPage} />
                    <PrivateRoute
                        exact
                        path="/sign-up"
                        component={SignUpPage}
                        isAuthorized={!isAuthorized}
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
                    <Route component={() => <div>Error</div>} />
                </Switch>
            </Suspense>
            <DialogSignIn />
            <DialogReset />
            <DialogEmail />
        </React.Fragment>
    );
});
