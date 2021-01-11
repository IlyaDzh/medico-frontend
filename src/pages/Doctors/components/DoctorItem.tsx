import React from "react";
import { Typography, makeStyles, Theme } from "@material-ui/core";
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
            marginBottom: 36
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
            width: "100%",
            [theme.breakpoints.down("xs")]: {
                maxHeight: 176
            }
        },
        [theme.breakpoints.down("xs")]: {
            marginRight: 18,
            minWidth: 106
        }
    },
    doctorInfo: {
        maxWidth: 624
    },
    doctorAbout: {
        marginBottom: 12
    },
    doctorJobTime: {
        marginBottom: 20
    }
}));

export const DoctorItem: React.FC<IDoctorItem> = ({ doctor }) => {
    const classes = useStyles();

    return (
        <section className={classes.doctor}>
            <div className={classes.doctorImage}>
                <img src={doctor.image} alt="" />
            </div>
            <div className={classes.doctorInfo}>
                <Typography variant="body2" color="textPrimary">
                    {doctor.category}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    {doctor.time}
                </Typography>
                <Typography variant="h3">{doctor.fullName}</Typography>
                <div>
                    <Rating value={doctor.rating} size="small" readOnly />
                </div>
                <Typography className={classes.doctorAbout} color="textSecondary">
                    {doctor.description}
                </Typography>
                <Typography
                    className={classes.doctorJobTime}
                    variant="h5"
                    color="textSecondary"
                >
                    Стаж работы: {doctor.jobTime}
                </Typography>
                <Button
                    variant="contained"
                    size="large"
                    to={`/doctor/${doctor.id}`}
                    icon={<ArrowRightIcon color="#fff" />}
                >
                    Записаться на приём
                </Button>
            </div>
        </section>
    );
};
