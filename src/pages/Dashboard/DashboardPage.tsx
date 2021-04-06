import React from "react";
import { observer } from "mobx-react";
import { makeStyles } from "@material-ui/core";

import { Header, PaddingLine } from "components";
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
    const { userStore } = useStores();
    const { currentUser } = userStore;

    const isDoctor: boolean = currentUser?.userType === "doctor";

    return (
        <React.Fragment>
            <PaddingLine />
            <Header isHeader isDashboard />

            <main className={classes.main}>
                <Menu isDoctor={isDoctor} />
                <ContentLayout>
                    {isDoctor ? <DoctorRoutes /> : <PatientRoutes />}
                </ContentLayout>
            </main>
        </React.Fragment>
    );
});
