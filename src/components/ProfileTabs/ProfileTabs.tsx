import React, { useState } from "react";
import { Tabs, Tab, makeStyles, Theme } from "@material-ui/core";

import { CommentsList } from "./CommentsList";
import { ExperienceList } from "./ExperienceList";
import { SpecialtiesList } from "./SpecialtiesList";
import { IDoctor } from "stores/interfaces/IDoctorStore";

interface IProfileTabs {
    currentDoctor: IDoctor;
}

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

export const ProfileTabs: React.FC<IProfileTabs> = ({ currentDoctor }) => {
    const classes = useStyles();
    const [currentTab, setCurrentTab] = useState(0);

    const handleChange = (_: any, newValue: number): void => {
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
                <CommentsList reviews={currentDoctor.reviews} />
            </div>
            <div hidden={currentTab !== 1}>
                <ExperienceList list={currentDoctor.education} />
            </div>
            <div hidden={currentTab !== 2}>
                <ExperienceList list={currentDoctor.workplaces} />
            </div>
            <div hidden={currentTab !== 3}>
                <SpecialtiesList specialties={currentDoctor.specialties} />
            </div>
        </div>
    );
};
