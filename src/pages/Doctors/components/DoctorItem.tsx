import React from "react";
import { Typography, Hidden, makeStyles, Theme } from "@material-ui/core";
import { Rating } from "@material-ui/lab";

import { Button } from "components";
import { ArrowRightIcon } from "icons";

interface IDoctorItem {
    doctor: {
        id: string;
        category: string;
        time: string;
        fullName: string;
        image: string;
        rating: number;
        description: string;
        jobTime: string;
    };
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
        "& img": {
            display: "block",
            objectFit: "cover",
            maxHeight: 346,
            height: "100%",
            width: "100%"
        },
        [theme.breakpoints.down("xs")]: {
            marginRight: 18,
            minWidth: 106
        },
        [theme.breakpoints.down(375)]: {
            marginRight: 0,
            marginBottom: 12
        }
    },
    doctorInfo: {
        maxWidth: 624
    },
    doctorCategory: {
        marginBottom: 6
    },
    doctorAbout: {
        marginBottom: 12
    },
    doctorJobTime: {
        marginBottom: 20,
        [theme.breakpoints.down("xs")]: {
            marginBottom: 0
        }
    }
}));

export const DoctorItem: React.FC<IDoctorItem> = ({ doctor }) => {
    const classes = useStyles();

    return (
        <section className={classes.doctor}>
            <Hidden smUp>
                <div>
                    <Typography
                        className={classes.doctorCategory}
                        variant="body2"
                        color="textPrimary"
                    >
                        {doctor.category}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        {doctor.time}
                    </Typography>
                </div>
            </Hidden>
            <div className={classes.doctorInner}>
                <div className={classes.doctorImage}>
                    <img src={doctor.image} alt="" />
                </div>
                <div className={classes.doctorInfo}>
                    <Hidden xsDown>
                        <Typography variant="body2" color="textPrimary">
                            {doctor.category}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            {doctor.time}
                        </Typography>
                    </Hidden>
                    <Typography variant="h3">{doctor.fullName}</Typography>
                    <div>
                        <Rating value={doctor.rating} size="small" readOnly />
                    </div>
                    <Typography
                        className={classes.doctorAbout}
                        color="textSecondary"
                    >
                        {doctor.description}
                    </Typography>
                    <Typography
                        className={classes.doctorJobTime}
                        variant="h5"
                        color="textSecondary"
                    >
                        Стаж работы: {doctor.jobTime}
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
