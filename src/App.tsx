import React from "react";
import { CssBaseline } from "@material-ui/core";

import { UiKitPage } from "./pages";

export const App: React.FC = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <UiKitPage />
        </React.Fragment>
    );
};
