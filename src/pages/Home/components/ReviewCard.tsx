import React from "react";
import { Paper, Typography, makeStyles, Theme } from "@material-ui/core";
import { Rating } from "@material-ui/lab";

import doctorImage from "images/home/doctor/doctor.jpg";

interface IReviewCard {
    fullname: string;
    image: string;
    rating: number;
    text: string;
}

const useStyles = makeStyles((theme: Theme) => ({
    card: {
        position: "relative",
        padding: "36px 32px",
        userSelect: "text",
        [theme.breakpoints.down("xs")]: {
            padding: "32px 24px"
        }
    },
    cardHeader: {
        display: "flex",
        alignItems: "center",
        marginBottom: 8
    },
    reviewerImage: {
        marginRight: 24,
        "& img": {
            objectFit: "cover",
            width: 64,
            height: 64,
            borderRadius: "50%"
        },
        [theme.breakpoints.down("xs")]: {
            marginRight: 12
        }
    }
}));

export const ReviewCard: React.FC<IReviewCard> = ({
    fullname,
    image,
    rating,
    text
}) => {
    const classes = useStyles();

    return (
        <Paper component="article" className={classes.card} variant="outlined">
            <div className={classes.cardHeader}>
                <div className={classes.reviewerImage}>
                    <img src={doctorImage} alt={`Фото ${fullname}`} />
                </div>
                <div>
                    <Typography variant="h4">{fullname}</Typography>
                    <div>
                        <Rating value={rating} size="small" readOnly />
                    </div>
                </div>
            </div>
            <Typography variant="body1">{text}</Typography>
        </Paper>
    );
};
