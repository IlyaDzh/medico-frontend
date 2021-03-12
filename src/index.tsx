import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core";

import { App } from "./App";
import { rootStore } from "./stores";
import { StoreProvider } from "./stores/useStore";

import { main } from "./styles/material";
import "./styles/index.scss";

import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
    <StoreProvider store={rootStore}>
        <MuiThemeProvider theme={main}>
            <Router>
                <App />
            </Router>
        </MuiThemeProvider>
    </StoreProvider>,
    document.getElementById("root")
);

reportWebVitals();
