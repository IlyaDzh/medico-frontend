import React from "react";
import { Container, Typography, makeStyles, Theme } from "@material-ui/core";

import { Button } from "components";
import { ArrowRightIcon } from "icons";

import backgroundLeft from "images/home/background/home-background-left.jpg";
import backgroundRight from "images/home/background/home-background-right.jpg";

import phoneVideoPNG from "images/home/phone/phone-video.png";
import phoneVideoPNG2x from "images/home/phone/phone-video@2x.png";
import phoneVideoWEBP from "images/home/phone/phone-video.webp";
import phoneVideoWEBP2x from "images/home/phone/phone-video@2x.webp";
import phoneVideoMobilePNG from "images/home/phone/phone-video-mobile.png";
import phoneVideoMobilePNG2x from "images/home/phone/phone-video-mobile@2x.png";
import phoneVideoMobileWEBP from "images/home/phone/phone-video-mobile.webp";
import phoneVideoMobileWEBP2x from "images/home/phone/phone-video-mobile@2x.webp";

import phoneCircle from "images/home/phone/phone-circle.svg";

const useStyles = makeStyles((theme: Theme) => ({
    header: {
        position: "relative",
        minHeight: "100vh"
    },
    headerBackground: {
        display: "flex",
        position: "absolute",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
        [theme.breakpoints.down("xs")]: {
            display: "none"
        }
    },
    headerBackgroundLeft: {
        width: "60%",
        background: `url(${backgroundLeft}) no-repeat bottom right ${theme.palette.background.default}`,
        backgroundSize: "cover",
        [theme.breakpoints.down("sm")]: {
            backgroundImage: "unset"
        }
    },
    headerBackgroundRight: {
        width: "40%",
        background: `url(${backgroundRight}) no-repeat bottom right ${theme.palette.primary.main}`,
        backgroundSize: "cover",
        borderBottomLeftRadius: 30,
        [theme.breakpoints.down("sm")]: {
            backgroundImage: "unset"
        }
    },
    headerContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        [theme.breakpoints.down("xs")]: {
            display: "block",
            padding: 0
        }
    },
    headerContentLeft: {
        width: "50%",
        [theme.breakpoints.down("xs")]: {
            width: "100%",
            backgroundColor: theme.palette.background.default,
            padding: "44px 32px 28px 24px"
        }
    },
    headerContentRight: {
        width: "50%",
        display: "flex",
        justifyContent: "space-between",
        paddingTop: 80,
        [theme.breakpoints.down("xs")]: {
            width: "100%",
            backgroundColor: theme.palette.primary.main,
            padding: "52px 24px 24px 8px"
        }
    },
    headerTitle: {
        maxWidth: 600,
        marginBottom: 24
    },
    headerDescription: {
        maxWidth: 500,
        marginBottom: 42,
        [theme.breakpoints.down("xs")]: {
            marginBottom: 36
        }
    },
    headerImage: {
        "& img": {
            height: "80vh",
            [theme.breakpoints.down("xs")]: {
                height: "auto"
            }
        }
    },
    headerList: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        width: "100%",
        listStyle: "none",
        padding: 0,
        margin: 0
    },
    headerListItem: {
        position: "relative",
        width: "100%",
        textAlign: "right",
        borderBottom: `2px dashed ${theme.palette.primary.dark}`,
        marginBottom: 35,
        paddingBottom: 4,
        "&:after": {
            position: "absolute",
            left: -12,
            bottom: -12,
            content: "' '",
            background: `url(${phoneCircle}) no-repeat`,
            height: 24,
            width: 24,
            [theme.breakpoints.down("xs")]: {
                left: -8,
                width: 14,
                bottom: -8,
                height: 14,
                backgroundSize: "14px 14px"
            }
        }
    }
}));

export const HomePage: React.FC = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <header className={classes.header}>
                <Container className={classes.headerContainer}>
                    <div className={classes.headerContentLeft}>
                        <Typography variant="h1" className={classes.headerTitle}>
                            Онлайн-консультации с лучшими врачами
                        </Typography>
                        <Typography
                            variant="body1"
                            className={classes.headerDescription}
                        >
                            Онлайн-сервис, который помогает сделать медицину
                            доступной из любой точки мира
                        </Typography>
                        <Button
                            variant="contained"
                            size="large"
                            to="/home"
                            icon={<ArrowRightIcon />}
                        >
                            Записаться на приём
                        </Button>
                    </div>
                    <div className={classes.headerContentRight}>
                        <div className={classes.headerImage}>
                            <picture>
                                <source
                                    srcSet={`${phoneVideoWEBP} 1x, ${phoneVideoWEBP2x} 2x`}
                                    media="(min-width: 600px)"
                                />
                                <source
                                    srcSet={`${phoneVideoPNG} 1x, ${phoneVideoPNG2x} 2x`}
                                    media="(min-width: 600px)"
                                />
                                <source
                                    srcSet={`${phoneVideoMobileWEBP} 1x, ${phoneVideoMobileWEBP2x} 2x`}
                                    type="image/webp"
                                />
                                <img
                                    src={phoneVideoMobilePNG}
                                    srcSet={`${phoneVideoMobilePNG2x} 2x`}
                                    alt="Телефон"
                                />
                            </picture>
                        </div>
                        <ul className={classes.headerList}>
                            <li className={classes.headerListItem}>
                                <Button variant="text" color="default">
                                    Видеосвязь
                                </Button>
                            </li>
                            <li className={classes.headerListItem}>
                                <Button variant="text" color="default">
                                    Аудио
                                </Button>
                            </li>
                            <li className={classes.headerListItem}>
                                <Button variant="text" color="default">
                                    Чат
                                </Button>
                            </li>
                        </ul>
                    </div>
                </Container>
                <div className={classes.headerBackground}>
                    <div className={classes.headerBackgroundLeft} />
                    <div className={classes.headerBackgroundRight} />
                </div>
            </header>
            <footer>
                <Container>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
                    quas perspiciatis maiores laboriosam nobis animi modi quia
                    laudantium impedit. Debitis, fugit quia! Ex provident dolor
                    accusantium eligendi porro illo quos, quasi autem iste accusamus
                    quod repellat cum quam dolorum, cupiditate doloribus repudiandae
                    quibusdam vel fuga delectus? Minima, nulla magni. Deleniti eaque
                    dignissimos nobis ex mollitia? Officiis sint aspernatur facere
                    architecto similique voluptatem earum error pariatur veritatis,
                    ut porro sequi harum suscipit aperiam iusto iure ab omnis dolorem
                    in accusamus ratione.
                </Container>
            </footer>
        </React.Fragment>
    );
};
