import React from "react";
import { observer } from "mobx-react";
import { Typography, makeStyles, Theme } from "@material-ui/core";

import { AppointmentResultItem } from "../../AppointmentResultItem";
import { useStores } from "stores/useStore";

export const HistoryTab: React.FC = observer(() => {
    const { dashboardPatientInfoStore } = useStores();
    const { history } = dashboardPatientInfoStore;

    return (
        <React.Fragment>
            {history.length > 0 ? (
                history.map(result => (
                    <AppointmentResultItem key={result.id} result={result} />
                ))
            ) : (
                <Typography variant="body1">
                    История консультаций не найдена
                </Typography>
            )}
        </React.Fragment>
    );
});
