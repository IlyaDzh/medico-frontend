import React from "react";
import { makeStyles } from "@material-ui/core";

import { ErrorAnimation } from "components";

const useStyles = makeStyles(() => ({
    content: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
}));

export const ErrorPage: React.FC = () => {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <div>
                <ErrorAnimation path="/" title="На главную" />
            </div>
        </main>
    );
};
