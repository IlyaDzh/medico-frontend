import React from "react";
import { Link } from "react-router-dom";
import { Paper, Typography, makeStyles, Theme } from "@material-ui/core";

import doctorImage from "images/home/doctor/doctor.jpg";

const useStyles = makeStyles((theme: Theme) => ({
    card: {
        position: "relative",
        "&:hover": {
            boxShadow: "0px 4px 8px rgba(45, 96, 156, 0.2)"
        }
    },
    cardImage: {
        "& img": {
            objectFit: "cover",
            width: "100%",
            height: 235,
            [theme.breakpoints.down("xs")]: {
                height: 130
            }
        },
        "&:after": {
            content: "''",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
        }
    },
    cardContent: {
        padding: "18px 24px 24px"
    },
    doctorName: {
        marginTop: 4,
        marginBottom: 12,
        [theme.breakpoints.down("xs")]: {
            marginBottom: 6
        }
    }
}));

export const DoctorCard: React.FC = () => {
    const classes = useStyles();

    return (
        <Paper className={classes.card} variant="outlined">
            <Link to="/doctor/123" className={classes.cardImage}>
                <img src={doctorImage} alt="Фото Елена Леонидовна Докторова" />
            </Link>
            <div className={classes.cardContent}>
                <Typography variant="h6" color="primary">
                    Терапевт
                </Typography>
                <Typography className={classes.doctorName} variant="h4">
                    Елена Леонидовна Докторова
                </Typography>
                <Typography variant="h6" color="textSecondary">
                    Опыт работы: 12 лет
                </Typography>
            </div>
        </Paper>
    );
};
