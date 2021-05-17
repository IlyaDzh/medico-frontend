import React, { useRef, useState, useCallback } from "react";
import Slider, { Settings } from "react-slick";
import {
    Container,
    Typography,
    IconButton,
    Hidden,
    makeStyles,
    useMediaQuery,
    Theme
} from "@material-ui/core";

import { ReviewCard } from "./ReviewCard";
import { ArrowLeftIcon, ArrowRightIcon } from "icons";

import person1 from "images/home/reviews/person1.jpg";
import person2 from "images/home/reviews/person2.jpg";
import person3 from "images/home/reviews/person3.jpg";
import person4 from "images/home/reviews/person4.jpg";
import person5 from "images/home/reviews/person5.jpg";
import person6 from "images/home/reviews/person6.jpg";
import person7 from "images/home/reviews/person7.jpg";
import person8 from "images/home/reviews/person8.jpg";

const useStyles = makeStyles((theme: Theme) => ({
    reviewsSection: {
        overflow: "hidden",
        padding: "120px 0",
        background: `linear-gradient(0, transparent 50%, ${theme.palette.primary.main} 50%)`,
        [theme.breakpoints.down("sm")]: {
            padding: "60px 0"
        }
    },
    sectionHeader: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 52
    },
    sectionTitle: {
        color: "#fff"
    },
    actions: {
        display: "flex",
        alignItems: "center"
    },
    sliderArrow: {
        "&:first-child": {
            marginRight: 14,
            [theme.breakpoints.down("xs")]: {
                marginRight: 6
            }
        },
        "&:hover": {
            background: theme.palette.other!.main,
            "& svg path": {
                fill: theme.palette.text.primary
            }
        },
        "&.Mui-disabled svg path": {
            fill: theme.palette.text.disabled
        }
    },
    slider: {
        "& .slick-list": {
            overflow: "visible",
            margin: "0 -6px",
            [theme.breakpoints.down("xs")]: {
                margin: "0 -3px"
            }
        },
        "& .slick-slide > div": {
            padding: "0 6px",
            [theme.breakpoints.down("xs")]: {
                margin: "0 -3px"
            }
        }
    }
}));

const settings: Settings = {
    dots: false,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 3.15,
    slidesToScroll: 1,
    swipe: false,
    swipeToSlide: true,
    responsive: [
        {
            breakpoint: 850,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2.15,
                swipe: true
            }
        },
        {
            breakpoint: 520,
            settings: {
                slidesToShow: 1.75,
                swipe: true
            }
        },
        {
            breakpoint: 450,
            settings: {
                slidesToShow: 1.2,
                swipe: true
            }
        }
    ]
};

const reviews = [
    {
        fullname: "Елена Левченко",
        image: person2,
        rating: 5,
        text:
            "Мне все понравилось. Все было хорошо. Анастасия Андреевна очень хорошо выслушивает пациента, все спокойно и гладко."
    },
    {
        fullname: "Ангелина Соколова",
        image: person3,
        rating: 5,
        text:
            "Всё прошло хорошо. Пока сдала только анализы, но доктор мне всё по полочкам расписал, рассказал."
    },
    {
        fullname: "Роман Иванов",
        image: person4,
        rating: 5,
        text:
            "Мне понравился прием. Очень интересный, харизматичный доктор. Все рассказали с примерами из практики. В целом я доволен."
    },
    {
        fullname: "Юлия Смирнова",
        image: person5,
        rating: 5,
        text:
            "Доктор готов выслушать и ответить на вопросы. Доброжелательный врач, все по стандартам, негативных эмоций у меня не возникло."
    },
    {
        fullname: "Никита Кисилев",
        image: person6,
        rating: 4,
        text:
            "В цело прием прошел хорошо, претензий нет, все понравилось. Мне кажется, что набор исследований должен быть немного шире, а то получается поверхностно. Доктор прокомментировала все мои показания."
    },
    {
        fullname: "Игорь Поляков",
        image: person7,
        rating: 5,
        text:
            "В целом мне очень понравилось. Доктора работают профессионально. Рекомендую всем данный сервис."
    },
    {
        fullname: "Александр Шевцов",
        image: person8,
        rating: 5,
        text:
            "Все хорошо. Врач мне все расписал, описал подробные шаги и последовательность моих действий. Я доволен, никаких негативных моментов не было."
    },
    {
        fullname: "Олег Кубарев",
        image: person1,
        rating: 5,
        text: "Отличный сервис! Ставлю 5 звезд."
    },
];

export const ReviewsSection: React.FC = () => {
    const classes = useStyles();
    const [nextSlideNumber, setNextSlideNumber] = useState<number>(0);
    const sliderRef = useRef<Slider>(null);
    const matches = useMediaQuery((theme: Theme) => theme.breakpoints.down(850));

    const slidesToShow: number = matches ? 2 : 3.15;

    const LENGTH_OF_ARRAY = reviews.length;

    const handleClickNextSlide = useCallback((): void => {
        sliderRef?.current?.slickNext();
    }, [sliderRef]);

    const handleClickPrevSlide = useCallback((): void => {
        sliderRef?.current?.slickPrev();
    }, [sliderRef]);

    const beforeChangeHandler = (_: number, nextSlide: number): void => {
        setNextSlideNumber(nextSlide);
    };

    return (
        <section id="reviews" className={classes.reviewsSection}>
            <Container>
                <div className={classes.sectionHeader}>
                    <Typography className={classes.sectionTitle} variant="h2">
                        Отзывы пациентов о сервисе
                    </Typography>
                    <Hidden xsDown>
                        <div className={classes.actions}>
                            <IconButton
                                className={classes.sliderArrow}
                                onClick={handleClickPrevSlide}
                                disabled={nextSlideNumber === 0}
                                aria-label="Предыдущий слайд"
                            >
                                <ArrowLeftIcon color="#fff" />
                            </IconButton>
                            <IconButton
                                className={classes.sliderArrow}
                                onClick={handleClickNextSlide}
                                disabled={
                                    LENGTH_OF_ARRAY <= slidesToShow ||
                                    nextSlideNumber >= LENGTH_OF_ARRAY - slidesToShow
                                }
                                aria-label="Следующий слайд"
                            >
                                <ArrowRightIcon color="#fff" />
                            </IconButton>
                        </div>
                    </Hidden>
                </div>
                <Slider
                    ref={sliderRef}
                    beforeChange={beforeChangeHandler}
                    {...settings}
                    className={classes.slider}
                >
                    {reviews.map((review, index) => (
                        <ReviewCard key={index} {...review} />
                    ))}
                </Slider>
            </Container>
        </section>
    );
};
