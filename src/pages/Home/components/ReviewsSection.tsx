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

const useStyles = makeStyles((theme: Theme) => ({
    reviewsSection: {
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
            background: "#ECEFF9",
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
        },
        [theme.breakpoints.down("xs")]: {
            marginRight: "-14px",
            marginLeft: "-14px"
        }
    }
}));

const LENGTH_OF_ARRAY = 7;

const settings: Settings = {
    dots: false,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
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

export const ReviewsSection: React.FC = () => {
    const classes = useStyles();
    const [nextSlideNumber, setNextSlideNumber] = useState<number>(0);
    const sliderRef = useRef<Slider>(null);
    const matches = useMediaQuery((theme: Theme) => theme.breakpoints.down(850));

    const slidesToShow: number = matches ? 2 : 3;

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
        <section className={classes.reviewsSection}>
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
                    {new Array(LENGTH_OF_ARRAY).fill(undefined).map((_, index) => (
                        <ReviewCard key={index} />
                    ))}
                </Slider>
            </Container>
        </section>
    );
};
