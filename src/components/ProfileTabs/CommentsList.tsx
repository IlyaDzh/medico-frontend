import React from "react";
import { makeStyles } from "@material-ui/core";

import { Comment } from "./Comment";
// import { Button } from "components";
import { Review } from "stores/interfaces/IDoctorStore";

interface ICommentsList {
    reviews: Review[];
}

const useStyles = makeStyles(() => ({
    commentsList: {
        marginBottom: 36
    }
}));

export const CommentsList: React.FC<ICommentsList> = ({ reviews }) => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <div className={classes.commentsList}>
                {reviews.map(review => (
                    <Comment key={review.id} review={review} />
                ))}
            </div>
            {/* <Button variant="outlined">Показать ещё</Button> */}
        </React.Fragment>
    );
};
