import React from "react";
import { Typography, makeStyles, Theme } from "@material-ui/core";

import { InfoIcon } from "icons";

interface IFormWrapper {
    title: string;
    subtitle: string;
    onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        padding: "48px 24px",
        [theme.breakpoints.down("xs")]: {
            padding: "24px 12px"
        }
    },
    form: {
        padding: "56px 48px",
        maxWidth: 1000,
        margin: "0 auto",
        background: "#fff",
        border: `1px solid ${theme.palette.other!.main}`,
        borderRadius: 16,
        [theme.breakpoints.down("sm")]: {
            padding: "28px 24px"
        }
    },
    formHeader: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 36,
        [theme.breakpoints.down("xs")]: {
            display: "block"
        }
    },
    subtitle: {
        display: "flex",
        maxWidth: 366,
        [theme.breakpoints.down("xs")]: {
            paddingTop: 18
        }
    },
    subtitleIcon: {
        paddingTop: 2,
        marginRight: 12
    }
}));

export const FormWrapper: React.FC<IFormWrapper> = ({
    title,
    subtitle,
    onSubmit,
    children
}) => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.form}>
                <div className={classes.formHeader}>
                    <Typography variant="h2">{title}</Typography>
                    <div className={classes.subtitle}>
                        <span className={classes.subtitleIcon}>
                            <InfoIcon />
                        </span>
                        <Typography variant="h6" color="textSecondary">
                            {subtitle}
                        </Typography>
                    </div>
                </div>
                <form onSubmit={onSubmit}>{children}</form>
            </div>
        </div>
    );
};
