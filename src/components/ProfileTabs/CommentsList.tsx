import React from "react";
import { Typography, makeStyles } from "@material-ui/core";

import { Comment } from "./Comment";
import { Button } from "components";
import { Review } from "stores/interfaces/IDoctorStore";

interface ICommentsList {
    reviews: Review[];
    count: number;
    pending: boolean;
    onMore: () => void;
}

const useStyles = makeStyles(() => ({
    commentsList: {
        marginBottom: 36
    }
}));

export const CommentsList: React.FC<ICommentsList> = ({
    reviews,
    count,
    pending,
    onMore
}) => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <div className={classes.commentsList}>
                {reviews.length > 0 ? (
                    reviews.map(review => (
                        <Comment key={review.id} review={review} />
                    ))
                ) : (
                    <Typography variant="body1">Комментариев ещё нет</Typography>
                )}
            </div>
            {reviews.length < count && (
                <Button
                    variant="outlined"
                    onClick={onMore}
                    isLoaded={pending}
                    disabled={pending}
                >
                    Показать ещё
                </Button>
            )}
        </React.Fragment>
    );
};
