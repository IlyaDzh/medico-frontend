import React from "react";
import { makeStyles, Theme } from "@material-ui/core";

import { MenuItem } from "./MenuItem";
import { MessagesIcon, SettingsIcon } from "icons";
import { DOCTOR_MENU, PATIENT_MENU } from "utils/constants";

interface IMenu {
    isDoctor?: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
    menu: {
        minWidth: 158,
        borderRight: `1px solid ${theme.palette.other!.main}`,
        backgroundColor: "#fff"
    }
}));

export const Menu: React.FC<IMenu> = ({ isDoctor }) => {
    const classes = useStyles();

    return (
        <aside className={classes.menu}>
            {(isDoctor ? DOCTOR_MENU : PATIENT_MENU).map(item => (
                <MenuItem key={item.label} {...item} />
            ))}
            <MenuItem
                to="/dashboard/chat"
                icon={<MessagesIcon />}
                label="Сообщения"
            />
            <MenuItem
                to="/dashboard/settings"
                icon={<SettingsIcon />}
                label="Настройки"
            />
        </aside>
    );
};
