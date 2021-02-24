import React from "react";

import { SignUpForm } from "./components";
import { Header, Footer, PaddingLine } from "components";

export const SignUpPage: React.FC = () => {
    return (
        <React.Fragment>
            <PaddingLine />
            <Header />
            <main>
                <SignUpForm />
            </main>
            <Footer />
        </React.Fragment>
    );
};
