import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react";
import { Typography, Hidden, makeStyles, Theme } from "@material-ui/core";
import { Rating } from "@material-ui/lab";

import {
    Breadcrumbs,
    Button,
    ProfileTabs,
    Loader,
    ErrorAnimation
} from "components";
import { ArrowRightIcon } from "icons";
import { useStores } from "stores/useStore";
import { formatSpecialties } from "utils/formatSpecialties";

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
        maxWidth: 420,
        width: "100%",
        "& img": {
            display: "block",
            objectFit: "cover",
            width: "100%"
        },
        [theme.breakpoints.down("md")]: {
            maxWidth: 360
        },
        [theme.breakpoints.down("sm")]: {
            marginRight: 24
        },
        [theme.breakpoints.down("xs")]: {
            marginRight: 0,
            marginBottom: 20
        }
    },
    profileInfo: {
        maxWidth: 624,
        width: "100%"
    },
    profileCategory: {
        marginBottom: 6
    },
    profileAbout: {
        marginBottom: 12
    },
    profileJobTime: {
        marginBottom: 18,
        [theme.breakpoints.down("sm")]: {
            marginBottom: 12
        }
    },
    profileCost: {
        marginBottom: 32,
        [theme.breakpoints.down("sm")]: {
            marginBottom: 18
        }
    },
    loader: {
        padding: "100px 0"
    },
    error: {
        marginTop: 80,
        marginBottom: 80
    }
}));

export const DoctorProfile: React.FC = observer(() => {
    const classes = useStyles();
    const { id } = useParams<{ id: string }>();
    const { userStore, modalsStore, doctorStore } = useStores();
    const { isAuthorized } = userStore;
    const { setModalIsOpen } = modalsStore;
    const {
        currentDoctor,
        pendingProfile,
        fetchingProfileError,
        getDoctorProfile,
        resetProfile
    } = doctorStore;

    const specialty = currentDoctor && formatSpecialties(currentDoctor.specialties);

    useEffect(() => {
        if (
            (currentDoctor && currentDoctor.id === Number(id)) ||
            pendingProfile ||
            fetchingProfileError
        ) {
            return;
        }

        getDoctorProfile(Number(id));
    }, [id, currentDoctor, pendingProfile, fetchingProfileError, getDoctorProfile]);

    useEffect(() => {
        return () => resetProfile();
    }, [resetProfile]);

    const handleButtonClick = (): void => {
        if (!isAuthorized) {
            setModalIsOpen("sign-in", true);
        }
    };

    if (fetchingProfileError) {
        return (
            <div className={classes.error}>
                <ErrorAnimation path="/doctors" title="Найти другого доктора" />
            </div>
        );
    }

    if (pendingProfile || !currentDoctor) {
        return (
            <div className={classes.loader}>
                <Loader level={3} isCenter />
            </div>
        );
    }

    return (
        <div className={classes.profile}>
            <Hidden smDown>
                <div className={classes.breadcrumbs}>
                    <Breadcrumbs
                        items={[
                            { to: "/", title: "Главная" },
                            { to: "/doctors", title: "Специалисты" },
                            {
                                title: `${currentDoctor.surname} ${currentDoctor.name} ${currentDoctor.middleName}`
                            }
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
                            {specialty}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            {currentDoctor.workTime}
                        </Typography>
                    </Hidden>
                    <div className={classes.profileInner}>
                        <div className={classes.profileImage}>
                            <img
                                src={
                                    process.env.REACT_APP_API_BASE_URL +
                                    currentDoctor.photo
                                }
                                alt={`Фото ${currentDoctor.surname} ${currentDoctor.name}`}
                            />
                        </div>
                        <div className={classes.profileInfo}>
                            <Hidden xsDown>
                                <Typography variant="body2" color="textPrimary">
                                    {specialty}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {currentDoctor.workTime}
                                </Typography>
                            </Hidden>
                            <Typography variant="h2">
                                {currentDoctor.surname} {currentDoctor.name}{" "}
                                {currentDoctor.middleName}
                            </Typography>
                            <div>
                                <Rating
                                    value={currentDoctor.rating}
                                    size="small"
                                    readOnly
                                />
                            </div>
                            <Typography
                                className={classes.profileAbout}
                                color="textSecondary"
                            >
                                {currentDoctor.about}
                            </Typography>
                            <Typography
                                className={classes.profileJobTime}
                                variant="h5"
                                color="textSecondary"
                            >
                                Стаж работы: {currentDoctor.experience}
                            </Typography>
                            <Typography
                                className={classes.profileCost}
                                variant="h3"
                                color="textSecondary"
                            >
                                {currentDoctor.costOfConsultation} руб.
                            </Typography>
                            <Button
                                to={
                                    isAuthorized
                                        ? `/appointment/${currentDoctor.id}`
                                        : undefined
                                }
                                variant="contained"
                                size="large"
                                icon={<ArrowRightIcon color="#fff" />}
                                onClick={handleButtonClick}
                            >
                                Записаться на приём
                            </Button>
                        </div>
                    </div>
                </div>
                <ProfileTabs currentDoctor={currentDoctor} />
            </div>
        </div>
    );
});
