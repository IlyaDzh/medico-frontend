import React from "react";
import { makeStyles, Theme } from "@material-ui/core";

import { MenuItem } from "./MenuItem";
import {
    CalendarIcon,
    HistoryIcon,
    AnalyzesIcon,
    AppsIcon,
    CaseIcon,
    MessagesIcon,
    SettingsIcon
} from "icons";

interface IMenu {
    isDoctor?: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
    menu: {
        minWidth: 158,
        borderRight: `1px solid ${theme.palette.other!.main}`,
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    }
}));

const doctorMenu = [
    {
        icon: <AppsIcon />,
        label: "Главная",
        to: "/dashboard/main"
    },
    {
        icon: <CalendarIcon />,
        label: "График работы",
        to: "/dashboard/calendar"
    },
    {
        icon: <HistoryIcon />,
        label: "Журнал записей",
        to: "/dashboard/logbook"
    },
    {
        icon: <CaseIcon />,
        label: "Пациенты",
        to: "/dashboard/patients"
    },
    {
        icon: <MessagesIcon />,
        label: "Сообщения",
        to: "/dashboard/messages"
    }
];

const patientMenu = [
    {
        icon: <HistoryIcon />,
        label: "Мои записи",
        to: "/dashboard/alerts"
    },
    {
        icon: <CaseIcon />,
        label: "Назначения",
        to: "/dashboard/results"
    },
    {
        icon: <AnalyzesIcon />,
        label: "Мои анализы",
        to: "/dashboard/analyzes"
    },
    {
        icon: <AppsIcon />,
        label: "Мед карта",
        to: "/dashboard/medical-card"
    },
    {
        icon: <MessagesIcon />,
        label: "Сообщения",
        to: "/dashboard/messages"
    }
];

export const Menu: React.FC<IMenu> = ({ isDoctor }) => {
    const classes = useStyles();

    return (
        <aside className={classes.menu}>
            <div>
                {(isDoctor ? doctorMenu : patientMenu).map(item => (
                    <MenuItem key={item.label} {...item} />
                ))}
            </div>
            <MenuItem
                to="/dashboard/settings"
                icon={<SettingsIcon />}
                label="Настройки"
            />
        </aside>
    );
};
