import React from "react";

import { DoctorsCategories, DoctorsList } from "./components";
import { ExtendedHeader, Footer } from "components";

export const DoctorsPage: React.FC = () => {
    return (
        <React.Fragment>
            <ExtendedHeader />
            <main>
                <DoctorsCategories />
                <DoctorsList />
            </main>
            <Footer />
        </React.Fragment>
    );
};
