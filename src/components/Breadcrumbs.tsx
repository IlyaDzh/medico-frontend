import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import {
    Breadcrumbs as BaseBreadcrumbs,
    Typography,
    makeStyles,
    Theme
} from "@material-ui/core";

interface IBreadcrumbs {
    items: TBreadcrumb[];
    itemClassName?: string;
}

type TBreadcrumb = {
    to?: string;
    title: string;
};

const useStyles = makeStyles((theme: Theme) => ({
    breadcrumbsItem: {
        color: "#fff",
        fontSize: "14px",
        "&:hover": {
            textDecoration: "none"
        }
    }
}));

export const Breadcrumbs: React.FC<IBreadcrumbs> = ({ items, itemClassName }) => {
    const classes = useStyles();

    return (
        <BaseBreadcrumbs
            component="div"
            classes={{ separator: clsx(classes.breadcrumbsItem, itemClassName) }}
            aria-label="breadcrumbs"
        >
            {items.map(item =>
                item.to ? (
                    <Link
                        key={item.to}
                        className={clsx(classes.breadcrumbsItem, itemClassName)}
                        to={item.to}
                    >
                        {item.title}
                    </Link>
                ) : (
                    <Typography
                        key={item.title}
                        className={clsx(classes.breadcrumbsItem, itemClassName)}
                    >
                        {item.title}
                    </Typography>
                )
            )}
        </BaseBreadcrumbs>
    );
};
