import React from "react";
import { Container, Hidden } from "@material-ui/core";

import { ExtendedHeader, Header, Footer } from "components";
import { DoctorProfile } from "./components";

export const DoctorPage: React.FC = () => {
    return (
        <React.Fragment>
            <Hidden smDown>
                <Header isHeader />
            </Hidden>
            <Hidden mdUp>
                <ExtendedHeader />
            </Hidden>
            <main>
                <Container>
                    <DoctorProfile />
                </Container>
            </main>
            <Footer />
        </React.Fragment>
    );
};
