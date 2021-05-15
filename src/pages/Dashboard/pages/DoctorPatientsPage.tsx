import React, { useEffect } from "react";
import { observer } from "mobx-react";
import {
    Typography,
    Tabs,
    Tab,
    useMediaQuery,
    makeStyles,
    Theme
} from "@material-ui/core";
import { DatePicker } from "@material-ui/pickers";

import { PatientItem } from "../components";
import { useStores } from "stores/useStore";
import { Loader } from "components";
import { formatDate } from "utils/formatDate";
import { GetPatientsType } from "stores/interfaces/Dashboard";

const useStyles = makeStyles((theme: Theme) => ({
    wrapper: {
        display: "flex",
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column-reverse"
        }
    },
    left: {
        width: "100%",
        marginRight: 32,
        [theme.breakpoints.down("sm")]: {
            marginRight: 0
        }
    },
    right: {
        [theme.breakpoints.down("sm")]: {
            marginBottom: 20
        }
    },
    tabs: {
        marginBottom: 28,
        borderBottom: `1px solid ${theme.palette.other!.main}`
    },
    tabItem: {
        textTransform: "unset",
        minWidth: "unset",
        fontSize: 18,
        fontWeight: 400,
        padding: "6px 18px",
        whiteSpace: "nowrap",
        [theme.breakpoints.down("xs")]: {
            padding: "6px 10px",
            fontSize: 14
        }
    },
    tabsIndicator: {
        height: 3
    },
    title: {
        marginBottom: 20
    }
}));

export const DoctorPatientsPage: React.FC = observer(() => {
    const classes = useStyles();
    const { dashboardPatientsStore } = useStores();
    const {
        patients,
        currentDate,
        currentType,
        pending,
        getPatients,
        setCurrentDate,
        setCurrentType
    } = dashboardPatientsStore;
    const matches = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));

    const date =
        new Date().getDate() === currentDate.getDate()
            ? "сегодня"
            : formatDate(currentDate.toString(), "dd MMMM");

    useEffect(() => {
        if (!patients.length) {
            getPatients();
        }
    }, [getPatients]); // eslint-disable-line

    const handleDateChange = (date: any): void => {
        setCurrentDate(date);
    };

    const handleChange = (_: any, value: GetPatientsType): void => {
        setCurrentType(value);
    };

    return (
        <div className={classes.wrapper}>
            <article className={classes.left}>
                <Tabs
                    TabIndicatorProps={{ className: classes.tabsIndicator }}
                    className={classes.tabs}
                    value={currentType}
                    onChange={handleChange}
                    indicatorColor="primary"
                >
                    <Tab value="new" className={classes.tabItem} label="Новые" />
                    <Tab value="done" className={classes.tabItem} label="История" />
                </Tabs>
                <Typography
                    className={classes.title}
                    variant="h5"
                    color="textSecondary"
                >
                    Пациенты на {date}
                </Typography>
                {!pending ? (
                    patients.length > 0 ? (
                        patients.map(consultation => (
                            <PatientItem
                                key={consultation.id}
                                consultation={consultation}
                            />
                        ))
                    ) : (
                        <Typography variant="body1">
                            Записей не приём не найдено
                        </Typography>
                    )
                ) : (
                    <Loader level={3} isCenter />
                )}
            </article>
            <article className={classes.right}>
                <h5 className="visually-hidden">Выбор времени</h5>
                <DatePicker
                    variant={matches ? "inline" : "static"}
                    inputVariant="outlined"
                    color="secondary"
                    value={currentDate}
                    onChange={handleDateChange}
                    disableToolbar
                    autoOk
                />
            </article>
        </div>
    );
});
