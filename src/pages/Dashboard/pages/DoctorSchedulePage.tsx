import React from "react";
import { observer } from "mobx-react";
import { Typography, Paper, makeStyles, Theme } from "@material-ui/core";

import { Button } from "components";
import { useStores } from "stores/useStore";
import { ScheduleItem } from "../components";

const useStyles = makeStyles((theme: Theme) => ({
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
    const {} = useStores();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        // updateUserInfo();
    };

    return (
        <React.Fragment>
            <Typography className={classes.title} variant="h4">
                График работы
            </Typography>

            <Paper className={classes.scheduleWrapper} variant="outlined">
                <form onSubmit={handleSubmit}>
                    <div className={classes.formFields}>
                        <ScheduleItem title="Понедельник" />
                        <ScheduleItem title="Вторник" />
                        <ScheduleItem title="Среда" />
                        <ScheduleItem title="Четверг" />
                        <ScheduleItem title="Пятница" />
                        <ScheduleItem title="Суббота" isWeekend />
                        <ScheduleItem title="Воскресенье" isWeekend />
                    </div>
                    <Button
                        type="submit"
                        variant="contained"
                        // disabled={pending}
                        // isLoaded={pending}
                    >
                        Сохранить изменения
                    </Button>
                </form>
            </Paper>
        </React.Fragment>
    );
});
