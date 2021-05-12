import React from "react";
import { observer } from "mobx-react";
import { Container, Typography, Hidden, makeStyles, Theme } from "@material-ui/core";

import { Breadcrumbs, Button, Breadcrumb } from "components";
import { Header } from "./Header";

import headerBackground from "images/header/header-background.jpg";
import { useStores } from "stores/useStore";

interface IExtendedHeader {
    title: string;
    breadcrumbs: Breadcrumb[];
    action?: React.ReactNode;
}

const useStyles = makeStyles((theme: Theme) => ({
    header: {
        position: "relative",
        paddingTop: 118,
        background: `url(${headerBackground}) no-repeat bottom right ${theme.palette.background.blue}`,
        backgroundSize: "cover",
        [theme.breakpoints.down("sm")]: {
            paddingTop: 78
        }
    },
    headerContent: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        padding: "8px 0 24px",
        [theme.breakpoints.down("sm")]: {
            padding: "4px 0 12px"
        }
    },
    headerTitle: {
        color: "#fff",
        [theme.breakpoints.down(400)]: {
            fontSize: 20,
            fontWeight: 400
        },
        [theme.breakpoints.down(370)]: {
            marginBottom: 8
        }
    }
}));

export const ExtendedHeader: React.FC<IExtendedHeader> = observer(
    ({ title, breadcrumbs, action }) => {
        const classes = useStyles();
        const { userStore } = useStores();
        const { isAuthorized } = userStore;

        return (
            <header className={classes.header}>
                <Hidden smDown>
                    <Header isAbsolute leftBarIsLight rightBarIsLight />
                </Hidden>
                <Hidden mdUp>
                    <Header />
                </Hidden>
                <Container>
                    <Breadcrumbs
                        items={[{ to: "/", title: "Главная" }, ...breadcrumbs]}
                    />
                    <div className={classes.headerContent}>
                        <Typography className={classes.headerTitle} variant="h1">
                            {title}
                        </Typography>
                        {action}
                        {!isAuthorized && (
                            <Hidden mdUp>
                                <Button
                                    variant="outlined"
                                    color="default"
                                    size="small"
                                    to="/sign-up"
                                >
                                    Регистрация
                                </Button>
                            </Hidden>
                        )}
                    </div>
                </Container>
            </header>
        );
    }
);
