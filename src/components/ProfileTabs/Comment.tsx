import React from "react";
import { Typography, makeStyles, Theme } from "@material-ui/core";
import { Rating } from "@material-ui/lab";

import { Avatar } from "components";
import { formatDate } from "utils/formatDate";
import { Review } from "stores/interfaces/IDoctorStore";

interface IComment {
    review: Review;
}

const useStyles = makeStyles((theme: Theme) => ({
    comment: {
        padding: 32,
        border: `1px solid ${theme.palette.other!.main}`,
        background: "#fff",
        borderRadius: 8,
        marginBottom: 8,
        maxWidth: 908,
        [theme.breakpoints.down("sm")]: {
            padding: 24
        },
        [theme.breakpoints.down("xs")]: {
            padding: 16
        }
    },
    commentHeader: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: 16,
        [theme.breakpoints.down("xs")]: {
            marginBottom: 8
        }
    },
    commentOwner: {
        display: "flex",
        alignItems: "center"
    },
    ownerInfo: {
        marginLeft: 24,
        [theme.breakpoints.down("xs")]: {
            marginLeft: 12
        }
    },
    ownerInfoFullname: {
        marginBottom: 4
    }
}));

export const Comment: React.FC<IComment> = ({ review }) => {
    const classes = useStyles();

    return (
        <div className={classes.comment}>
            <div className={classes.commentHeader}>
                <div className={classes.commentOwner}>
                    <Avatar
                        size={58}
                        alt={`Фото ${review.name} ${review.surname}`}
                        src={
                            review.avatar
                                ? process.env.REACT_APP_API_BASE_URL + review.avatar
                                : undefined
                        }
                    />
                    <div className={classes.ownerInfo}>
                        <Typography
                            className={classes.ownerInfoFullname}
                            variant="h4"
                        >
                            {review.name} {review.surname}
                        </Typography>
                        <Rating value={review.estimation} size="small" readOnly />
                    </div>
                </div>
                <Typography color="textSecondary" variant="h6">
                    {formatDate(review.createdAt, "dd MMMM yyyy")}
                </Typography>
            </div>
            <Typography variant="body1">{review.text}</Typography>
        </div>
    );
};
