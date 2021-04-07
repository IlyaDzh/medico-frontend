import React, { useRef, useState, useEffect, useCallback } from "react";
import { observer } from "mobx-react";
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

import { DoctorCard } from "./DoctorCard";
import { Button, Loader } from "components";
import { InfoIcon, ArrowLeftIcon, ArrowRightIcon } from "icons";
import { useStores } from "stores/useStore";

const useStyles = makeStyles((theme: Theme) => ({
    doctorsSection: {
        paddingTop: 120,
        paddingBottom: 106,
        backgroundColor: "#fff",
        [theme.breakpoints.down("xs")]: {
            paddingTop: 31,
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
        maxWidth: 485,
        [theme.breakpoints.down(800)]: {
            maxWidth: "unset"
        }
    },
    sectionSubtitleIcon: {
        paddingTop: 2,
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
        },
        [theme.breakpoints.down("xs")]: {
            marginBottom: 18,
            marginRight: "-14px",
            marginLeft: "-14px"
        }
    },
    actions: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    },
    allDoctorsBtn: {
        [theme.breakpoints.down("sm")]: {
            padding: "7px 24px",
            fontSize: "18px"
        },
        [theme.breakpoints.down("xs")]: {
            padding: "6px 22px",
            fontSize: "16px"
        }
    },
    sliderArrow: {
        "&:hover svg path": {
            fill: theme.palette.text.primary
        },
        "&.Mui-disabled svg path": {
            fill: theme.palette.text.disabled
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
    swipe: false,
    swipeToSlide: true,
    responsive: [
        {
            breakpoint: 960,
            settings: {
                slidesToShow: 4
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2.5,
                swipe: true
            }
        },
        {
            breakpoint: 375,
            settings: {
                slidesToShow: 2.1,
                swipe: true
            }
        },
        {
            breakpoint: 350,
            settings: {
                slidesToShow: 1.75,
                swipe: true
            }
        }
    ]
};

export const DoctorsSection: React.FC = observer(() => {
    const classes = useStyles();
    const [nextSlideNumber, setNextSlideNumber] = useState<number>(0);
    const sliderRef = useRef<Slider>(null);
    const matches = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));

    const { homeStore } = useStores();
    const { doctors, pending, getDoctors } = homeStore;

    useEffect(() => {
        if (!doctors) {
            getDoctors();
        }
    }, [doctors, getDoctors]);

    const LENGTH_OF_ARRAY = doctors?.length || 0;

    const slidesToShow: number = matches ? 4 : 5;

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
        <section id="doctors" className={classes.doctorsSection}>
            <Container>
                <div className={classes.sectionTitle}>
                    <Typography className={classes.sectionTitleText} variant="h2">
                        Специалисты
                    </Typography>
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
                {pending || !doctors ? (
                    <Loader level={2.5} isCenter />
                ) : (
                    <Slider
                        ref={sliderRef}
                        beforeChange={beforeChangeHandler}
                        {...settings}
                        className={classes.slider}
                    >
                        {doctors.map(doctor => (
                            <DoctorCard key={doctor.id} doctor={doctor} />
                        ))}
                    </Slider>
                )}
                <div className={classes.actions}>
                    <Button
                        className={classes.allDoctorsBtn}
                        variant="outlined"
                        size="small"
                        to="/doctors"
                    >
                        Все врачи
                    </Button>
                    <Hidden xsDown>
                        <div>
                            <IconButton
                                className={classes.sliderArrow}
                                color="primary"
                                onClick={handleClickPrevSlide}
                                disabled={nextSlideNumber === 0}
                                aria-label="Предыдущий слайд"
                            >
                                <ArrowLeftIcon />
                            </IconButton>
                            <IconButton
                                className={classes.sliderArrow}
                                color="primary"
                                onClick={handleClickNextSlide}
                                disabled={
                                    LENGTH_OF_ARRAY <= slidesToShow ||
                                    nextSlideNumber >= LENGTH_OF_ARRAY - slidesToShow
                                }
                                aria-label="Следующий слайд"
                            >
                                <ArrowRightIcon />
                            </IconButton>
                        </div>
                    </Hidden>
                </div>
            </Container>
        </section>
    );
});
