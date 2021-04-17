import React from "react";
import { Container } from "@material-ui/core";

import { AppointmentHeader, AppointmentSteps } from "./components";
import { Footer } from "components";

export const AppointmentPage: React.FC = () => {
    return (
        <React.Fragment>
            <AppointmentHeader />
            <main>
                <Container>
                    <AppointmentSteps />
                </Container>
            </main>
            <Footer />
        </React.Fragment>
    );
};
