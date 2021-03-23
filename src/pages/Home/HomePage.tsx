import React from "react";
import { Route } from "react-router-dom";

import {
    HomeHeader,
    DoctorsSection,
    AboutSection,
    HowItWorksSection,
    ReviewsSection,
    TariffsSection
} from "./components";
import { Footer, DialogConfirmation } from "components";

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

            <Route path="/sign-up-confirmation">
                <DialogConfirmation isOpen />
            </Route>
        </React.Fragment>
    );
};
