import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { intervalToDuration } from "date-fns";
import { Typography, makeStyles } from "@material-ui/core";

import { formatDuration } from "utils/formatDuration";

interface IConsultationTimer {
    toDate: Date;
    isHistory: boolean;
}

const useStyles = makeStyles(() => ({
    greenTime: {
        color: "#2ab841"
    },
    redTime: {
        color: "#e34242"
    }
}));

export const ConsultationTimer: React.FC<IConsultationTimer> = ({
    toDate,
    isHistory
}) => {
    const classes = useStyles();
    const [durationTime, setDurationTime] = useState<string>("Ожидание...");
    const [isActive, setIsActive] = useState<boolean>(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (new Date(toDate).getTime() < new Date().getTime()) {
                setIsActive(true);
                clearInterval(interval);
                return;
            }

            const duration = intervalToDuration({
                start: new Date(toDate),
                end: new Date()
            });

            const formatedDuration = formatDuration(duration);

            setDurationTime(formatedDuration);
        }, 1000);

        if (isHistory) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, []); // eslint-disable-line

    return (
        <Typography
            className={clsx(
                isHistory && classes.redTime,
                isActive && classes.greenTime
            )}
            component="span"
            variant="h6"
            color="textSecondary"
        >
            {isHistory
                ? "Консультация закончилась"
                : isActive
                ? "Консультация уже идёт"
                : durationTime}
        </Typography>
    );
};
