import React from "react";
import { Link } from "react-router-dom";
import {
    Breadcrumbs as BaseBreadcrumbs,
    Typography,
    makeStyles,
    Theme
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
    breadcrumbsItem: {
        color: "#fff",
        fontSize: "14px",
        "&:hover": {
            textDecoration: "none"
        }
    }
}));

export const Breadcrumbs: React.FC = () => {
    const classes = useStyles();

    return (
        <BaseBreadcrumbs
            component="div"
            classes={{ separator: classes.breadcrumbsItem }}
            aria-label="breadcrumb"
        >
            <Link className={classes.breadcrumbsItem} to="/">
                Главная
            </Link>
            <Typography className={classes.breadcrumbsItem}>Специалисты</Typography>
        </BaseBreadcrumbs>
    );
};
