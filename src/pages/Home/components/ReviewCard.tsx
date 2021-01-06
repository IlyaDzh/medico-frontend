import React from "react";
import { Paper, Typography, makeStyles, Theme } from "@material-ui/core";
import { Rating } from "@material-ui/lab";

import doctorImage from "images/home/doctor/doctor.jpg";

const useStyles = makeStyles((theme: Theme) => ({
    card: {
        position: "relative",
        padding: "36px 32px",
        maxWidth: 437,
        userSelect: "text"
    },
    cardHeader: {
        display: "flex",
        marginBottom: 8
    },
    reviewerImage: {
        marginRight: 24,
        "& img": {
            objectFit: "cover",
            width: 64,
            height: 64,
            borderRadius: "50%"
        }
    },
    reviewerSocial: {
        display: "block",
        fontSize: 14,
        lineHeight: "18px",
        color: theme.palette.primary.dark,
        marginBottom: 2,
        "&:hover": {
            textDecoration: "none"
        }
    }
}));

export const ReviewCard: React.FC = () => {
    const classes = useStyles();

    return (
        <Paper component="article" className={classes.card} variant="outlined">
            <div className={classes.cardHeader}>
                <div className={classes.reviewerImage}>
                    <img src={doctorImage} alt="Фото Имя Фамилия" />
                </div>
                <div>
                    <Typography variant="h4">Имя Фамилия</Typography>
                    <a
                        className={classes.reviewerSocial}
                        href="https://vk.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        ВКонтакте
                    </a>
                    <div>
                        <Rating value={4} size="small" readOnly />
                    </div>
                </div>
            </div>
            <Typography variant="body1">
                Таким образом реализация намеченных плановых заданий обеспечивает
                широкому кругу (специалистов) участие в формировании существенных
                финансовых и административных условий.
            </Typography>
        </Paper>
    );
};
