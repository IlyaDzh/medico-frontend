import React from "react";
import {
    Container,
    Typography,
    TextField,
    Hidden,
    makeStyles,
    Theme
} from "@material-ui/core";

import { Breadcrumbs, Button } from "components";
import { Header } from "./Header";

import headerBackground from "images/header/header-background.jpg";

const useStyles = makeStyles((theme: Theme) => ({
    header: {
        position: "relative",
        paddingTop: 120,
        background: `url(${headerBackground}) no-repeat bottom right ${theme.palette.primary.main}`,
        backgroundSize: "cover",
        [theme.breakpoints.down("sm")]: {
            paddingTop: 68
        }
    },
    headerContent: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "8px 0 24px",
        [theme.breakpoints.down("sm")]: {
            padding: "4px 0 12px"
        },
        [theme.breakpoints.down(370)]: {
            display: "block"
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
                <Breadcrumbs />
                <div className={classes.headerContent}>
                    <Typography className={classes.headerTitle} variant="h1">
                        Специалисты
                    </Typography>
                    <Hidden smDown>
                        <TextField
                            variant="outlined"
                            placeholder="Поиск специалиста"
                        />
                    </Hidden>
                    <Hidden mdUp>
                        <Button variant="outlined" color="default" size="small">
                            Бесплатная консультация
                        </Button>
                    </Hidden>
                </div>
            </Container>
        </header>
    );
};
