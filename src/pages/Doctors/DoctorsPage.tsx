import React from "react";
import { Container, Hidden } from "@material-ui/core";

import { Footer } from "components";
import {
    DoctorsHeader,
    DoctorsSearch,
    DoctorsCategories,
    DoctorsList,
    DoctorsPagination
} from "./components";

export const DoctorsPage: React.FC = () => {
    return (
        <React.Fragment>
            <DoctorsHeader />
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
