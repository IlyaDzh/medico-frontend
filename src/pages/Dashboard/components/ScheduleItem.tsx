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
    scheduleFrom: number;
    scheduleTo: number;
    isWeekend?: boolean;
    onFromChange: (time: number) => void;
    onToChange: (time: number) => void;
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

export const ScheduleItem: React.FC<IScheduleItem> = ({
    title,
    scheduleFrom,
    scheduleTo,
    isWeekend,
    onFromChange,
    onToChange
}) => {
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
                <Select
                    labelId="from-time"
                    className={classes.select}
                    value={scheduleFrom}
                    onChange={event => onFromChange(Number(event.target.value))}
                >
                    {new Array(13).fill(undefined).map((_, index) => (
                        <MenuItem
                            value={index + 8}
                            disabled={scheduleTo < index + 8}
                        >
                            {index + 8}:00
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl className={classes.formInsideControl}>
                <label className={classes.selectLabel} htmlFor="to-time">
                    по
                </label>
                <Select
                    labelId="to-time"
                    className={classes.select}
                    value={scheduleTo}
                    onChange={event => onToChange(Number(event.target.value))}
                >
                    {new Array(13).fill(undefined).map((_, index) => (
                        <MenuItem
                            value={index + 8}
                            disabled={scheduleFrom > index + 8}
                        >
                            {index + 8}:00
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </FormControl>
    );
};
