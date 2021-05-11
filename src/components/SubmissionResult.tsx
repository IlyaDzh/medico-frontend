import React from "react";
import clsx from "clsx";
import { Typography, makeStyles, TypographyProps } from "@material-ui/core";

interface ISubmissionResult {
    isError?: boolean;
}

const useStyles = makeStyles(() => ({
    submissionResult: {
        marginBottom: 16,
        fontSize: 14
    },
    error: {
        color: "#e34242"
    },
    success: {
        color: "#2ab841"
    }
}));

export const SubmissionResult: React.FC<ISubmissionResult & TypographyProps> = ({
    isError,
    children,
    ...props
}) => {
    const classes = useStyles();

    if (!children) {
        return null;
    }

    return (
        <Typography
            className={clsx(
                classes.submissionResult,
                isError ? classes.error : classes.success
            )}
            variant="h6"
            {...props}
        >
            {children}
        </Typography>
    );
};
