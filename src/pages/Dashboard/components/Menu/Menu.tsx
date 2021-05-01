import React from "react";
import { makeStyles, Theme } from "@material-ui/core";

import { MenuItem } from "./MenuItem";
import { SettingsIcon } from "icons";
import { DOCTOR_MENU, PATIENT_MENU } from "utils/constants";

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

export const Menu: React.FC<IMenu> = ({ isDoctor }) => {
    const classes = useStyles();

    return (
        <aside className={classes.menu}>
            <div>
                {(isDoctor ? DOCTOR_MENU : PATIENT_MENU).map(item => (
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
