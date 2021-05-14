import React from "react";
import { Link } from "react-router-dom";
import { Typography, makeStyles, Theme } from "@material-ui/core";

import { Avatar } from "components";
import { CalendarIcon, ClockIcon, EnvelopeIcon, PhoneIcon, CameraIcon } from "icons";
import { PatientItem as PatientItemData } from "stores/interfaces/Dashboard";
import { formatDate } from "utils/formatDate";

interface IPatientItem {
    consultation: PatientItemData;
}

const useStyles = makeStyles((theme: Theme) => ({
    patient: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "#fff",
        border: `1px solid ${theme.palette.other!.main}`,
        borderRadius: 8,
        padding: "24px 28px",
        marginBottom: 24,
        textDecoration: "none",
        transition: "box-shadow 0.3s ease",
        "&:hover": {
            boxShadow: "0px 4px 8px rgba(45, 96, 156, 0.2)"
        },
        [theme.breakpoints.down("md")]: {
            flexWrap: "wrap",
            padding: "24px 28px 4px"
        },
        [theme.breakpoints.down("xs")]: {
            marginBottom: 12,
            padding: "18px 22px 4px"
        }
    },
    patientTitle: {
        marginRight: 12,
        minWidth: 240,
        [theme.breakpoints.down("md")]: {
            marginBottom: 20
        }
    },
    title: {
        marginBottom: 4
    },
    timeToConsultation: {
        color: theme.palette.text.hint
    },
    patientDateTime: {
        marginRight: 12,
        minWidth: 210,
        [theme.breakpoints.down("md")]: {
            marginBottom: 20
        }
    },
    consultationTime: {
        display: "flex",
        alignItems: "center",
        marginBottom: 3
    },
    date: {
        marginLeft: 12
    },
    time: {
        marginLeft: 12,
        fontWeight: 400,
        color: theme.palette.text.hint
    },
    patientInfo: {
        display: "flex",
        alignItems: "center",
        minWidth: 300,
        [theme.breakpoints.down("md")]: {
            marginBottom: 20
        }
    },
    patientAvatar: {
        marginRight: 14
    },
    consultationType: {
        display: "flex",
        alignItems: "center"
    },
    type: {
        marginLeft: 12,
        fontWeight: 400,
        color: theme.palette.text.hint
    }
}));

const communicationMethods = {
    1: <EnvelopeIcon color="#5ea1f0" width={22} height={22} />,
    2: <PhoneIcon color="#5ea1f0" width={22} height={22} />,
    3: <CameraIcon color="#5ea1f0" width={22} height={22} />
};

export const PatientItem: React.FC<IPatientItem> = ({ consultation }) => {
    const classes = useStyles();

    return (
        <Link
            to={`/dashboard/patient/${consultation.patient.id}`}
            className={classes.patient}
        >
            <div className={classes.patientTitle}>
                <Typography className={classes.title} variant="h5">
                    {consultation.isFirstConsultation
                        ? "Первичная консультация"
                        : "Повторная консультация"}
                </Typography>
                <Typography className={classes.timeToConsultation} variant="h6">
                    до начала консультации <br />
                    <Typography component="span" variant="h6" color="textSecondary">
                        10 минут
                    </Typography>
                </Typography>
            </div>
            <div className={classes.patientDateTime}>
                <div className={classes.consultationTime}>
                    <CalendarIcon width={18} height={18} />
                    <Typography
                        className={classes.date}
                        variant="h5"
                        color="textSecondary"
                    >
                        {formatDate(
                            consultation.receptionDate.toString(),
                            "dd MMMM yyyy"
                        )}
                    </Typography>
                </div>
                <div className={classes.consultationTime}>
                    <ClockIcon />
                    <Typography className={classes.time} variant="h5">
                        13:00 - 13:30
                    </Typography>
                </div>
            </div>
            <div className={classes.patientInfo}>
                <Avatar
                    className={classes.patientAvatar}
                    size={44}
                    src={
                        consultation.patient.avatar
                            ? process.env.REACT_APP_API_BASE_URL +
                              consultation.patient.avatar
                            : undefined
                    }
                    alt={`${consultation.patient.name} аватар`}
                />
                <div>
                    <Typography variant="h5" color="textSecondary">
                        {consultation.patient.name} {consultation.patient.surname}
                    </Typography>
                    <div className={classes.consultationType}>
                        {
                            communicationMethods[
                                consultation.communicationMethod.id as 1 | 2 | 3
                            ]
                        }
                        <Typography className={classes.type} variant="h5">
                            {consultation.communicationMethod.method}
                        </Typography>
                    </div>
                </div>
            </div>
        </Link>
    );
};
