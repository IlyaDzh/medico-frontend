import React from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";
import { Typography, makeStyles, Theme } from "@material-ui/core";
import { Rating } from "@material-ui/lab";

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
                            alt={`Фото ${chosenDoctor.surname} ${chosenDoctor.name}`}
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
                                    <svg
                                        className={classes.detailsItemSvg}
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18 18"
                                        fill="none"
                                    >
                                        <path
                                            d="M15.75 6.375V13.3125C15.75 14.6587 14.6587 15.75 13.3125 15.75H4.6875C3.34131 15.75 2.25 14.6587 2.25 13.3125V6.375H15.75ZM5.4375 11.25C4.91973 11.25 4.5 11.6697 4.5 12.1875C4.5 12.7053 4.91973 13.125 5.4375 13.125C5.95527 13.125 6.375 12.7053 6.375 12.1875C6.375 11.6697 5.95527 11.25 5.4375 11.25ZM9 11.25C8.48223 11.25 8.0625 11.6697 8.0625 12.1875C8.0625 12.7053 8.48223 13.125 9 13.125C9.51777 13.125 9.9375 12.7053 9.9375 12.1875C9.9375 11.6697 9.51777 11.25 9 11.25ZM5.4375 7.875C4.91973 7.875 4.5 8.29473 4.5 8.8125C4.5 9.33027 4.91973 9.75 5.4375 9.75C5.95527 9.75 6.375 9.33027 6.375 8.8125C6.375 8.29473 5.95527 7.875 5.4375 7.875ZM9 7.875C8.48223 7.875 8.0625 8.29473 8.0625 8.8125C8.0625 9.33027 8.48223 9.75 9 9.75C9.51777 9.75 9.9375 9.33027 9.9375 8.8125C9.9375 8.29473 9.51777 7.875 9 7.875ZM12.5625 7.875C12.0447 7.875 11.625 8.29473 11.625 8.8125C11.625 9.33027 12.0447 9.75 12.5625 9.75C13.0803 9.75 13.5 9.33027 13.5 8.8125C13.5 8.29473 13.0803 7.875 12.5625 7.875ZM13.3125 2.25C14.6587 2.25 15.75 3.34131 15.75 4.6875V5.25H2.25V4.6875C2.25 3.34131 3.34131 2.25 4.6875 2.25H13.3125Z"
                                            fill="#5a5f6f"
                                        />
                                    </svg>
                                    <Typography variant="body1">
                                        {formatDate(
                                            appointmentForm.date.toString(),
                                            "d MMMM, EEEE"
                                        )}
                                    </Typography>
                                </div>
                                <div className={classes.detailsItem}>
                                    <svg
                                        className={classes.detailsItemSvg}
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18 18"
                                        fill="none"
                                    >
                                        <path
                                            d="M11.4375 10.125H8.4375C8.127 10.125 7.875 9.873 7.875 9.5625V5.0625C7.875 4.752 8.127 4.5 8.4375 4.5C8.748 4.5 9 4.752 9 5.0625V9H11.4375C11.748 9 12 9.252 12 9.5625C12 9.873 11.748 10.125 11.4375 10.125ZM9 1.5C4.8585 1.5 1.5 4.8585 1.5 9C1.5 13.1415 4.8585 16.5 9 16.5C13.1415 16.5 16.5 13.1415 16.5 9C16.5 4.8585 13.1415 1.5 9 1.5Z"
                                            fill="#5a5f6f"
                                        />
                                    </svg>
                                    <Typography variant="body1">
                                        {appointmentForm.time}
                                    </Typography>
                                </div>
                                <div className={classes.detailsItem}>
                                    <svg
                                        className={classes.detailsItemSvg}
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18 18"
                                        fill="none"
                                    >
                                        <path
                                            d="M16.5 6.456V12.5625C16.5 13.8623 15.4827 14.9244 14.2008 14.9961L14.0625 15H3.9375C2.63773 15 1.57557 13.9827 1.50386 12.7008L1.5 12.5625V6.456L8.739 10.2483C8.90246 10.3339 9.09754 10.3339 9.261 10.2483L16.5 6.456ZM3.9375 3H14.0625C15.3261 3 16.3651 3.96143 16.4879 5.19266L9 9.115L1.51214 5.19266C1.6304 4.00704 2.59824 3.07159 3.79806 3.00392L3.9375 3H14.0625H3.9375Z"
                                            fill="#5a5f6f"
                                        />
                                    </svg>
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
