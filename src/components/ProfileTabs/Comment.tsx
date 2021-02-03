import React from "react";
import { Typography, makeStyles, Theme } from "@material-ui/core";
import { Rating } from "@material-ui/lab";

import { Avatar } from "components";

export interface IComment {
    id: string;
    fullname: string;
    rating: number;
    text: string;
    date: string;
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

export const Comment: React.FC<IComment> = ({ fullname, rating, text, date }) => {
    const classes = useStyles();

    return (
        <div className={classes.comment}>
            <div className={classes.commentHeader}>
                <div className={classes.commentOwner}>
                    <Avatar size="elg" alt={fullname} src={undefined} />
                    <div className={classes.ownerInfo}>
                        <Typography
                            className={classes.ownerInfoFullname}
                            variant="h4"
                        >
                            {fullname}
                        </Typography>
                        <Rating value={rating} size="small" readOnly />
                    </div>
                </div>
                <Typography color="textSecondary" variant="h6">
                    {date}
                </Typography>
            </div>
            <Typography variant="body1">{text}</Typography>
        </div>
    );
};
