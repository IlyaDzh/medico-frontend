import React from "react";
import { Container, Hidden } from "@material-ui/core";

import { ExtendedHeader, Footer } from "components";
import {
    DoctorsSearch,
    DoctorsCategories,
    DoctorsList,
    DoctorsPagination
} from "./components";

export const DoctorsPage: React.FC = () => {
    return (
        <React.Fragment>
            <ExtendedHeader />
            <main>
                <Container>
                    <Hidden mdUp>
                        <DoctorsSearch />
                    </Hidden>
                    <DoctorsCategories />
                    <DoctorsList />
                    <DoctorsPagination />
                </Container>
            </main>
            <Footer />
        </React.Fragment>
    );
};
