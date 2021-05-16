import React, { useState } from "react";
import { Tabs, Tab, makeStyles, Theme } from "@material-ui/core";

import { Button } from "components";
import { MedicalCardTab, AnalyzesTab, HistoryTab } from "./Tabs";
import { useStores } from "stores/useStore";

const useStyles = makeStyles((theme: Theme) => ({
    tabsWrapper: {
        display: "flex",
        alignItems: "center",
        marginBottom: 36,
        "& .MuiTabScrollButton-root.Mui-disabled": {
            opacity: 0.25
        },
        [theme.breakpoints.down(1100)]: {
            flexDirection: "column-reverse",
            alignItems: "start"
        }
    },
    tabs: {
        maxWidth: 686,
        width: "100%",
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
    },
    button: {
        marginLeft: 40,
        [theme.breakpoints.down(1100)]: {
            marginLeft: 0,
            marginBottom: 14
        }
    }
}));

export const PatientTabs: React.FC = () => {
    const classes = useStyles();
    const [currentTab, setCurrentTab] = useState(0);
    const { modalsStore } = useStores();
    const { setModalIsOpen } = modalsStore;

    const handleChange = (_: any, newValue: number): void => {
        setCurrentTab(newValue);
    };

    const handleAddAppointment = (): void => {
        setModalIsOpen("add-appointment", true);
    };

    return (
        <React.Fragment>
            <div className={classes.tabsWrapper}>
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
                    <Tab className={classes.tabItem} label="Назначения" />
                </Tabs>
                <Button
                    className={classes.button}
                    variant="outlined"
                    color="primary"
                    onClick={handleAddAppointment}
                >
                    Назначить
                </Button>
            </div>
            <div hidden={currentTab !== 0}>
                <MedicalCardTab />
            </div>
            <div hidden={currentTab !== 1}>
                <AnalyzesTab />
            </div>
            <div hidden={currentTab !== 2}>
                <HistoryTab />
            </div>
        </React.Fragment>
    );
};
