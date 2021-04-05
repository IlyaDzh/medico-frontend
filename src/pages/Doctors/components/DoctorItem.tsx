import React from "react";
import { Typography, Hidden, makeStyles, Theme } from "@material-ui/core";
import { Rating } from "@material-ui/lab";

import { Button } from "components";
import { ArrowRightIcon } from "icons";
import { IDoctor } from "stores/interfaces/IDoctorStore";

interface IDoctorItem {
    doctor: IDoctor;
}

const useStyles = makeStyles((theme: Theme) => ({
    doctor: {
        display: "flex",
        marginBottom: 80,
        [theme.breakpoints.down("xs")]: {
            marginBottom: 36,
            flexDirection: "column"
        }
    },
    doctorInner: {
        display: "flex",
        [theme.breakpoints.down("xs")]: {
            margin: "8px 0 24px"
        },
        [theme.breakpoints.down(375)]: {
            display: "block"
        }
    },
    doctorImage: {
        marginRight: 48,
        borderRadius: 8,
        overflow: "hidden",
        maxHeight: 346,
        maxWidth: 279,
        "& img": {
            display: "block",
            objectFit: "cover",
            width: "100%",
            height: "100%"
        },
        [theme.breakpoints.down("xs")]: {
            marginRight: 18,
            minWidth: 106
        },
        [theme.breakpoints.down(375)]: {
            marginRight: 0,
            marginBottom: 12,
            maxWidth: "unset"
        }
    },
    doctorInfo: {
        maxWidth: 624,
        [theme.breakpoints.down("xs")]: {
            width: "100%"
        }
    },
    doctorCategory: {
        marginBottom: 6
    },
    doctorAbout: {
        marginBottom: 12
    },
    doctorExperience: {
        marginBottom: 12,
        [theme.breakpoints.down("xs")]: {
            marginBottom: 4
        }
    },
    doctorCost: {
        marginBottom: 20,
        [theme.breakpoints.down("xs")]: {
            marginBottom: 0
        }
    }
}));

export const DoctorItem: React.FC<IDoctorItem> = ({ doctor }) => {
    const classes = useStyles();

    const specialty =
        doctor &&
        doctor.specialties
            .map((item, index) =>
                index < doctor.specialties.length - 1 ? `${item.name}, ` : item.name
            )
            .join("");

    return (
        <section className={classes.doctor}>
            <Hidden smUp>
                <div>
                    <Typography
                        className={classes.doctorCategory}
                        variant="body2"
                        color="textPrimary"
                    >
                        {specialty}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        {doctor.workTime}
                    </Typography>
                </div>
            </Hidden>
            <div className={classes.doctorInner}>
                <div className={classes.doctorImage}>
                    <img
                        src={process.env.REACT_APP_API_BASE_URL + doctor.photo}
                        alt={`Фото ${doctor.surname} ${doctor.name}`}
                    />
                </div>
                <div className={classes.doctorInfo}>
                    <Hidden xsDown>
                        <Typography variant="body2" color="textPrimary">
                            {specialty}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            {doctor.workTime}
                        </Typography>
                    </Hidden>
                    <Typography variant="h3">
                        {doctor.surname} {doctor.name} {doctor.middleName}
                    </Typography>
                    <div>
                        <Rating value={doctor.rating} size="small" readOnly />
                    </div>
                    <Typography
                        className={classes.doctorAbout}
                        color="textSecondary"
                    >
                        {doctor.about}
                    </Typography>
                    <Typography
                        className={classes.doctorExperience}
                        variant="h5"
                        color="textSecondary"
                    >
                        Стаж работы: {doctor.experience}
                    </Typography>
                    <Typography
                        className={classes.doctorCost}
                        variant="h3"
                        color="textSecondary"
                    >
                        {doctor.costOfConsultation} руб.
                    </Typography>
                    <Hidden xsDown>
                        <Button
                            variant="contained"
                            size="large"
                            to={`/doctor/${doctor.id}`}
                            icon={<ArrowRightIcon color="#fff" />}
                        >
                            Записаться на приём
                        </Button>
                    </Hidden>
                </div>
            </div>
            <Hidden smUp>
                <div>
                    <Button
                        variant="contained"
                        size="large"
                        to={`/doctor/${doctor.id}`}
                        icon={<ArrowRightIcon color="#fff" />}
                    >
                        Записаться на приём
                    </Button>
                </div>
            </Hidden>
        </section>
    );
};
