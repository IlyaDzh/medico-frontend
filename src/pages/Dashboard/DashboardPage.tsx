import React, { useEffect } from "react";
import { observer } from "mobx-react";
import { Hidden, makeStyles } from "@material-ui/core";

import { Backdrop, Header, PaddingLine } from "components";
import { Menu, ContentLayout } from "./components";
import { DoctorRoutes, PatientRoutes } from "./routes";
import { useStores } from "stores/useStore";

const useStyles = makeStyles(() => ({
    main: {
        display: "flex"
    }
}));

export const DashboardPage: React.FC = observer(() => {
    const classes = useStyles();
    const { userStore, routerStore } = useStores();
    const { currentUser } = userStore;

    useEffect(() => {
        if (currentUser) {
            if (currentUser.userType === "doctor") {
                if (!currentUser.additionalData?.isVerified) {
                    routerStore.push("/questionnaire");
                }
            } else {
                if (!currentUser.additionalData) {
                    routerStore.push("/questionnaire");
                }
            }
        }
    }, [currentUser]);

    const isDoctor: boolean = currentUser?.userType === "doctor";

    if (!currentUser || !currentUser.additionalData) {
        return <Backdrop />;
    }

    return (
        <React.Fragment>
            <PaddingLine />
            <Header isHeader isDashboard />

            <main className={classes.main}>
                <Hidden smDown>
                    <Menu isDoctor={isDoctor} />
                </Hidden>
                <ContentLayout>
                    {isDoctor ? <DoctorRoutes /> : <PatientRoutes />}
                </ContentLayout>
            </main>
        </React.Fragment>
    );
});
