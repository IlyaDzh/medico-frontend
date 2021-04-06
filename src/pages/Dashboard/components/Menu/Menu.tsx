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
        position: "absolute",
        left: 0,
        height: "100%",
        width: 158,
        borderRight: `1px solid ${theme.palette.other!.main}`,
        backgroundColor: "#fff"
    }
}));

const doctorMenu = [
    {
        icon: <AppsIcon />,
        label: "Главная"
    },
    {
        icon: <CalendarIcon />,
        label: "График работы"
    },
    {
        icon: <HistoryIcon />,
        label: "Журнал записей"
    },
    {
        icon: <CaseIcon />,
        label: "Пациенты"
    },
    {
        icon: <MessagesIcon />,
        label: "Сообщения"
    },
    {
        icon: <SettingsIcon />,
        label: "Настройки"
    }
];

const patientMenu = [
    {
        icon: <HistoryIcon />,
        label: "Мои записи"
    },
    {
        icon: <CaseIcon />,
        label: "Назначения"
    },
    {
        icon: <AnalyzesIcon />,
        label: "Мои анализы"
    },
    {
        icon: <AppsIcon />,
        label: "Мед карта"
    },
    {
        icon: <MessagesIcon />,
        label: "Сообщения"
    },
    {
        icon: <SettingsIcon />,
        label: "Настройки"
    }
];

export const Menu: React.FC<IMenu> = ({ isDoctor }) => {
    const classes = useStyles();

    return (
        <aside className={classes.menu}>
            {isDoctor
                ? doctorMenu.map(item => (
                      <MenuItem icon={item.icon} label={item.label} />
                  ))
                : patientMenu.map(item => (
                      <MenuItem icon={item.icon} label={item.label} />
                  ))}
        </aside>
    );
};
