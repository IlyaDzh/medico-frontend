import React from "react";
import { observer } from "mobx-react";
import { Typography, useMediaQuery, makeStyles, Theme } from "@material-ui/core";

import { Avatar, ProfileTabs, DialogUpdateDoctorProfile } from "components";
import { EditIconButton } from "../components";
import { useStores } from "stores/useStore";
import { ChangeDoctorProfileTypes } from "stores/interfaces/Dashboard";

const useStyles = makeStyles((theme: Theme) => ({
    userMain: {
        display: "flex",
        alignItems: "center",
        marginBottom: 48,
        [theme.breakpoints.down("xs")]: {
            marginBottom: 24,
            alignItems: "unset"
        },
        [theme.breakpoints.down(360)]: {
            display: "block"
        }
    },
    userInfo: {
        marginLeft: 32,
        [theme.breakpoints.down("xs")]: {
            marginLeft: 20
        },
        [theme.breakpoints.down(360)]: {
            marginLeft: 0,
            marginTop: 20
        }
    },
    userFullname: {
        marginBottom: 8
    },
    userPrice: {
        display: "flex",
        alignItems: "center",
        marginBottom: 6
    },
    userAbout: {
        display: "flex",
        alignItems: "center",
        maxWidth: 600,
        marginBottom: 8
    },
    userRating: {
        display: "flex",
        alignItems: "center"
    },
    ratingTitle: {
        marginRight: 16
    },
    editButton: {
        marginLeft: 10
    }
}));

export const DoctorMainPage: React.FC = observer(() => {
    const classes = useStyles();
    const { userStore, dashboardDoctorProfileStore, modalsStore } = useStores();
    const { currentUser } = userStore;
    const { pendingReviews, fetchReviews, setCurrentModalState } =
        dashboardDoctorProfileStore;
    const { setModalIsOpen } = modalsStore;
    const matches = useMediaQuery((theme: Theme) => theme.breakpoints.down("xs"));

    const handleEditData = (name: ChangeDoctorProfileTypes): void => {
        setModalIsOpen("update-doctor-profile", true);
        setCurrentModalState(name);
    };

    if (!currentUser || !currentUser.additionalData) {
        return null;
    }

    return (
        <React.Fragment>
            <h1 className="visually-hidden">Мой профиль врача</h1>

            <div className={classes.userMain}>
                <Avatar
                    size={matches ? 88 : 140}
                    src={
                        currentUser.additionalData.photo
                            ? process.env.REACT_APP_API_BASE_URL +
                              currentUser.additionalData.photo
                            : undefined
                    }
                    alt={`${currentUser.name} аватар`}
                />
                <div className={classes.userInfo}>
                    <Typography
                        className={classes.userFullname}
                        variant="h3"
                        color="textSecondary"
                    >
                        {currentUser.surname} {currentUser.name}{" "}
                        {currentUser.middleName}
                    </Typography>
                    <div className={classes.userPrice}>
                        <Typography variant="h4" color="textSecondary">
                            Стоимость консультации:{" "}
                            {currentUser.additionalData.costOfConsultation} руб.
                        </Typography>
                        <EditIconButton
                            className={classes.editButton}
                            title="Стоимость консультации"
                            onEdit={() => handleEditData("cost")}
                        />
                    </div>
                    <div className={classes.userAbout}>
                        <Typography variant="body1" color="textSecondary">
                            О себе:{" "}
                            {currentUser.additionalData.about || <i>Не заполнено</i>}
                        </Typography>
                        <EditIconButton
                            className={classes.editButton}
                            title="О себе"
                            onEdit={() => handleEditData("about")}
                        />
                    </div>
                    <div className={classes.userRating}>
                        <Typography
                            className={classes.ratingTitle}
                            variant="h5"
                            color="textSecondary"
                        >
                            Рейтинг
                        </Typography>
                        <Typography variant="h4" color="textPrimary">
                            {currentUser.additionalData.rating
                                ? currentUser.additionalData.rating.toFixed(1)
                                : "-"}
                            /5.0
                        </Typography>
                    </div>
                </div>
            </div>

            <ProfileTabs
                reviews={currentUser.additionalData.reviews}
                education={currentUser.additionalData.education}
                workplaces={currentUser.additionalData.workplaces}
                specialties={currentUser.additionalData.specialties}
                countOfReviews={currentUser.additionalData.countOfReviews}
                pendingReviews={pendingReviews}
                onMoreReviews={fetchReviews}
                onEditEducation={() => handleEditData("education")}
                onEditWorkplaces={() => handleEditData("workplaces")}
            />

            <DialogUpdateDoctorProfile />
        </React.Fragment>
    );
});
