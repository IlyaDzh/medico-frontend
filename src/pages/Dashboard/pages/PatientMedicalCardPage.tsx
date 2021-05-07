import React from "react";
import clsx from "clsx";
import { observer } from "mobx-react";
import { Typography, makeStyles, Theme } from "@material-ui/core";

import { AdditionalDataItem } from "../components";
import { Avatar } from "components";
import { useStores } from "stores/useStore";

const useStyles = makeStyles((theme: Theme) => ({
    title: {
        marginBottom: 24
    },
    userMain: {
        display: "flex",
        alignItems: "center",
        marginBottom: 66
    },
    userInfo: {
        marginLeft: 42
    },
    userAdditional: {
        maxWidth: 702
    },
    userParams: {
        display: "flex",
        alignItems: "center",
        margin: "0 -20px 40px"
    },
    paramsItem: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        width: "25%",
        height: 64,
        borderRadius: 8,
        border: `1px solid ${theme.palette.other!.main}`,
        background: "#fff",
        margin: "0 20px"
    },
    paramsItemLarge: {
        width: "50%"
    },
    paramsItemContent: {
        textAlign: "center"
    },
    userAdditionalList: {
        margin: "0 -24px"
    }
}));

export const PatientMedicalCardPage: React.FC = observer(() => {
    const classes = useStyles();
    const { userStore } = useStores();
    const { currentUser } = userStore;

    if (!currentUser || !currentUser.additionalData) {
        return null;
    }

    return (
        <React.Fragment>
            <Typography className={classes.title} variant="h4">
                Моя медицинская карта
            </Typography>
            <div className={classes.userMain}>
                <Avatar
                    size={88}
                    src={
                        currentUser.additionalData.avatar
                            ? process.env.REACT_APP_API_BASE_URL +
                              currentUser.additionalData.avatar
                            : undefined
                    }
                    alt="Ваше фото"
                />
                <div className={classes.userInfo}>
                    <Typography variant="body1">
                        {currentUser.surname} {currentUser.name}{" "}
                        {currentUser.middleName}
                    </Typography>
                    <Typography variant="h6" color="textPrimary">
                        {currentUser.birthDate}
                    </Typography>
                </div>
            </div>
            <div className={classes.userAdditional}>
                <div className={classes.userParams}>
                    <div className={classes.paramsItem}>
                        <span className={classes.paramsItemContent}>
                            <Typography variant="h6">Рост</Typography>
                            <Typography variant="body2" color="primary">
                                {currentUser.additionalData.height} см
                            </Typography>
                        </span>
                    </div>
                    <div className={classes.paramsItem}>
                        <span className={classes.paramsItemContent}>
                            <Typography variant="h6">Вес</Typography>
                            <Typography variant="body2" color="primary">
                                {currentUser.additionalData.weight} кг
                            </Typography>
                        </span>
                    </div>
                    <div
                        className={clsx(classes.paramsItem, classes.paramsItemLarge)}
                    >
                        <Typography variant="h5" color="textSecondary">
                            Ваш ИМТ в норме
                        </Typography>
                        <span className={classes.paramsItemContent}>
                            <Typography variant="h6">ИМТ</Typography>
                            <Typography variant="body2" color="primary">
                                24,5
                            </Typography>
                        </span>
                    </div>
                </div>
                <div className={classes.userAdditionalList}>
                    <AdditionalDataItem
                        title="Группа крови"
                        data={`${currentUser.additionalData.bloodType} группа`}
                    />
                    <AdditionalDataItem
                        title="Группа крови"
                        data={`${currentUser.additionalData.bloodType} группа`}
                    />
                    <AdditionalDataItem
                        title="Группа крови"
                        data={`${currentUser.additionalData.bloodType} группа`}
                    />
                </div>
            </div>
        </React.Fragment>
    );
});
