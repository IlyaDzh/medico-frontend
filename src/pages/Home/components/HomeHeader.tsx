import React, { useState } from "react";
import clsx from "clsx";
import { Container, Typography, Hidden, makeStyles, Theme } from "@material-ui/core";

import { Button, Header } from "components";
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

import phoneAudioPNG from "images/home/phone/phone-audio.png";
import phoneAudioPNG2x from "images/home/phone/phone-audio@2x.png";
import phoneAudioWEBP from "images/home/phone/phone-audio.webp";
import phoneAudioWEBP2x from "images/home/phone/phone-audio@2x.webp";
import phoneAudioMobilePNG from "images/home/phone/phone-audio-mobile.png";
import phoneAudioMobilePNG2x from "images/home/phone/phone-audio-mobile@2x.png";
import phoneAudioMobileWEBP from "images/home/phone/phone-audio-mobile.webp";
import phoneAudioMobileWEBP2x from "images/home/phone/phone-audio-mobile@2x.webp";

import phoneChatPNG from "images/home/phone/phone-chat.png";
import phoneChatPNG2x from "images/home/phone/phone-chat@2x.png";
import phoneChatWEBP from "images/home/phone/phone-chat.webp";
import phoneChatWEBP2x from "images/home/phone/phone-chat@2x.webp";
import phoneChatMobilePNG from "images/home/phone/phone-chat-mobile.png";
import phoneChatMobilePNG2x from "images/home/phone/phone-chat-mobile@2x.png";
import phoneChatMobileWEBP from "images/home/phone/phone-chat-mobile.webp";
import phoneChatMobileWEBP2x from "images/home/phone/phone-chat-mobile@2x.webp";

import phoneCircle from "images/home/phone/phone-circle.svg";

type TActiveButton = "video" | "audio" | "chat";

type TListItem = {
    label: TActiveButton;
    title: string;
};

type TImageItem = {
    label: TActiveButton;
    alt: string;
    phonePng: string;
    phonePng2x: string;
    phoneWebp: string;
    phoneWebp2x: string;
    phoneMobilePng: string;
    phoneMobilePng2x: string;
    phoneMobileWebp: string;
    phoneMobileWebp2x: string;
};

