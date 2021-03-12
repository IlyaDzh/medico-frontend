import React from "react";
import { Container, Typography, Hidden, makeStyles, Theme } from "@material-ui/core";

import { Breadcrumbs, Button, SearchInput } from "components";
import { Header } from "./Header";

import headerBackground from "images/header/header-background.jpg";

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
    },
    headerSearchWrapper: {
        maxWidth: 396,
        width: "100%"
    }
}));

export const ExtendedHeader: React.FC = () => {
    const classes = useStyles();

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
                    items={[{ to: "/", title: "Главная" }, { title: "Специалисты" }]}
                />
                <div className={classes.headerContent}>
                    <Typography className={classes.headerTitle} variant="h1">
                        Специалисты
                    </Typography>
                    <Hidden smDown>
                        <div className={classes.headerSearchWrapper}>
                            <SearchInput placeholder="Поиск специалиста" fullWidth />
                        </div>
                    </Hidden>
                    <Hidden mdUp>
                        <Button
                            variant="outlined"
                            color="default"
                            size="small"
                            to="/sign-up"
                        >
                            Бесплатная консультация
                        </Button>
                    </Hidden>
                </div>
            </Container>
        </header>
    );
};
