import React from "react";
import { Typography, makeStyles, TypographyProps } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    submissionError: {
        marginBottom: 16,
        fontSize: 14
    }
}));

export const SubmissionError: React.FC<TypographyProps> = ({
    children,
    ...props
}) => {
    const classes = useStyles();

    return (
        <Typography
            className={classes.submissionError}
            variant="h6"
            color="error"
            {...props}
        >
            {children}
        </Typography>
    );
};
