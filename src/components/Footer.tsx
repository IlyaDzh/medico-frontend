import React from "react";
import { Link } from "react-router-dom";
import { Container, Typography, makeStyles, Theme } from "@material-ui/core";

import { LogoIcon, TwitterIcon, FacebookIcon, InstagramIcon } from "icons";

const useStyles = makeStyles((theme: Theme) => ({
    footerTop: {
        backgroundColor: theme.palette.background.dark,
        padding: "36px 0",
        [theme.breakpoints.down("xs")]: {
            padding: "22px 0"
        }
    },
    footerTopContainer: {
        display: "flex",
        justifyContent: "space-between",
        [theme.breakpoints.down("xs")]: {
            display: "block"
        }
    },
    footerTopList: {
        display: "flex",
        [theme.breakpoints.down("xs")]: {
            marginBottom: 28
        }
    },
    footerTopListColumn: {
        "&:first-child": {
            marginRight: 120,
            [theme.breakpoints.down("sm")]: {
                marginRight: 84
            },
            [theme.breakpoints.down(450)]: {
                marginRight: "auto"
            }
        },
        "& li:not(:last-child)": {
            marginBottom: 14
        }
    },
    topListLink: {
        color: "#fff",
        textDecoration: "none",
        "&:hover": {
            textDecoration: "underline"
        }
    },
    contacts: {
        textAlign: "right",
        [theme.breakpoints.down("xs")]: {
            textAlign: "left"
        }
    },
    telNumber: {
        marginBottom: 8,
        "& a": {
            color: "#fff",
            textDecoration: "none",
            "&:hover": {
                textDecoration: "underline"
            }
        }
    },
    supportLink: {
        marginBottom: 18,
        "& a": {
            fontSize: 14,
            lineHeight: "18px",
            color: theme.palette.primary.main,
            "&:hover": {
                textDecoration: "none"
            }
        },
        [theme.breakpoints.down("xs")]: {
            marginBottom: 12
        }
    },
    socialList: {
        display: "flex",
        justifyContent: "flex-end",
        "& li": {
            marginLeft: 24,
            [theme.breakpoints.down("xs")]: {
                marginLeft: 0,
                marginRight: 20
            }
        },
        "& a": {
            "&:hover svg path": {
                fill: "#fff"
            }
        },
        [theme.breakpoints.down("xs")]: {
            justifyContent: "flex-start"
        }
    },
    footerBottom: {
        padding: "8px 0",
        [theme.breakpoints.down("sm")]: {
            padding: "22px 0"
        }
    },
    footerBottomContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        [theme.breakpoints.down("sm")]: {
            display: "block"
        }
    },
    footerLogo: {
        display: "inline-flex",
        [theme.breakpoints.down("sm")]: {
            marginBottom: 12
        }
    },
    footerBottomNav: {
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.down("sm")]: {
            display: "block"
        }
    },
    footerBottomList: {
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.down("sm")]: {
            display: "block"
        },
        "& li": {
            marginRight: 72,
            [theme.breakpoints.down("md")]: {
                marginRight: 44
            },
            [theme.breakpoints.down("sm")]: {
                marginRight: 0,
                marginBottom: 4
            }
        }
    },
    bottomListLink: {
        fontSize: 14,
        color: theme.palette.text.secondary,
        "&:hover": {
            textDecoration: "none"
        }
    },
    copyright: {
        [theme.breakpoints.down("xs")]: {
            fontSize: 12,
            lineHeight: "18px"
        }
    }
}));

export const Footer: React.FC = () => {
    const classes = useStyles();

    return (
        <footer>
            <div className={classes.footerTop}>
                <Container className={classes.footerTopContainer}>
                    <nav>
                        <ul className={classes.footerTopList}>
                            <li className={classes.footerTopListColumn}>
                                <ul>
                                    <li>
                                        <Link
                                            to="/#doctors"
                                            className={classes.topListLink}
                                        >
                                            Врачи
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/#about"
                                            className={classes.topListLink}
                                        >
                                            О сервисе
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/#how-it-works"
                                            className={classes.topListLink}
                                        >
                                            Как это работает
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className={classes.footerTopListColumn}>
                                <ul>
                                    <li>
                                        <Link
                                            to="/#reviews"
                                            className={classes.topListLink}
                                        >
                                            Отзывы
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                    <div className={classes.contacts}>
                        <div className={classes.telNumber}>
                            <a href="tel:+79781234567">+7 978 123 45 67</a>
                        </div>
                        <div className={classes.supportLink}>
                            <Link to="/#feedback">Написать в поддержку</Link>
                        </div>
                        <ul className={classes.socialList}>
                            <li>
                                <a
                                    href="https://twitter.com"
                                    aria-label="Twitter"
                                    target="_blank"
                                    rel="me noopener noreferrer"
                                >
                                    <TwitterIcon />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.facebook.com"
                                    aria-label="Facebook"
                                    target="_blank"
                                    rel="me noopener noreferrer"
                                >
                                    <FacebookIcon />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.instagram.com/"
                                    aria-label="Instagram"
                                    target="_blank"
                                    rel="me noopener noreferrer"
                                >
                                    <InstagramIcon />
                                </a>
                            </li>
                        </ul>
                    </div>
                </Container>
            </div>
            <div className={classes.footerBottom}>
                <Container className={classes.footerBottomContainer}>
                    <Link
                        to="/"
                        className={classes.footerLogo}
                        aria-label="Перейти на главную"
                    >
                        <LogoIcon width={55} />
                    </Link>
                    <div className={classes.footerBottomNav}>
                        <ul className={classes.footerBottomList}>
                            <li>
                                <Link to="/" className={classes.bottomListLink}>
                                    Пользовательское соглашение
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className={classes.bottomListLink}>
                                    Политика обработки персональных данных
                                </Link>
                            </li>
                        </ul>
                        <Typography
                            className={classes.copyright}
                            variant="h6"
                            component="small"
                            color="textSecondary"
                        >
                            &copy; 2021 Все права защищены
                        </Typography>
                    </div>
                </Container>
            </div>
        </footer>
    );
};
