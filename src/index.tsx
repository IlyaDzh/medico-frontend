import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import ruLocale from "date-fns/locale/ru";

import { App } from "./App";
import { rootStore } from "./stores";
import { StoreProvider } from "./stores/useStore";
import { main } from "./styles/material";
import "./styles/index.scss";

ReactDOM.render(
    <StoreProvider store={rootStore}>
        <MuiThemeProvider theme={main}>
            <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ruLocale}>
                <Router>
                    <App />
                </Router>
            </MuiPickersUtilsProvider>
        </MuiThemeProvider>
    </StoreProvider>,
    document.getElementById("root")
);
