import React from "react";
import { Container, Grid, Typography, makeStyles, Theme } from "@material-ui/core";

import { TariffCard } from "./TariffCard";
import { InfoIcon } from "icons";

const useStyles = makeStyles((theme: Theme) => ({
    tariffsSection: {
        paddingBottom: 120,
        [theme.breakpoints.down("md")]: {
            paddingBottom: 60
        },
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
                <Grid container spacing={4}>
                    <Grid item md={4} sm={6} xs={12}>
                        <TariffCard
                            tariffName="Пробная консультация"
                            price="Бесплатно"
                            receptions="1 приём"
                            descriptionList={[
                                "15 минут",
                                "Подбор врача",
                                "Чат",
                                "Возрастные ограничения 16+"
                            ]}
                        />
                    </Grid>
                    <Grid item md={4} sm={6} xs={12}>
                        <TariffCard
                            tariffName="Разовый приём"
                            price="1000 ₽"
                            receptions="1 приём"
                            descriptionList={[
                                "25 минут",
                                "Подбор врача",
                                "Чат, видео/аудиозвонок",
                                "Возрастные ограничения 16+"
                            ]}
                        />
                    </Grid>
                    <Grid item md={4} sm={12} xs={12}>
                        <TariffCard
                            tariffName="Индивидуальный"
                            price="8000 ₽"
                            receptions="8 приёмов/месяц"
                            descriptionList={[
                                "25 минут/приём",
                                "Подбор врача",
                                "Чат",
                                "Возрастные ограничения 16+"
                            ]}
                        />
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
};
