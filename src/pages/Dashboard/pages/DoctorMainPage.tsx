import React from "react";
import { observer } from "mobx-react";
import { Typography, makeStyles, Theme } from "@material-ui/core";

import { Avatar, ProfileTabs } from "components";
import { useStores } from "stores/useStore";

const useStyles = makeStyles((theme: Theme) => ({
    userMain: {
        display: "flex",
        alignItems: "center",
        marginBottom: 48,
        [theme.breakpoints.down("xs")]: {
            marginBottom: 24
        }
    },
    userInfo: {
        marginLeft: 32,
        [theme.breakpoints.down("xs")]: {
            marginLeft: 20
        }
    },
    userFullname: {
        marginBottom: 18,
        [theme.breakpoints.down("xs")]: {
            marginBottom: 12
        }
    },
    userRating: {
        display: "flex",
        alignItems: "center"
    },
    ratingTitle: {
        marginRight: 16
    }
}));

export const DoctorMainPage: React.FC = observer(() => {
    const classes = useStyles();
    const { userStore, dashboardDoctorProfile } = useStores();
    const { currentUser } = userStore;
    const { pendingReviews, fetchReviews } = dashboardDoctorProfile;

    if (!currentUser || !currentUser.additionalData) {
        return null;
    }

    return (
        <React.Fragment>
            <h1 className="visually-hidden">Мой профиль врача</h1>

            <div className={classes.userMain}>
                <Avatar
                    size={140}
                    src={
                        currentUser.additionalData.avatar
                            ? process.env.REACT_APP_API_BASE_URL +
                              currentUser.additionalData.avatar
                            : undefined
                    }
                    alt="Ваше фото"
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
                    <div className={classes.userRating}>
                        <Typography
                            className={classes.ratingTitle}
                            variant="h5"
                            color="textSecondary"
                        >
                            Рейтинг
                        </Typography>
                        <Typography variant="h4" color="textPrimary">
                            {currentUser.additionalData.rating?.toFixed(1)}/5.0
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
            />
        </React.Fragment>
    );
});
