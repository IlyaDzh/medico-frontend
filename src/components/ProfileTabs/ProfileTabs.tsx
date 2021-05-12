import React, { useState } from "react";
import { Tabs, Tab, makeStyles, Theme } from "@material-ui/core";

import { CommentsList } from "./CommentsList";
import { ExperienceList } from "./ExperienceList";
import { SpecialtiesList } from "./SpecialtiesList";
import { Review } from "stores/interfaces/IDoctorStore";
import { Specialty } from "stores/interfaces/ISpecialtiesStore";

interface IProfileTabs {
    reviews: Review[];
    education: string[];
    workplaces: string[];
    specialties: Specialty[];
    countOfReviews: number;
    pendingReviews: boolean;
    onMoreReviews: () => void;
}

const useStyles = makeStyles((theme: Theme) => ({
    profileTabs: {
        "& .MuiTabScrollButton-root.Mui-disabled": {
            opacity: 0.25
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
            padding: "6px 10px",
            fontSize: 14
        }
    },
    tabsIndicator: {
        height: 3
    }
}));

export const ProfileTabs: React.FC<IProfileTabs> = ({
    reviews,
    education,
    workplaces,
    specialties,
    countOfReviews,
    pendingReviews,
    onMoreReviews
}) => {
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
                <CommentsList
                    reviews={reviews}
                    count={countOfReviews}
                    pending={pendingReviews}
                    onMore={onMoreReviews}
                />
            </div>
            <div hidden={currentTab !== 1}>
                <ExperienceList list={education} />
            </div>
            <div hidden={currentTab !== 2}>
                <ExperienceList list={workplaces} />
            </div>
            <div hidden={currentTab !== 3}>
                <SpecialtiesList specialties={specialties} />
            </div>
        </div>
    );
};
