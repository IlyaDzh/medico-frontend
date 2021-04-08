import React from "react";
import { Link } from "react-router-dom";
import { Paper, Typography, makeStyles, Theme } from "@material-ui/core";

import { HomeDoctor } from "stores/interfaces/IHomeStore";

interface IDoctorCard {
    doctor: HomeDoctor;
}

const useStyles = makeStyles((theme: Theme) => ({
    card: {
        position: "relative",
        "&:hover": {
            boxShadow: "0px 4px 8px rgba(45, 96, 156, 0.2)"
        }
    },
    cardInner: {
        textDecoration: "none"
    },
    cardImage: {
        "& img": {
            objectFit: "cover",
            objectPosition: "top",
            width: "100%",
            height: 235,
            [theme.breakpoints.down("xs")]: {
                height: 130
            }
        }
    },
    cardContent: {
        padding: "18px 24px 24px"
    },
    doctorSpecialties: {
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        overflow: "hidden"
    },
    doctorName: {
        marginTop: 4,
        marginBottom: 12,
        [theme.breakpoints.down("xs")]: {
            marginBottom: 6
        }
    }
}));

export const DoctorCard: React.FC<IDoctorCard> = ({ doctor }) => {
    const classes = useStyles();

    const specialty = doctor.specialties
        .map((item, index) =>
            index < doctor.specialties.length - 1 ? `${item.name}, ` : item.name
        )
        .join("");

    return (
        <Paper component="article" className={classes.card} variant="outlined">
            <Link to={`/doctor/${doctor.id}`} className={classes.cardInner}>
                <div className={classes.cardImage}>
                    <img
                        src={process.env.REACT_APP_API_BASE_URL + doctor.photo}
                        alt="Фото Елена Леонидовна Докторова"
                    />
                </div>
                <div className={classes.cardContent}>
                    <Typography
                        className={classes.doctorSpecialties}
                        variant="h6"
                        color="textPrimary"
                    >
                        {specialty}
                    </Typography>
                    <Typography className={classes.doctorName} variant="h4">
                        {doctor.surname} {doctor.name} {doctor.middleName}
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                        Опыт работы: {doctor.experience}
                    </Typography>
                </div>
            </Link>
        </Paper>
    );
};
