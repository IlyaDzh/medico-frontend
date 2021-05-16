import React from "react";
import clsx from "clsx";
import { observer } from "mobx-react";
import { Typography, makeStyles, Theme } from "@material-ui/core";

import { AdditionalDataItem } from "../../MedicalCard";
import { useStores } from "stores/useStore";
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
    symptoms: {
        maxWidth: 686,
        marginBottom: 40,
        padding: 16,
        borderRadius: 8,
        border: `1px solid ${theme.palette.other!.main}`,
        background: "#fff",
        [theme.breakpoints.down("xs")]: {
            marginBottom: 24
        }
    },
    symptomsTitle: {
        fontSize: 16,
        marginBottom: 8
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

export const MedicalCardTab: React.FC = observer(() => {
    const classes = useStyles();
    const { dashboardPatientInfoStore } = useStores();
    const { patient, consultation } = dashboardPatientInfoStore;

    if (!patient || !consultation) {
        return null;
    }

    const IMT = (patient.weight / Math.pow(patient.height / 100, 2)).toFixed(2);

    return (
        <React.Fragment>
            <div className={classes.symptoms}>
                <Typography className={classes.symptomsTitle} variant="body2">
                    Симптомы
                </Typography>
                <Typography variant="body1" color="textSecondary">
                    {consultation.symptoms}
                </Typography>
            </div>

            <div className={classes.userParams}>
                <div className={classes.userParamsFlex}>
                    <div className={classes.paramsItem}>
                        <span className={classes.paramsItemContent}>
                            <Typography variant="h6">Рост</Typography>
                            <Typography variant="body2" color="primary">
                                {patient.height} см
                            </Typography>
                        </span>
                    </div>
                    <div className={classes.paramsItem}>
                        <span className={classes.paramsItemContent}>
                            <Typography variant="h6">Вес</Typography>
                            <Typography variant="body2" color="primary">
                                {patient.weight} кг
                            </Typography>
                        </span>
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
                        data={`${patient.bloodType} группа, ${patient.RHFactor}`}
                        icon={<BloodIcon />}
                    />
                    <AdditionalDataItem
                        title="Вредные привычки"
                        data={[
                            `Курение - ${patient.isSmoker}`,
                            `Алкоголь - ${patient.isAlcoholic}`,
                            patient.badHabits
                        ]}
                        icon={<BadHabitsIcon />}
                    />
                    <AdditionalDataItem
                        title="Аллергия"
                        data={patient.allergies}
                        icon={<AllergiesIcon />}
                    />
                </div>
                <div className={classes.userAdditionalList}>
                    <AdditionalDataItem
                        title="Хронические заболевания"
                        data={patient.chronicDiseases}
                        icon={<ChronicDiseasesIcon />}
                    />
                    <AdditionalDataItem
                        title="Операции"
                        data={patient.operations}
                        icon={<OperationsIcon />}
                    />
                    <AdditionalDataItem
                        title="Переливание крови"
                        data={patient.bloodTransfusion}
                        icon={<TransfusionIcon />}
                    />
                </div>
            </div>
        </React.Fragment>
    );
});
