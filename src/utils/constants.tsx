import {
    CalendarIcon,
    HistoryIcon,
    AnalyzesIcon,
    AppsIcon,
    CaseIcon,
    MessagesIcon,
    SettingsIcon
} from "icons";

export const MAX_MESSAGE_COUNT = 300;

export const DOCTOR_MENU = [
    {
        icon: <AppsIcon />,
        label: "Главная",
        to: "/dashboard/main"
    },
    {
        icon: <CalendarIcon />,
        label: "График работы",
        to: "/dashboard/schedule"
    },
    {
        icon: <CaseIcon />,
        label: "Пациенты",
        to: "/dashboard/patients"
    },
    {
        icon: <MessagesIcon />,
        label: "Сообщения",
        to: "/dashboard/chat"
    },
    {
        icon: <SettingsIcon />,
        label: "Настройки",
        to: "/dashboard/settings"
    }
];

export const PATIENT_MENU = [
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
        to: "/dashboard/chat"
    },
    {
        icon: <SettingsIcon />,
        label: "Настройки",
        to: "/dashboard/settings"
    }
];
