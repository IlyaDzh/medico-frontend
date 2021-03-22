import React from "react";
import clsx from "clsx";
import { Container, Typography, makeStyles, Theme } from "@material-ui/core";

import aboutConsultationPNG from "images/home/about/about-consultation.png";
import aboutConsultationPNG2x from "images/home/about/about-consultation@2x.png";
import aboutConsultationWEBP from "images/home/about/about-consultation.webp";
import aboutConsultationWEBP2x from "images/home/about/about-consultation@2x.webp";
import aboutConsultationMobilePNG from "images/home/about/about-consultation-mobile.png";
import aboutConsultationMobilePNG2x from "images/home/about/about-consultation-mobile@2x.png";
import aboutConsultationMobileWEBP from "images/home/about/about-consultation-mobile.webp";
import aboutConsultationMobileWEBP2x from "images/home/about/about-consultation-mobile@2x.webp";

import aboutDashboardPNG from "images/home/about/about-dashboard.png";
import aboutDashboardPNG2x from "images/home/about/about-dashboard@2x.png";
import aboutDashboardWEBP from "images/home/about/about-dashboard.webp";
import aboutDashboardWEBP2x from "images/home/about/about-dashboard@2x.webp";
import aboutDashboardMobilePNG from "images/home/about/about-dashboard-mobile.png";
import aboutDashboardMobilePNG2x from "images/home/about/about-dashboard-mobile@2x.png";
import aboutDashboardMobileWEBP from "images/home/about/about-dashboard-mobile.webp";
import aboutDashboardMobileWEBP2x from "images/home/about/about-dashboard-mobile@2x.webp";

import aboutDoctorPNG from "images/home/about/about-doctor.png";
import aboutDoctorPNG2x from "images/home/about/about-doctor@2x.png";
import aboutDoctorWEBP from "images/home/about/about-doctor.webp";
import aboutDoctorWEBP2x from "images/home/about/about-doctor@2x.webp";
import aboutDoctorMobilePNG from "images/home/about/about-doctor-mobile.png";
import aboutDoctorMobilePNG2x from "images/home/about/about-doctor-mobile@2x.png";
import aboutDoctorMobileWEBP from "images/home/about/about-doctor-mobile.webp";
import aboutDoctorMobileWEBP2x from "images/home/about/about-doctor-mobile@2x.webp";

import aboutChatPNG from "images/home/about/about-chat.png";
import aboutChatPNG2x from "images/home/about/about-chat@2x.png";
import aboutChatWEBP from "images/home/about/about-chat.webp";
import aboutChatWEBP2x from "images/home/about/about-chat@2x.webp";
import aboutChatMobilePNG from "images/home/about/about-chat-mobile.png";
import aboutChatMobilePNG2x from "images/home/about/about-chat-mobile@2x.png";
import aboutChatMobileWEBP from "images/home/about/about-chat-mobile.webp";
import aboutChatMobileWEBP2x from "images/home/about/about-chat-mobile@2x.webp";

const useStyles = makeStyles((theme: Theme) => ({
    aboutSection: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "34px 0 41px",
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column-reverse"
        },
        [theme.breakpoints.down("xs")]: {
            padding: "30px 0 20px"
        }
    },
    sectionReverse: {
        flexDirection: "row-reverse",
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column-reverse"
        },
        "& $sectionContent": {
            marginRight: 0,
            marginLeft: 30,
            [theme.breakpoints.down("sm")]: {
                marginLeft: 0
            }
        }
    },
    sectionContent: {
        marginRight: 30,
        [theme.breakpoints.down("sm")]: {
            marginRight: 0
        }
    },
    sectionTitle: {
        marginBottom: 24,
        maxWidth: 580,
        [theme.breakpoints.down("sm")]: {
            textAlign: "center"
        }
    },
    sectionImage: {
        "& img": {
            width: "100%"
        }
    },
    list: {
        paddingLeft: 24,
        maxWidth: 596
    },
    listItem: {
        position: "relative",
        marginBottom: 16,
        "&:after": {
            content: "''",
            position: "absolute",
            top: 8,
            left: -22,
            width: 8,
            height: 8,
            backgroundColor: theme.palette.primary.dark,
            borderRadius: "50%",
            [theme.breakpoints.down("xs")]: {
                top: 4,
                width: 6,
                height: 6
            }
        }
    }
}));

