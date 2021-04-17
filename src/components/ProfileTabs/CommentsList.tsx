import React from "react";
import { observer } from "mobx-react";
import { makeStyles } from "@material-ui/core";

import { Comment } from "./Comment";
import { Button } from "components";
import { Review } from "stores/interfaces/IDoctorStore";
import { useStores } from "stores/useStore";

interface ICommentsList {
    reviews: Review[];
}

const useStyles = makeStyles(() => ({
    commentsList: {
        marginBottom: 36
    }
}));

export const CommentsList: React.FC<ICommentsList> = observer(({ reviews }) => {
    const classes = useStyles();
    const { doctorStore } = useStores();
    const { currentDoctor, pendingProfileReviews, fetchReviews } = doctorStore;

    const handleReviewsMoreClick = (): void => {
        fetchReviews();
    };

    return (
        <React.Fragment>
            <div className={classes.commentsList}>
                {reviews.map(review => (
                    <Comment key={review.id} review={review} />
                ))}
            </div>
            {reviews.length < currentDoctor!.countOfReviews && (
                <Button
                    variant="outlined"
                    onClick={handleReviewsMoreClick}
                    isLoaded={pendingProfileReviews}
                    disabled={pendingProfileReviews}
                >
                    Показать ещё
                </Button>
            )}
        </React.Fragment>
    );
});
