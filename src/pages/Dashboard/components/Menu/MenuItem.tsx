import React from "react";
import { Typography, makeStyles, Theme } from "@material-ui/core";
import { Link } from "react-router-dom";

interface IMenuItem {
    icon?: React.ReactNode;
    label: string;
}

const useStyles = makeStyles((theme: Theme) => ({
    menuItem: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        height: 130,
        textDecoration: "none",
        "&:hover": {
            backgroundColor: theme.palette.primary.main,
            color: "#f6f9fc",
            "& svg path": {
                fill: "#f6f9fc"
            }
        }
    }
}));

export const MenuItem: React.FC<IMenuItem> = ({ icon, label }) => {
    const classes = useStyles();

    return (
        <Link to="/dashboard/main" className={classes.menuItem}>
            {icon}
            <Typography variant="h6" color="textSecondary">
                {label}
            </Typography>
        </Link>
    );
};
