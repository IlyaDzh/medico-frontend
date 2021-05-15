import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react";
import { makeStyles, Theme } from "@material-ui/core";

import { Loader, ErrorAnimation } from "components";
import { useStores } from "stores/useStore";

const useStyles = makeStyles((theme: Theme) => ({
    error: {}
}));

export const PatientProfilePage: React.FC = observer(() => {
    const classes = useStyles();
    const { dashboardPatientInfoStore } = useStores();
    const { patientInfo, pending, fetchingError, getPatientInfo } =
        dashboardPatientInfoStore;
    const { patientId, consultationId } =
        useParams<{ patientId: string; consultationId: string }>();

    useEffect(() => {
        getPatientInfo(Number(patientId), Number(consultationId));
    }, [patientId, consultationId, getPatientInfo]);

    if (fetchingError) {
        return (
            <div className={classes.error}>
                <ErrorAnimation path="/doctors" title="Перейти к списку врачей" />
            </div>
        );
    }

    return (
        <React.Fragment>
            <h1 className="visually-hidden">Профиль пациента</h1>
            {!pending ? (
                <div>
                    {patientId} <br />
                    {consultationId}
                </div>
            ) : (
                <Loader level={3} isCenter />
            )}
        </React.Fragment>
    );
});
