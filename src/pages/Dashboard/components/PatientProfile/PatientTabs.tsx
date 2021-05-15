import React, { useState } from "react";
import { Tabs, Tab, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
    patientTabs: {
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

export const PatientTabs: React.FC = () => {
    const classes = useStyles();
    const [currentTab, setCurrentTab] = useState(0);

    const handleChange = (_: any, newValue: number): void => {
        setCurrentTab(newValue);
    };

    return (
        <div className={classes.patientTabs}>
            <Tabs
                TabIndicatorProps={{ className: classes.tabsIndicator }}
                className={classes.tabs}
                value={currentTab}
                onChange={handleChange}
                indicatorColor="primary"
                variant="scrollable"
                scrollButtons="on"
            >
                <Tab className={classes.tabItem} label="Мед. карта" />
                <Tab className={classes.tabItem} label="Анализы" />
                <Tab className={classes.tabItem} label="История" />
                <Tab className={classes.tabItem} label="Назначения" />
            </Tabs>
            <div hidden={currentTab !== 0}>Мед. карта</div>
            <div hidden={currentTab !== 1}>Анализы</div>
            <div hidden={currentTab !== 2}>История</div>
            <div hidden={currentTab !== 3}>Назначения</div>
        </div>
    );
};
