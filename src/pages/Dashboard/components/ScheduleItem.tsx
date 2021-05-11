import React from "react";
import clsx from "clsx";
import {
    FormControl,
    FormLabel,
    MenuItem,
    makeStyles,
    Theme
} from "@material-ui/core";

import { Select } from "components";

interface IScheduleItem {
    title: string;
    isWeekend?: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
    formControl: {
        padding: "0 20px 40px",
        width: "33%",
        [theme.breakpoints.down(820)]: {
            width: "50%"
        },
        [theme.breakpoints.down("xs")]: {
            width: "100%",
            padding: 0,
            marginBottom: 20
        }
    },
    formInsideControl: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        marginBottom: 8,
        "&:last-child": {
            marginBottom: 0
        }
    },
    formLabel: {
        color: theme.palette.text.secondary,
        fontSize: 16,
        fontWeight: 500,
        marginBottom: 12
    },
    formLabelWeekend: {
        color: `${theme.palette.primary.dark} !important`
    },
    selectLabel: {
        width: 28,
        fontSize: 18,
        marginRight: 8
    },
    select: {
        width: "100%"
    }
}));

export const ScheduleItem: React.FC<IScheduleItem> = ({ title, isWeekend }) => {
    const classes = useStyles();

    return (
        <FormControl className={classes.formControl} component="fieldset">
            <FormLabel
                className={clsx(
                    classes.formLabel,
                    isWeekend && classes.formLabelWeekend
                )}
                component="legend"
            >
                {title}
            </FormLabel>
            <FormControl className={classes.formInsideControl}>
                <label className={classes.selectLabel} htmlFor="from-time">
                    с
                </label>
                <Select labelId="from-time" className={classes.select} value="10">
                    <MenuItem value="8">8:00</MenuItem>
                    <MenuItem value="9">9:00</MenuItem>
                    <MenuItem value="10">10:00</MenuItem>
                    <MenuItem value="11">11:00</MenuItem>
                    <MenuItem value="12">12:00</MenuItem>
                    <MenuItem value="13">13:00</MenuItem>
                    <MenuItem value="14">14:00</MenuItem>
                    <MenuItem value="15">15:00</MenuItem>
                    <MenuItem value="16">16:00</MenuItem>
                    <MenuItem value="17">17:00</MenuItem>
                    <MenuItem value="18">18:00</MenuItem>
                    <MenuItem value="19">19:00</MenuItem>
                    <MenuItem value="20">20:00</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formInsideControl}>
                <label className={classes.selectLabel} htmlFor="to-time">
                    по
                </label>
                <Select labelId="to-time" className={classes.select} value="13">
                    <MenuItem value="8">8:00</MenuItem>
                    <MenuItem value="9">9:00</MenuItem>
                    <MenuItem value="10">10:00</MenuItem>
                    <MenuItem value="11">11:00</MenuItem>
                    <MenuItem value="12">12:00</MenuItem>
                    <MenuItem value="13">13:00</MenuItem>
                    <MenuItem value="14">14:00</MenuItem>
                    <MenuItem value="15">15:00</MenuItem>
                    <MenuItem value="16">16:00</MenuItem>
                    <MenuItem value="17">17:00</MenuItem>
                    <MenuItem value="18">18:00</MenuItem>
                    <MenuItem value="19">19:00</MenuItem>
                    <MenuItem value="20">20:00</MenuItem>
                </Select>
            </FormControl>
        </FormControl>
    );
};
