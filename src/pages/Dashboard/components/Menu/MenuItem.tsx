import React from "react";
import { NavLink } from "react-router-dom";
import { Typography, makeStyles, Theme } from "@material-ui/core";

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
        "&:hover:not($menuItemActive)": {
            backgroundColor: "#f6f9fc"
        }
    },
    menuItemActive: {
        backgroundColor: theme.palette.primary.main,
        "& h6": {
            color: "#f6f9fc"
        },
        "& svg path, & svg rect": {
            fill: "#f6f9fc"
        }
    },
    icon: {
        marginBottom: 4
    }
}));

export const MenuItem: React.FC<IMenuItem> = ({ icon, label, to }) => {
    const classes = useStyles();

    return (
        <NavLink
            activeClassName={classes.menuItemActive}
            to={to}
            className={classes.menuItem}
        >
            <span className={classes.icon}>{icon}</span>
            <Typography variant="h6" color="textSecondary">
                {label}
            </Typography>
        </NavLink>
    );
};
