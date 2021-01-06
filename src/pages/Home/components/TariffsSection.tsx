import React from "react";
import { Container, Typography, makeStyles, Theme } from "@material-ui/core";

import { TariffCard } from "./TariffCard";
import { InfoIcon } from "icons";

const useStyles = makeStyles((theme: Theme) => ({
    tariffsSection: {
        paddingBottom: 120,
        [theme.breakpoints.down("xs")]: {
            paddingBottom: 53
        }
    },
    sectionTitle: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: 45,
        [theme.breakpoints.down(800)]: {
            display: "block"
        },
        [theme.breakpoints.down("xs")]: {
            marginBottom: 29
        }
    },
    sectionTitleText: {
        [theme.breakpoints.down(800)]: {
            textAlign: "center",
            marginBottom: 20
        }
    },
    sectionSubtitle: {
        display: "flex",
        maxWidth: 370,
        [theme.breakpoints.down(800)]: {
            maxWidth: "unset"
        }
    },
    sectionSubtitleIcon: {
        paddingTop: 2,
        marginRight: 12
    }
}));

export const TariffsSection: React.FC = () => {
    const classes = useStyles();

    return (
        <section className={classes.tariffsSection}>
            <Container>
                <div className={classes.sectionTitle}>
                    <Typography className={classes.sectionTitleText} variant="h2">
                        Тарифы и стоимость
                    </Typography>
                    <div className={classes.sectionSubtitle}>
                        <span className={classes.sectionSubtitleIcon}>
                            <InfoIcon />
                        </span>
                        <Typography variant="body2" color="textSecondary">
                            Воспользуйтесь пробной бесплатной консультацией
                        </Typography>
                    </div>
                </div>
                <div>
                    <TariffCard />
                </div>
            </Container>
        </section>
    );
};
