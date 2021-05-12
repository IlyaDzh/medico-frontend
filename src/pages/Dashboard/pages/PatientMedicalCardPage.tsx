import React from "react";
import clsx from "clsx";
import { observer } from "mobx-react";
import { Typography, makeStyles, Theme } from "@material-ui/core";

import { AdditionalDataItem, EditIconButton } from "../components";
import { Avatar, DialogUpdateMedicalCard } from "components";
import { useStores } from "stores/useStore";
import { AdditionalTypes } from "stores/interfaces/Dashboard";
import { getAge } from "utils/getAge";
import { getDescriptionByIMT } from "utils/getDescriptionByIMT";
import {
    BloodIcon,
    BadHabitsIcon,
    AllergiesIcon,
    ChronicDiseasesIcon,
    OperationsIcon,
    TransfusionIcon
} from "icons";

const useStyles = makeStyles((theme: Theme) => ({
    title: {
        marginBottom: 24
    },
    userMain: {
        display: "flex",
        alignItems: "center",
        marginBottom: 66,
        [theme.breakpoints.down("xs")]: {
            marginBottom: 42
        }
    },
    userInfo: {
        marginLeft: 42,
        [theme.breakpoints.down("xs")]: {
            marginLeft: 24
        }
    },
    userFullname: {
        marginBottom: 4,
        [theme.breakpoints.down("xs")]: {
            marginBottom: 8
        }
    },
    userParams: {
        display: "flex",
        alignItems: "center",
        margin: "0 -8px 40px",
        maxWidth: 702,
        [theme.breakpoints.down("xs")]: {
            display: "block",
            margin: "0 0 24px"
        }
    },
    userParamsFlex: {
        display: "flex",
        width: "50%",
        margin: "0 8px",
        "&>div:first-child": {
            marginRight: 16,
            [theme.breakpoints.down("xs")]: {
                marginRight: 24
            }
        },
        [theme.breakpoints.down("xs")]: {
            width: "100%",
            margin: "0 0 12px"
        }
    },
    paramsItem: {
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        width: "50%",
        height: 64,
        borderRadius: 8,
        border: `1px solid ${theme.palette.other!.main}`,
        background: "#fff"
    },
    paramsItemLarge: {
        width: "50%",
        margin: "0 8px",
        [theme.breakpoints.down("xs")]: {
            width: "100%",
            margin: 0
        }
    },
    paramsItemContent: {
        textAlign: "center"
    },
    editButton: {
        position: "absolute",
        top: 4,
        right: 4
    },
    userAdditional: {
        display: "flex",
        maxWidth: 702,
        margin: "0 -8px",
        [theme.breakpoints.down("xs")]: {
            display: "block",
            margin: 0
        }
    },
    userAdditionalList: {
        margin: "0 8px",
        width: "50%",
        [theme.breakpoints.down("xs")]: {
            margin: "0 0 12px",
            width: "100%"
        }
    }
}));

export const PatientMedicalCardPage: React.FC = observer(() => {
    const classes = useStyles();
    const { userStore, modalsStore, dashboardMedicalCardStore } = useStores();
    const { currentUser } = userStore;
    const { setModalIsOpen } = modalsStore;
    const { setCurrentModalState } = dashboardMedicalCardStore;

    if (!currentUser || !currentUser.additionalData) {
        return null;
    }

    const IMT = (
        currentUser.additionalData.weight /
        Math.pow(currentUser.additionalData.height / 100, 2)
    ).toFixed(2);

    const handleEditData = (name: AdditionalTypes): void => {
        setModalIsOpen("update-medical-card", true);
        setCurrentModalState(name);
    };

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
                    <Typography className={classes.userFullname} variant="body1">
                        {currentUser.surname} {currentUser.name}{" "}
                        {currentUser.middleName}
                    </Typography>
                    <Typography variant="h6" color="textPrimary">
                        {getAge(currentUser.birthDate)} лет
                    </Typography>
                </div>
            </div>

            <div className={classes.userParams}>
                <div className={classes.userParamsFlex}>
                    <div className={classes.paramsItem}>
                        <span className={classes.paramsItemContent}>
                            <Typography variant="h6">Рост</Typography>
                            <Typography variant="body2" color="primary">
                                {currentUser.additionalData.height} см
                            </Typography>
                        </span>
                        <div className={classes.editButton}>
                            <EditIconButton
                                title="Рост"
                                onEdit={() => handleEditData("height-weight")}
                            />
                        </div>
                    </div>
                    <div className={classes.paramsItem}>
                        <span className={classes.paramsItemContent}>
                            <Typography variant="h6">Вес</Typography>
                            <Typography variant="body2" color="primary">
                                {currentUser.additionalData.weight} кг
                            </Typography>
                        </span>
                        <div className={classes.editButton}>
                            <EditIconButton
                                title="Рост"
                                onEdit={() => handleEditData("height-weight")}
                            />
                        </div>
                    </div>
                </div>
                <div className={clsx(classes.paramsItem, classes.paramsItemLarge)}>
                    <Typography variant="h5" color="textSecondary">
                        {getDescriptionByIMT(Number(IMT))}
                    </Typography>
                    <span className={classes.paramsItemContent}>
                        <Typography variant="h6">ИМТ</Typography>
                        <Typography variant="body2" color="primary">
                            {IMT}
                        </Typography>
                    </span>
                </div>
            </div>

            <div className={classes.userAdditional}>
                <div className={classes.userAdditionalList}>
                    <AdditionalDataItem
                        title="Группа крови"
                        data={`${currentUser.additionalData.bloodType} группа, ${currentUser.additionalData.RHFactor}`}
                        icon={<BloodIcon />}
                        onEdit={() => handleEditData("blood-type")}
                    />
                    <AdditionalDataItem
                        title="Вредные привычки"
                        data={[
                            `Курение - ${currentUser.additionalData.isSmoker}`,
                            `Алкоголь - ${currentUser.additionalData.isAlcoholic}`,
                            currentUser.additionalData.badHabits
                        ]}
                        icon={<BadHabitsIcon />}
                        onEdit={() => handleEditData("bad-habits")}
                    />
                    <AdditionalDataItem
                        title="Аллергия"
                        data={currentUser.additionalData.allergies}
                        icon={<AllergiesIcon />}
                        onEdit={() => handleEditData("allergies")}
                    />
                </div>
                <div className={classes.userAdditionalList}>
                    <AdditionalDataItem
                        title="Хронические заболевания"
                        data={currentUser.additionalData.chronicDiseases}
                        icon={<ChronicDiseasesIcon />}
                        onEdit={() => handleEditData("chronic-diseases")}
                    />
                    <AdditionalDataItem
                        title="Операции"
                        data={currentUser.additionalData.operations}
                        icon={<OperationsIcon />}
                        onEdit={() => handleEditData("operations")}
                    />
                    <AdditionalDataItem
                        title="Переливание крови"
                        data={currentUser.additionalData.bloodTransfusion}
                        icon={<TransfusionIcon />}
                        onEdit={() => handleEditData("blood-transfusion")}
                    />
                </div>
            </div>

            <DialogUpdateMedicalCard />
        </React.Fragment>
    );
});
