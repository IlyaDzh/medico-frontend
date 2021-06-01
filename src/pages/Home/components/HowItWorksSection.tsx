import React from "react";
import { Container, Typography, makeStyles, Theme } from "@material-ui/core";

import stage1 from "images/home/stages/stage-1.svg";
import stage2 from "images/home/stages/stage-2.svg";
import stage3 from "images/home/stages/stage-3.svg";
import stage4 from "images/home/stages/stage-4.svg";
import stageArrow from "images/home/stages/stage-arrow.svg";

const useStyles = makeStyles((theme: Theme) => ({
    howItWorksSection: {
        paddingTop: 124,
        paddingBottom: 120,
        backgroundColor: "#fff",
        [theme.breakpoints.down("xs")]: {
            paddingTop: 57,
            paddingBottom: 73
        }
    },
    stagesList: {
        display: "flex",
        flexWrap: "wrap",
        counterReset: "my-counter"
    },
    stage: {
        width: "25%",
        paddingRight: 24,
        [theme.breakpoints.down("sm")]: {
            width: "50%",
            marginBottom: 31,
            "&:before": {
                position: "absolute",
                content: '"0" counter(my-counter)',
                counterIncrement: "my-counter",
                fontSize: 14,
                color: theme.palette.primary.main
            }
        },
        [theme.breakpoints.down(400)]: {
            position: "relative",
            textAlign: "center",
            width: "100%",
            paddingRight: 0,
            "&:before": {
                left: 0
            }
        }
    },
    stageImage: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        "& > img": {
            [theme.breakpoints.down("xs")]: {
                width: 43
            }
        },
        [theme.breakpoints.down("sm")]: {
            paddingLeft: 46
        },
        [theme.breakpoints.down(400)]: {
            justifyContent: "center",
            paddingLeft: 0
        }
    },
    stageArrow: {
        [theme.breakpoints.down(1200)]: {
            display: "none"
        }
    },
    stageTitle: {
        marginTop: 12,
        marginBottom: 8
    }
}));

export const HowItWorksSection: React.FC = () => {
    const classes = useStyles();

    return (
        <section id="how-it-works" className={classes.howItWorksSection}>
            <Container>
                <h2 className="visually-hidden">Как это работает</h2>
                <ol className={classes.stagesList}>
                    <li className={classes.stage}>
                        <div className={classes.stageImage}>
                            <img src={stage1} alt="Регистрация" />
                            <div className={classes.stageArrow}>
                                <img src={stageArrow} alt="" />
                            </div>
                        </div>
                        <Typography className={classes.stageTitle} variant="h4">
                            Зарегистрируйтесь
                        </Typography>
                        <Typography variant="body1" color="textSecondary">
                            Пройдите форму регистрации и подтвердите аккаунт через
                            почту
                        </Typography>
                    </li>
                    <li className={classes.stage}>
                        <div className={classes.stageImage}>
                            <img src={stage2} alt="Выбор врача" />
                            <div className={classes.stageArrow}>
                                <img src={stageArrow} alt="" />
                            </div>
                        </div>
                        <Typography className={classes.stageTitle} variant="h4">
                            Выберите врача
                        </Typography>
                        <Typography variant="body1" color="textSecondary">
                            С помощью фильтров выберите подходящего вам специалиста
                        </Typography>
                    </li>
                    <li className={classes.stage}>
                        <div className={classes.stageImage}>
                            <img src={stage3} alt="Выбор времени" />
                            <div className={classes.stageArrow}>
                                <img src={stageArrow} alt="" />
                            </div>
                        </div>
                        <Typography className={classes.stageTitle} variant="h4">
                            Выберите время
                        </Typography>
                        <Typography variant="body1" color="textSecondary">
                            Назначьте удобное время консультации для вас
                        </Typography>
                    </li>
                    <li className={classes.stage}>
                        <div className={classes.stageImage}>
                            <img src={stage4} alt="Выбор симптомов" />
                        </div>
                        <Typography className={classes.stageTitle} variant="h4">
                            Укажите симптомы
                        </Typography>
                        <Typography variant="body1" color="textSecondary">
                            Опишите проблемы, которые вас беспокоят
                        </Typography>
                    </li>
                </ol>
            </Container>
        </section>
    );
};
