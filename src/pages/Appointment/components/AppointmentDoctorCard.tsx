import React from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";
import { Typography, makeStyles, Theme } from "@material-ui/core";
import { Rating } from "@material-ui/lab";

import { CalendarIcon, ClockIcon, AccountEnvelopeIcon } from "icons";
import { useStores } from "stores/useStore";
import { formatSpecialties } from "utils/formatSpecialties";
import { formatDate } from "utils/formatDate";

interface IAppointmentDoctorCard {
    displayDetails?: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
    doctorCard: {
        minWidth: 600,
        borderRadius: 8,
        border: `1px solid ${theme.palette.other!.main}`,
        backgroundColor: "#fff",
        marginRight: 72,
        padding: "36px 24px 0",
        [theme.breakpoints.down("md")]: {
            marginRight: 32
        },
        [theme.breakpoints.down("sm")]: {
            minWidth: "unset",
            width: "100%",
            marginRight: 0,
            marginBottom: 32
        }
    },
    doctorCardHeader: {
        display: "flex",
        alignItems: "center",
        paddingBottom: 36,
        [theme.breakpoints.down(360)]: {
            flexDirection: "column",
            alignItems: "unset"
        }
    },
    doctorCost: {
        marginBottom: 24
    },
    doctorAvatar: {
        marginRight: 30,
        width: 162,
        height: 162,
        "& img": {
            display: "block",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "50%",
            objectPosition: "top center"
        },
        [theme.breakpoints.down(360)]: {
            marginRight: 0,
            marginBottom: 12
        }
    },
    doctorCategory: {
        marginBottom: 8
    },
    doctorFullname: {
        marginBottom: 4
    },
    doctorWorkTime: {
        marginBottom: 12
    },
    doctorReviews: {
        color: theme.palette.primary.main,
        "&:hover": {
            textDecoration: "none"
        }
    },
    doctorCardFooter: {
        padding: "16px 0",
        borderTop: `1px solid ${theme.palette.other!.main}`
    },
    doctorCardFooterDetails: {
        paddingTop: 4,
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.down("xs")]: {
            display: "block"
        }
    },
    detailsItem: {
        display: "flex",
        alignItems: "center",
        marginRight: 24,
        "&:last-child": {
            [theme.breakpoints.down("xs")]: {
                marginBottom: 0
            }
        },
        [theme.breakpoints.down("xs")]: {
            marginBottom: 6
        }
    },
    detailsItemSvg: {
        display: "flex",
        marginRight: 8
    }
}));

export const AppointmentDoctorCard: React.FC<IAppointmentDoctorCard> = observer(
    ({ displayDetails = false }) => {
        const classes = useStyles();
        const { appointmentStore } = useStores();
        const { chosenDoctor, appointmentForm } = appointmentStore;

        const specialty =
            chosenDoctor && formatSpecialties(chosenDoctor.specialties);

        if (!chosenDoctor) {
            return null;
        }

        return (
            <div className={classes.doctorCard}>
                <Typography className={classes.doctorCost} variant="h4">
                    К оплате: {chosenDoctor.costOfConsultation} руб.
                </Typography>
                <div className={classes.doctorCardHeader}>
                    <div className={classes.doctorAvatar}>
                        <img
                            src={
                                process.env.REACT_APP_API_BASE_URL +
                                chosenDoctor.photo
                            }
                            alt={`${chosenDoctor.name} аватар`}
                        />
                    </div>
                    <div>
                        <Typography
                            className={classes.doctorCategory}
                            variant="h6"
                            color="textPrimary"
                        >
                            {specialty}
                        </Typography>
                        <Typography className={classes.doctorFullname} variant="h4">
                            {chosenDoctor.surname} {chosenDoctor.name}{" "}
                            {chosenDoctor.middleName}
                        </Typography>
                        <Typography
                            className={classes.doctorWorkTime}
                            variant="h6"
                            color="textSecondary"
                        >
                            Стаж работы: {chosenDoctor.experience}
                        </Typography>
                        <div>
                            <Rating
                                value={chosenDoctor.rating}
                                size="small"
                                readOnly
                            />
                        </div>
                        <Link
                            className={classes.doctorReviews}
                            to={`/doctor/${chosenDoctor.id}`}
                        >
                            {chosenDoctor.countOfReviews} отзывов
                        </Link>
                    </div>
                </div>
                {displayDetails && (
                    <React.Fragment>
                        <div className={classes.doctorCardFooter}>
                            <Typography variant="h6" color="textSecondary">
                                Детали записи:
                            </Typography>
                            <div className={classes.doctorCardFooterDetails}>
                                <div className={classes.detailsItem}>
                                    <span className={classes.detailsItemSvg}>
                                        <CalendarIcon width={18} height={18} />
                                    </span>
                                    <Typography variant="body1">
                                        {formatDate(
                                            appointmentForm.date.toString(),
                                            "d MMMM, EEEE"
                                        )}
                                    </Typography>
                                </div>
                                <div className={classes.detailsItem}>
                                    <span className={classes.detailsItemSvg}>
                                        <ClockIcon />
                                    </span>
                                    <Typography variant="body1">
                                        {appointmentForm.time}
                                    </Typography>
                                </div>
                                <div className={classes.detailsItem}>
                                    <span className={classes.detailsItemSvg}>
                                        <AccountEnvelopeIcon width={18} height={18} />
                                    </span>
                                    <Typography variant="body1">
                                        {appointmentForm.communicationMethod
                                            ? JSON.parse(
                                                  appointmentForm.communicationMethod
                                              ).method
                                            : ""}
                                    </Typography>
                                </div>
                            </div>
                        </div>
                        <div className={classes.doctorCardFooter}>
                            <Typography variant="h6" color="textSecondary">
                                Симптомы:
                            </Typography>
                            <Typography variant="body1">
                                {appointmentForm.symptoms || "Не заполнено"}
                            </Typography>
                        </div>
                    </React.Fragment>
                )}
            </div>
        );
    }
);