const aboutItems = [
    {
        title: "Консультации из любой точки России",
        list: [
            "Доступ к онлайн консультации с высокоспециализированными врачами из любой точки страны",
            "Удобный способ консультации: аудио, видеозвонок, текстовый мессенджер",
            "Прозрачная ценовая политика, выгодные тарифы, без дополнительных платежей"
        ],
        imageAlt: "Ноутбук с открытыми тарифами нашего сервиса",
        images: {
            aboutPng: aboutConsultationPNG,
            aboutPng2x: aboutConsultationPNG2x,
            aboutWebp: aboutConsultationWEBP,
            aboutWebp2x: aboutConsultationWEBP2x,
            aboutMobilePng: aboutConsultationMobilePNG,
            aboutMobilePng2x: aboutConsultationMobilePNG2x,
            aboutMobileWebp: aboutConsultationMobileWEBP,
            aboutMobileWebp2x: aboutConsultationMobileWEBP2x
        }
    },
    {
        reverse: true,
        title: "Результаты сохраняются в личном кабинете",
        list: [
            "Автоматический сбор анамнеза (симптомов и жалоб). В зависимости от выбранных вами симптомов, система предложит вам лучшего специалиста",
            "Вся информация о ваших медицинских данных у вас в личном кабинете всегда под рукой",
            "Загружайте результаты лабораторных данных или исследовании для более эффективной персонализации"
        ],
        imageAlt: "Планшет с изображением страницы личного кабинета",
        images: {
            aboutPng: aboutDashboardPNG,
            aboutPng2x: aboutDashboardPNG2x,
            aboutWebp: aboutDashboardWEBP,
            aboutWebp2x: aboutDashboardWEBP2x,
            aboutMobilePng: aboutDashboardMobilePNG,
            aboutMobilePng2x: aboutDashboardMobilePNG2x,
            aboutMobileWebp: aboutDashboardMobileWEBP,
            aboutMobileWebp2x: aboutDashboardMobileWEBP2x
        }
    },
    {
        title: "Консультации с врачом",
        list: [
            "Дерматология: акне, сыпь, розацеа, экзема, целлюлит, солнечный ожог, укусы насекомых, герпес",
            "Аллергия: общие, сезонные аллергии, сыпь",
            "Простуда и грипп",
            "Кашель",
            "Головные боли",
            "Тошнота и рвота",
            "Диарея"
        ],
        imageAlt: "Врач разговаривает с пациентом по аудиозвонку",
        images: {
            aboutPng: aboutDoctorPNG,
            aboutPng2x: aboutDoctorPNG2x,
            aboutWebp: aboutDoctorWEBP,
            aboutWebp2x: aboutDoctorWEBP2x,
            aboutMobilePng: aboutDoctorMobilePNG,
            aboutMobilePng2x: aboutDoctorMobilePNG2x,
            aboutMobileWebp: aboutDoctorMobileWEBP,
            aboutMobileWebp2x: aboutDoctorMobileWEBP2x
        }
    },
    {
        reverse: true,
        title: "Консультации с психологом",
        list: [
            "Личное благополучие, психологическая устойчивость и саморегуляция",
            "Нехимические зависимости: любовная зависимость, нарушения пищевого поведения",
            "Трудности в общении, с созданием пары и семьи",
            "Гармонизация отношений в семье",
            "Прохождение семейных кризисов: измены, психологическое и физическое насилие, развод",
            "Депрессия, биполярное расстройство, усталость",
            "Развитие, самоэффективность, самореализация"
        ],
        imageAlt: "Общение с доктором в чате",
        images: {
            aboutPng: aboutChatPNG,
            aboutPng2x: aboutChatPNG2x,
            aboutWebp: aboutChatWEBP,
            aboutWebp2x: aboutChatWEBP2x,
            aboutMobilePng: aboutChatMobilePNG,
            aboutMobilePng2x: aboutChatMobilePNG2x,
            aboutMobileWebp: aboutChatMobileWEBP,
            aboutMobileWebp2x: aboutChatMobileWEBP2x
        }
    }
];

export const AboutSection: React.FC = () => {
    const classes = useStyles();

    return (
        <section id="about">
            <Container>
                {aboutItems.map((section, index) => (
                    <article
                        key={index}
                        className={clsx(
                            classes.aboutSection,
                            section.reverse && classes.sectionReverse
                        )}
                    >
                        <div className={classes.sectionContent}>
                            <Typography
                                variant="h2"
                                className={classes.sectionTitle}
                            >
                                {section.title}
                            </Typography>
                            <ul className={classes.list}>
                                {section.list.map((item, index) => (
                                    <li key={index} className={classes.listItem}>
                                        <Typography variant="body1">
                                            {item}
                                        </Typography>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className={classes.sectionImage}>
                            <picture>
                                <source
                                    srcSet={`${section.images.aboutWebp} 1x, ${section.images.aboutWebp2x} 2x`}
                                    type="image/webp"
                                    media="(min-width: 600px)"
                                />
                                <source
                                    srcSet={`${section.images.aboutPng} 1x, ${section.images.aboutPng2x} 2x`}
                                    media="(min-width: 600px)"
                                />
                                <source
                                    srcSet={`${section.images.aboutMobileWebp} 1x, ${section.images.aboutMobileWebp2x} 2x`}
                                    type="image/webp"
                                />
                                <img
                                    src={section.images.aboutMobilePng}
                                    srcSet={`${section.images.aboutMobilePng2x} 2x`}
                                    alt={section.imageAlt}
                                />
                            </picture>
                        </div>
                    </article>
                ))}
            </Container>
        </section>
    );
};
