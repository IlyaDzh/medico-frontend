import React from "react";
import { Typography, makeStyles } from "@material-ui/core";

import { Alert } from "../components";
import { DialogCancelAppointment } from "components";

const useStyles = makeStyles(() => ({
    title: {
        marginBottom: 12
    },
    articleMargin: {
        marginBottom: 44
    }
}));

export const PatientAlertsPage: React.FC = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <article className={classes.articleMargin}>
                <Typography className={classes.title} variant="h4">
                    Запланированные записи
                </Typography>
                {new Array(4).fill(undefined).map((alert, index) => (
                    <Alert key={index} />
                ))}
            </article>
            <article>
                <Typography className={classes.title} variant="h4">
                    История
                </Typography>
                {new Array(1).fill(undefined).map((alert, index) => (
                    <Alert key={index} isHistory />
                ))}
            </article>

            <DialogCancelAppointment />
        </React.Fragment>
    );
};
