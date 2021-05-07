import React, { useEffect } from "react";
import { observer } from "mobx-react";
import { Typography, makeStyles } from "@material-ui/core";

import { AppointmentResultItem } from "../components";
import { Loader } from "components";
import { useStores } from "stores/useStore";

const useStyles = makeStyles(() => ({
    title: {
        marginBottom: 24
    }
}));

export const PatientResultsPage: React.FC = observer(() => {
    const classes = useStyles();
    const { dashboardResults } = useStores();
    const { appointmentResults, pending, getAppointmentResults } = dashboardResults;

    useEffect(() => {
        if (!appointmentResults.length) {
            getAppointmentResults();
        }
    }, [getAppointmentResults]); // eslint-disable-line

    return (
        <div>
            <Typography className={classes.title} variant="h4">
                Назначения врача
            </Typography>
            {!pending ? (
                appointmentResults.length > 0 ? (
                    appointmentResults.map((result, index) => (
                        <AppointmentResultItem key={index} result={result} />
                    ))
                ) : (
                    <Typography variant="body1">
                        Назначения врачей не найдены
                    </Typography>
                )
            ) : (
                <Loader level={3} isCenter />
            )}
        </div>
    );
});
