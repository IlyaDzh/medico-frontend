import React from "react";
import { makeStyles } from "@material-ui/core";

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
                {reviews.map(review => (
                    <Comment key={review.id} review={review} />
                ))}
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
