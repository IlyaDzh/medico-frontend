import React from "react";

import {
    HomeHeader,
    DoctorsSection,
    AboutSection,
    HowItWorksSection,
    ReviewsSection,
    TariffsSection
} from "./components";
import { Footer } from "components";

import "slick-carousel/slick/slick.css";

export const HomePage: React.FC = () => {
    return (
        <React.Fragment>
            <HomeHeader />
            <main>
                <DoctorsSection />
                <AboutSection />
                <HowItWorksSection />
                <ReviewsSection />
                <TariffsSection />
            </main>
            <Footer />
        </React.Fragment>
    );
};
