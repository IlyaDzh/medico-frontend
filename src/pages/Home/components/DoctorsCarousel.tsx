import React, { useRef } from "react";
import Slider, { Settings } from "react-slick";
import {
    Container,
    Typography,
    IconButton,
    makeStyles,
    Theme
} from "@material-ui/core";

import { DoctorCard } from "./DoctorCard";
import { Button } from "components";
import { InfoIcon, ArrowLeftIcon, ArrowRightIcon } from "icons";

import "slick-carousel/slick/slick.css";

const useStyles = makeStyles((theme: Theme) => ({
    doctorsSection: {
        paddingTop: 120,
        paddingBottom: 106,
        backgroundColor: "#fff"
    },
    sectionTitle: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: 45
    },
    sectionSubtitle: {
        display: "flex",
        maxWidth: 450
    },
    sectionSubtitleIcon: {
        paddingTop: 4,
        marginRight: 12
    },
    slider: {
        marginBottom: 22,
        "& .slick-list": {
            margin: "0 -3px"
        },
        "& .slick-slide > div": {
            padding: "0 3px"
        },
        "& .slick-track": {
            paddingBottom: 10
        }
    },
    actions: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    },
    sliderArrow: {
        "&:hover svg path": {
            fill: theme.palette.primary.dark
        }
    }
}));

const settings: Settings = {
    dots: false,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    swipe: false
    // lazyLoad: "ondemand"
};

export const DoctorsCarousel: React.FC = () => {
    const classes = useStyles();
    const sliderRef = useRef<Slider>(null);

    const handleClickNextSlide = (): void => {
        sliderRef?.current?.slickNext();
    };

    const handleClickPrevSlide = (): void => {
        sliderRef?.current?.slickPrev();
    };

    return (
        <section className={classes.doctorsSection}>
            <Container>
                <div className={classes.sectionTitle}>
                    <Typography variant="h2">Специалисты</Typography>
                    <div className={classes.sectionSubtitle}>
                        <span className={classes.sectionSubtitleIcon}>
                            <InfoIcon />
                        </span>
                        <Typography variant="body2" color="textSecondary">
                            Поможем найти проверенного врача и записаться на
                            консультацию в удобное время
                        </Typography>
                    </div>
                </div>
                <Slider ref={sliderRef} {...settings} className={classes.slider}>
                    {new Array(10).fill(undefined).map((_, index) => (
                        <DoctorCard key={index} />
                    ))}
                </Slider>
                <div className={classes.actions}>
                    <Button variant="outlined" size="small" to="/doctors">
                        Все врачи
                    </Button>
                    <div>
                        <IconButton
                            className={classes.sliderArrow}
                            color="primary"
                            onClick={handleClickPrevSlide}
                            aria-label="Предыдущий слайд"
                        >
                            <ArrowLeftIcon />
                        </IconButton>
                        <IconButton
                            className={classes.sliderArrow}
                            color="primary"
                            onClick={handleClickNextSlide}
                            aria-label="Следующий слайд"
                        >
                            <ArrowRightIcon />
                        </IconButton>
                    </div>
                </div>
            </Container>
        </section>
    );
};
