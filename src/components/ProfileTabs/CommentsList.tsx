import React from "react";
import { makeStyles } from "@material-ui/core";

import { Comment, IComment } from "./Comment";
import { Button } from "components";

interface ICommentsList {
    comments: IComment[];
}

const useStyles = makeStyles(() => ({
    commentsList: {
        marginBottom: 36
    }
}));

export const CommentsList: React.FC<ICommentsList> = ({ comments }) => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <div className={classes.commentsList}>
                {comments.map(comment => (
                    <Comment key={comment.id} {...comment} />
                ))}
            </div>
            <Button variant="outlined">Показать ещё</Button>
        </React.Fragment>
    );
};
