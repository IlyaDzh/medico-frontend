import React from "react";

import { HomeHeader, DoctorsCarousel, AboutSection } from "./components";
import { Footer } from "components";

export const HomePage: React.FC = () => {
    return (
        <React.Fragment>
            <HomeHeader />
            <main>
                <DoctorsCarousel />
                <AboutSection />
            </main>
            <Footer />
        </React.Fragment>
    );
};
