import React, { useState } from "react";
import { Tabs, Tab, makeStyles, Theme } from "@material-ui/core";

import { CommentsList } from "./CommentsList";
import { ExperienceList } from "./ExperienceList";
import { DirectionsList } from "./DirectionsList";

const useStyles = makeStyles((theme: Theme) => ({
    profileTabs: {
        "& .MuiTabScrollButton-root.Mui-disabled": {
            display: "none"
        }
    },
    tabs: {
        marginBottom: 36,
        borderBottom: `1px solid ${theme.palette.other!.main}`
    },
    tabItem: {
        textTransform: "unset",
        minWidth: "unset",
        fontSize: 18,
        fontWeight: 400,
        padding: "6px 28px",
        whiteSpace: "nowrap",
        [theme.breakpoints.down("xs")]: {
            padding: "6px 16px"
        }
    },
    tabsIndicator: {
        height: 3
    }
}));

const profileData = {
    comments: [
        {
            id: "1",
            fullname: "Имя Фамилия",
            rating: 5,
            text:
                "Таким образом реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании существенных финансовых и административных условий.",
            date: "Ноябрь 2020"
        },
        {
            id: "2",
            fullname: "Имя Фамилия",
            rating: 4,
            text: "Таким образом реализация намеченных плановых заданий",
            date: "Ноябрь 2020"
        },
        {
            id: "3",
            fullname: "Имя Фамилия",
            rating: 3,
            text: "Таким образом реализация намеченных плановых заданий",
            date: "Ноябрь 2020"
        }
    ],
    education: [
        {
            id: "1",
            date: "2012",
            text: "Повышение квалификации там-то"
        },
        {
            id: "2",
            date: "2001",
            text: "Такой-то университет, г. Алматы"
        },
        {
            id: "3",
            date: "1999",
            text: "Такой-то колледж, г. Алматы"
        }
    ],
    experience: [
        {
            id: "1",
            date: "2012",
            text: "Частная практика ИП"
        },
        {
            id: "2",
            date: "2001-2012",
            text: "Поликлиника №1 г. Алматы"
        }
    ],
    directions: [
        "Острые респираторные вирусные инфекции",
        "Вегето-сосудистая дистония",
        "Хронический бронхит",
        "Язвенная болезнь желудка и двенадцатиперстной кишки",
        "Хронический колит и энтероколит",
        "Хроническая болезнь почек"
    ]
};

export const ProfileTabs: React.FC = () => {
    const classes = useStyles();
    const [currentTab, setCurrentTab] = useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setCurrentTab(newValue);
    };

    return (
        <div className={classes.profileTabs}>
            <Tabs
                TabIndicatorProps={{ className: classes.tabsIndicator }}
                className={classes.tabs}
                value={currentTab}
                onChange={handleChange}
                indicatorColor="primary"
                variant="scrollable"
                scrollButtons="on"
            >
                <Tab className={classes.tabItem} label="Отзывы" />
                <Tab className={classes.tabItem} label="Образование" />
                <Tab className={classes.tabItem} label="Опыт работы" />
                <Tab className={classes.tabItem} label="Основные направления" />
            </Tabs>
            <div hidden={currentTab !== 0}>
                <CommentsList comments={profileData.comments} />
            </div>
            <div hidden={currentTab !== 1}>
                <ExperienceList list={profileData.education} />
            </div>
            <div hidden={currentTab !== 2}>
                <ExperienceList list={profileData.experience} />
            </div>
            <div hidden={currentTab !== 3}>
                <DirectionsList directions={profileData.directions} />
            </div>
        </div>
    );
};
