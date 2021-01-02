import React from "react";
import { Container, Typography, makeStyles } from "@material-ui/core";

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

const useStyles = makeStyles(() => ({
    aboutSection: {
        display: "flex",
        alignItems: "center",
        padding: "54px 0"
    }
}));

const aboutItems = [
    {
        sectionTitle: "Консультации из любой точки России",
        sectionList: [
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
        inverse: true,
        sectionTitle: "Результаты сохраняются в личном кабинете",
        sectionList: [
            "Автоматический сбор анамнеза (симптомов и жалоб). В зависимости от выбранных вами симптомов, система предложит вам лучшего специалиста",
            "Вся информация о ваших медицинских данных у вас в личном кабинете всегда под рукой",
            "Загружайте результаты лабораторных данных или исследовании для более эффективной персонализации"
        ],
        negativeList: [
            "Травма головного или спинного мозга",
            "Боль в груди и/или онемение",
            "Рвота или кашель кровью",
            "Разрывы",
            "Потеря сознания",
            "Переломы костей",
            "Сильные ожоги"
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
        sectionTitle: "Консультации с врачом",
        sectionList: [
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
        inverse: true,
        sectionTitle: "Консультации с психологом",
        sectionList: [
            "Личное благополучие, психологическая устойчивость и саморегуляция",
            "Нехимические зависимости: любовная зависимость, нарушения пищевого поведения",
            "Трудности в общении, с созданием пары и семьи",
            "Гармонизация отношений в семье",
            "Прохождение семейных кризисов: измены, психологическое и физическое насилие, развод",
            "Депрессия, биполярное расстройство, усталость",
            "Развитие, самоэффективность, самореализация"
        ],
        negativeList: [
            "Травма головного или спинного мозга",
            "Боль в груди и/или онемение",
            "Рвота или кашель кровью",
            "Разрывы",
            "Потеря сознания",
            "Переломы костей",
            "Сильные ожоги"
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
        <Container>
            <section className={classes.aboutSection}>
                {aboutItems.map((section, index) => (
                    <React.Fragment key={index}>
                        <div>
                            <Typography variant="h2">
                                Консультации из любой точки России
                            </Typography>
                            <ul>
                                {section.sectionList.map((item, index) => (
                                    <li key={index}>
                                        <Typography variant="body1">
                                            {item}
                                        </Typography>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
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
                    </React.Fragment>
                ))}
            </section>
        </Container>
    );
};
