import React from "react";

import { DoctorsCategories, DoctorsList, DoctorsPagination } from "./components";
import { ExtendedHeader, Footer } from "components";

export const DoctorsPage: React.FC = () => {
    return (
        <React.Fragment>
            <ExtendedHeader />
            <main>
                <DoctorsCategories />
                <DoctorsList />
                <DoctorsPagination />
            </main>
            <Footer />
        </React.Fragment>
    );
};
