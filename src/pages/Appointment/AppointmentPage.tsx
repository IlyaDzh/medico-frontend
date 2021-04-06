import React from "react";
import { Container } from "@material-ui/core";

import { AppointmentHeader, StepsNavigation, AppointmentSteps } from "./components";
import { Footer } from "components";

export const AppointmentPage: React.FC = () => {
    return (
        <React.Fragment>
            <AppointmentHeader />
            <main>
                <Container>
                    <StepsNavigation />
                    <AppointmentSteps />
                </Container>
            </main>
            <Footer />
        </React.Fragment>
    );
};
