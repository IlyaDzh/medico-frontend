import React, { useEffect } from "react";
import { observer } from "mobx-react";
import { Typography, Paper, makeStyles } from "@material-ui/core";

import { Button, Loader, SubmissionResult } from "components";
import { useStores } from "stores/useStore";
import { ScheduleItem } from "../components";

const useStyles = makeStyles(() => ({
    title: {
        marginBottom: 24
    },
    scheduleWrapper: {
        borderRadius: 8,
        padding: 30,
        maxWidth: 920
    },
    formFields: {
        marginBottom: 20,
        display: "flex",
        flexWrap: "wrap"
    }
}));

export const DoctorSchedulePage: React.FC = observer(() => {
    const classes = useStyles();
    const { dashboardScheduleStore } = useStores();
    const {
        schedule,
        pendingGetSchedule,
        pendingSubmit,
        submissionSuccess,
        submissionError,
        fetchSchedule,
        setSchedule,
        changeSchedule,
        resetSubmissionResult
    } = dashboardScheduleStore;

    useEffect(() => {
        if (pendingGetSchedule || schedule.length > 0) {
            return;
        }

        fetchSchedule();
    }, [schedule, fetchSchedule]); // eslint-disable-line

    useEffect(() => {
        return () => resetSubmissionResult();
    }, [resetSubmissionResult]);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        changeSchedule();
    };

    return (
        <React.Fragment>
            <Typography className={classes.title} variant="h4">
                График работы
            </Typography>

            <Paper className={classes.scheduleWrapper} variant="outlined">
                {pendingGetSchedule || schedule.length === 0 ? (
                    <Loader level={2.5} isCenter />
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div className={classes.formFields}>
                            {[
                                "Понедельник",
                                "Вторник",
                                "Среда",
                                "Четверг",
                                "Пятница",
                                "Суббота",
                                "Воскресенье"
                            ].map((title, index) => (
                                <ScheduleItem
                                    key={title}
                                    title={title}
                                    scheduleFrom={schedule[index].from}
                                    scheduleTo={schedule[index].to}
                                    onFromChange={time =>
                                        setSchedule(time, index, "from")
                                    }
                                    onToChange={time =>
                                        setSchedule(time, index, "to")
                                    }
                                    isWeekend={index === 5 || index === 6}
                                />
                            ))}
                        </div>
                        <SubmissionResult>{submissionSuccess}</SubmissionResult>
                        <SubmissionResult isError>
                            {submissionError}
                        </SubmissionResult>
                        <Button
                            type="submit"
                            variant="contained"
                            disabled={pendingSubmit}
                            isLoaded={pendingSubmit}
                        >
                            Сохранить изменения
                        </Button>
                    </form>
                )}
            </Paper>
        </React.Fragment>
    );
});
