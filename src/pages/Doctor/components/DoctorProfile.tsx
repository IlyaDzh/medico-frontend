import React from "react";
import { Typography, Hidden, makeStyles, Theme } from "@material-ui/core";
import { Rating } from "@material-ui/lab";

import { Breadcrumbs, Button, ProfileTabs } from "components";
import { ArrowRightIcon } from "icons";

import doctorAlla from "images/doctors/alla.jpg";

const useStyles = makeStyles((theme: Theme) => ({
    profile: {
        padding: "24px 0 108px",
        [theme.breakpoints.down("md")]: {
            paddingTop: 48
        },
        [theme.breakpoints.down("xs")]: {
            paddingTop: 24,
            paddingBottom: 48
        }
    },
    breadcrumbs: {
        marginBottom: 44
    },
    paddingLeft: {
        paddingLeft: 60,
        [theme.breakpoints.down("sm")]: {
            paddingLeft: 0
        }
    },
    breadcrumbsItem: {
        fontWeight: 400,
        color: theme.palette.text.secondary
    },
    profileContent: {
        display: "flex",
        marginBottom: 44,
        [theme.breakpoints.down("xs")]: {
            marginBottom: 24,
            flexDirection: "column"
        }
    },
    profileInner: {
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.down("sm")]: {
            alignItems: "initial"
        },
        [theme.breakpoints.down("xs")]: {
            display: "block",
            paddingTop: 14
        }
    },
    profileImage: {
        marginRight: 48,
        borderRadius: 8,
        overflow: "hidden",
        "& img": {
            display: "block",
            objectFit: "cover",
            width: 420,
            [theme.breakpoints.down("md")]: {
                width: 360
            },
            [theme.breakpoints.down("sm")]: {
                width: "100%"
            }
        },
        [theme.breakpoints.down("md")]: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        },
        [theme.breakpoints.down("sm")]: {
            display: "block",
            marginRight: 24
        },
        [theme.breakpoints.down("xs")]: {
            marginRight: 0,
            marginBottom: 20
        }
    },
    profileInfo: {
        maxWidth: 624
    },
    profileCategory: {
        marginBottom: 6
    },
    profileAbout: {
        marginBottom: 12
    },
    profileJobTime: {
        marginBottom: 48,
        [theme.breakpoints.down("xs")]: {
            marginBottom: 12
        }
    }
}));

export const DoctorProfile: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.profile}>
            <Hidden smDown>
                <div className={classes.breadcrumbs}>
                    <Breadcrumbs
                        items={[
                            { to: "/", title: "Главная" },
                            { to: "/doctors", title: "Специалисты" },
                            { title: "Имя Отчество Фамилия" }
                        ]}
                        itemClassName={classes.breadcrumbsItem}
                    />
                </div>
            </Hidden>
            <div className={classes.paddingLeft}>
                <div className={classes.profileContent}>
                    <Hidden smUp>
                        <Typography
                            className={classes.profileCategory}
                            variant="body2"
                            color="textPrimary"
                        >
                            Терапевт
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            с 10:00 до 18:00
                        </Typography>
                    </Hidden>
                    <div className={classes.profileInner}>
                        <div className={classes.profileImage}>
                            <img src={doctorAlla} alt="" />
                        </div>
                        <div className={classes.profileInfo}>
                            <Hidden xsDown>
                                <Typography variant="body2" color="textPrimary">
                                    Терапевт
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    с 10:00 до 18:00
                                </Typography>
                            </Hidden>
                            <Typography variant="h2">
                                Алла Викторовна Иванова
                            </Typography>
                            <div>
                                <Rating value={5} size="small" readOnly />
                            </div>
                            <Typography
                                className={classes.profileAbout}
                                color="textSecondary"
                            >
                                Врач высшей категории таким образом реализация
                                намеченных плановых заданий обеспечивает широкому
                                кругу (специалистов).
                            </Typography>
                            <Typography
                                className={classes.profileJobTime}
                                variant="h5"
                                color="textSecondary"
                            >
                                Стаж работы: 12 лет
                            </Typography>
                            <Button
                                variant="contained"
                                size="large"
                                to="/doctor/1"
                                icon={<ArrowRightIcon color="#fff" />}
                            >
                                Записаться на приём
                            </Button>
                        </div>
                    </div>
                </div>
                <ProfileTabs />
            </div>
        </div>
    );
};
