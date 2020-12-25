import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core";

import { App } from "./App";
import reportWebVitals from "./reportWebVitals";

import { main } from "./styles/material";
import "./styles/index.scss";

ReactDOM.render(
    <React.StrictMode>
        <MuiThemeProvider theme={main}>
            <Router>
                <App />
            </Router>
        </MuiThemeProvider>
    </React.StrictMode>,
    document.getElementById("root")
);

reportWebVitals();