const useStyles = makeStyles((theme: Theme) => ({
    header: {
        position: "relative",
        minHeight: "100vh",
        [theme.breakpoints.down("sm")]: {
            minHeight: "auto"
        }
    },
    headerBackground: {
        display: "flex",
        position: "absolute",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
        [theme.breakpoints.down("sm")]: {
            display: "none"
        }
    },
    headerBackgroundLeft: {
        width: "60%",
        background: `url(${backgroundLeft}) no-repeat bottom right ${theme.palette.background.default}`,
        backgroundSize: "cover",
        [theme.breakpoints.down("md")]: {
            width: "50%"
        }
    },
    headerBackgroundRight: {
        width: "40%",
        background: `url(${backgroundRight}) no-repeat bottom right ${theme.palette.primary.main}`,
        backgroundSize: "cover",
        borderBottomLeftRadius: 30,
        [theme.breakpoints.down("md")]: {
            width: "50%"
        }
    },
    headerContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        minHeight: "100vh",
        paddingTop: 24,
        paddingBottom: 24,
        [theme.breakpoints.down("sm")]: {
            display: "block",
            padding: 0,
            minHeight: "auto"
        },
        "@media (max-height: 600px) and (min-width: 960px)": {
            paddingTop: 82,
            paddingBottom: 82
        }
    },
    headerContentLeft: {
        width: "50%",
        [theme.breakpoints.down("sm")]: {
            width: "100%",
            backgroundColor: theme.palette.background.default,
            padding: "98px 32px 28px 24px"
        }
    },
    headerContentRight: {
        width: "50%",
        display: "flex",
        justifyContent: "space-between",
        paddingTop: 80,
        [theme.breakpoints.down("sm")]: {
            width: "100%",
            backgroundColor: theme.palette.primary.main,
            padding: "52px 24px 24px 8px"
        },
        [`@media (max-height: 600px) and (min-width: ${theme.breakpoints.values.md}px)`]: {
            paddingTop: 0
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
            [theme.breakpoints.down("sm")]: {
                height: "auto"
            },
            "@media (min-height: 800px)": {
                height: "auto"
            },
            [`@media (max-height: 500px) and (min-width: ${theme.breakpoints.values.md}px)`]: {
                height: "auto"
            }
        }
    },
    headerImageContainer: {
        display: "none"
    },
    headerImageContainerActive: {
        display: "block"
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
        textAlign: "right",
        marginBottom: 35,
        paddingBottom: 4,
        borderBottom: "2px dashed transparent",
        transition: "border-color 0.8s ease",
        "&:after": {
            content: "''",
            opacity: 0,
            transition: "opacity 0.8s ease"
        }
    },
    headerListItemActive: {
        borderBottom: `2px dashed ${theme.palette.primary.dark}`,
        "&:after": {
            content: "''",
            position: "absolute",
            left: -12,
            bottom: -13,
            background: `url(${phoneCircle}) no-repeat`,
            height: 24,
            width: 24,
            opacity: 1,
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

const labelList: TListItem[] = [
    { label: "video", title: "Видеосвязь" },
    { label: "audio", title: "Аудио" },
    { label: "chat", title: "Чат" }
];

const images: TImageItem[] = [
    {
        label: "video",
        alt: "Звонок по видеосвязи",
        phonePng: phoneVideoPNG,
        phonePng2x: phoneVideoPNG2x,
        phoneWebp: phoneVideoWEBP,
        phoneWebp2x: phoneVideoWEBP2x,
        phoneMobilePng: phoneVideoMobilePNG,
        phoneMobilePng2x: phoneVideoMobilePNG2x,
        phoneMobileWebp: phoneVideoMobileWEBP,
        phoneMobileWebp2x: phoneVideoMobileWEBP2x
    },
    {
        label: "audio",
        alt: "Аудио звонок",
        phonePng: phoneAudioPNG,
        phonePng2x: phoneAudioPNG2x,
        phoneWebp: phoneAudioWEBP,
        phoneWebp2x: phoneAudioWEBP2x,
        phoneMobilePng: phoneAudioMobilePNG,
        phoneMobilePng2x: phoneAudioMobilePNG2x,
        phoneMobileWebp: phoneAudioMobileWEBP,
        phoneMobileWebp2x: phoneAudioMobileWEBP2x
    },
    {
        label: "chat",
        alt: "Чат с доктором",
        phonePng: phoneChatPNG,
        phonePng2x: phoneChatPNG2x,
        phoneWebp: phoneChatWEBP,
        phoneWebp2x: phoneChatWEBP2x,
        phoneMobilePng: phoneChatMobilePNG,
        phoneMobilePng2x: phoneChatMobilePNG2x,
        phoneMobileWebp: phoneChatMobileWEBP,
        phoneMobileWebp2x: phoneChatMobileWEBP2x
    }
];

export const HomeHeader: React.FC = () => {
    const classes = useStyles();
    const [activeButton, setActiveButton] = useState<TActiveButton>("video");

    return (
        <header className={classes.header}>
            <Hidden smDown>
                <Header isAbsolute rightBarIsLight />
            </Hidden>
            <Hidden mdUp>
                <Header />
            </Hidden>
            <Container className={classes.headerContainer}>
                <div className={classes.headerContentLeft}>
                    <Typography variant="h1" className={classes.headerTitle}>
                        Онлайн-консультации с лучшими врачами
                    </Typography>
                    <Typography
                        variant="body1"
                        className={classes.headerDescription}
                    >
                        Онлайн-сервис, который помогает сделать медицину доступной из
                        любой точки мира
                    </Typography>
                    <Button
                        variant="contained"
                        size="large"
                        to="/home"
                        icon={<ArrowRightIcon color="#fff" />}
                    >
                        Записаться на приём
                    </Button>
                </div>
                <div className={classes.headerContentRight}>
                    <div className={classes.headerImage}>
                        {images.map(item => (
                            <picture
                                key={item.label}
                                className={clsx(
                                    classes.headerImageContainer,
                                    activeButton === item.label &&
                                        classes.headerImageContainerActive
                                )}
                            >
                                <source
                                    srcSet={`${item.phoneWebp} 1x, ${item.phoneWebp2x} 2x`}
                                    type="image/webp"
                                    media="(min-width: 600px)"
                                />
                                <source
                                    srcSet={`${item.phonePng} 1x, ${item.phonePng2x} 2x`}
                                    media="(min-width: 600px)"
                                />
                                <source
                                    srcSet={`${item.phoneMobileWebp} 1x, ${item.phoneMobileWebp2x} 2x`}
                                    type="image/webp"
                                />
                                <img
                                    src={item.phoneMobilePng}
                                    srcSet={`${item.phoneMobilePng2x} 2x`}
                                    alt={item.alt}
                                />
                            </picture>
                        ))}
                    </div>
                    <ul className={classes.headerList}>
                        {labelList.map(item => (
                            <li
                                key={item.label}
                                className={clsx(
                                    classes.headerListItem,
                                    activeButton === item.label &&
                                        classes.headerListItemActive
                                )}
                            >
                                <Button
                                    variant="text"
                                    color="default"
                                    onClick={() => setActiveButton(item.label)}
                                    disableTouchRipple
                                >
                                    {item.title}
                                </Button>
                            </li>
                        ))}
                    </ul>
                </div>
            </Container>
            <div className={classes.headerBackground}>
                <div className={classes.headerBackgroundLeft} />
                <div className={classes.headerBackgroundRight} />
            </div>
        </header>
    );
};
