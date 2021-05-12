import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import {
    Breadcrumbs as BaseBreadcrumbs,
    Typography,
    makeStyles
} from "@material-ui/core";

interface IBreadcrumbs {
    items: Breadcrumb[];
    itemClassName?: string;
}

export type Breadcrumb = {
    to?: string;
    title: string;
};

const useStyles = makeStyles(() => ({
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
            component="nav"
            classes={{ separator: clsx(classes.breadcrumbsItem, itemClassName) }}
            aria-label="Breadcrumbs"
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
