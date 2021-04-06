import React from "react";
import { Typography, makeStyles, Theme } from "@material-ui/core";
import { Link } from "react-router-dom";

interface IMenuItem {
    icon: React.ReactNode;
    label: string;
    to: string;
}

const useStyles = makeStyles((theme: Theme) => ({
    menuItem: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        height: 130,
        textDecoration: "none",
        color: theme.palette.text.secondary,
        "&:hover": {
            backgroundColor: theme.palette.primary.main,
            "& h6": {
                color: "#f6f9fc"
            },
            "& svg path, & svg rect": {
                fill: "#f6f9fc"
            }
        }
    },
    icon: {
        marginBottom: 4
    }
}));

export const MenuItem: React.FC<IMenuItem> = ({ icon, label, to }) => {
    const classes = useStyles();

    return (
        <Link to={to} className={classes.menuItem}>
            <span className={classes.icon}>{icon}</span>
            <Typography variant="h6" color="textSecondary">
                {label}
            </Typography>
        </Link>
    );
};
