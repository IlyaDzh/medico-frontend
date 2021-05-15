import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react";
import { Typography, makeStyles, Theme } from "@material-ui/core";

import { PatientTabs } from "../components";
import { Button, Avatar, Loader, ErrorAnimation } from "components";
import { EnvelopeIcon, PhoneIcon, CameraIcon } from "icons";
import { useStores } from "stores/useStore";
import { formatDate } from "utils/formatDate";

const useStyles = makeStyles((theme: Theme) => ({
    header: {
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        marginBottom: 18
    },
    title: {
        [theme.breakpoints.down("xs")]: {
            marginBottom: 16
        }
    },
    patientMain: {
        display: "flex",
        alignItems: "center",
        marginBottom: 50
    },
    patientInfo: {
        marginLeft: 32
    },
    patientFullname: {
        marginBottom: 20
    }
}));

const communicationMethods = {
    1: <EnvelopeIcon />,
    2: <PhoneIcon />,
    3: <CameraIcon />
};

export const PatientProfilePage: React.FC = observer(() => {
    const classes = useStyles();
    const { dashboardPatientInfoStore } = useStores();
    const { patientInfo, pending, fetchingError, getPatientInfo, resetProfile } =
        dashboardPatientInfoStore;
    const { patientId, consultationId } =
        useParams<{ patientId: string; consultationId: string }>();

    useEffect(() => {
        getPatientInfo(Number(patientId), Number(consultationId));
    }, [patientId, consultationId, getPatientInfo]);

    useEffect(() => {
        return () => resetProfile();
    }, [resetProfile]);

    if (fetchingError) {
        return (
            <ErrorAnimation
                path="/dashboard/patients"
                title="Перейти к списку консультаций"
            />
        );
    }

    return (
        <React.Fragment>
            <div className={classes.header}>
                <Typography className={classes.title} variant="h4">
                    Пациент
                </Typography>
                {!pending && patientInfo && (
                    <Button
                        variant="contained"
                        size="large"
                        to="/doctors"
                        icon={
                            communicationMethods[
                                patientInfo.currentConsultation.communicationMethod
                                    .id as 1 | 2 | 3
                            ]
                        }
                    >
                        Связаться с пациентом
                    </Button>
                )}
            </div>
            {pending || !patientInfo ? (
                <Loader level={3} isCenter />
            ) : (
                <React.Fragment>
                    <div className={classes.patientMain}>
                        <Avatar
                            size={142}
                            src={
                                patientInfo.patient.avatar
                                    ? process.env.REACT_APP_API_BASE_URL +
                                      patientInfo.patient.avatar
                                    : undefined
                            }
                            alt={`${patientInfo.patient.name} аватар`}
                        />
                        <div className={classes.patientInfo}>
                            <Typography
                                className={classes.patientFullname}
                                variant="h3"
                            >
                                {patientInfo.patient.surname}{" "}
                                {patientInfo.patient.name}{" "}
                                {patientInfo.patient.middleName}
                            </Typography>
                            <Typography variant="body1" color="textSecondary">
                                Дата рождения{" "}
                                {formatDate(
                                    patientInfo.patient.birthDate.toString(),
                                    "dd.MM.yyyy"
                                )}
                            </Typography>
                        </div>
                    </div>

                    <PatientTabs />
                </React.Fragment>
            )}
        </React.Fragment>
    );
});
