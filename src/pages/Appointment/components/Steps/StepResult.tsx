import React from "react";
import { observer } from "mobx-react";
import { Typography, makeStyles, Theme } from "@material-ui/core";

import { Button } from "components";
import { CalendarIcon, ClockIcon, AccountEnvelopeIcon } from "icons";
import { useStores } from "stores/useStore";
import { formatDate } from "utils/formatDate";

const useStyles = makeStyles((theme: Theme) => ({
    resultWrapper: {
        maxWidth: 489,
        width: "100%",
        margin: "0 auto"
    },
    resultTitle: {
        marginBottom: 28
    },
    resultInfo: {
        marginBottom: 20
    },
    printResultBtn: {
        marginRight: 16,
        [theme.breakpoints.down("xs")]: {
            marginRight: 0,
            marginBottom: 12
        }
    },
    resultInfoItem: {
        display: "flex",
        alignItems: "center",
        marginRight: 24,
        marginBottom: 8,
        "&:last-child": {
            marginBottom: 0
        }
    },
    resultInfoItemSvg: {
        display: "flex",
        marginRight: 8
    },
    resultButtons: {
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.down("xs")]: {
            flexDirection: "column"
        }
    }
}));

export const StepResult: React.FC = observer(() => {
    const classes = useStyles();
    const { appointmentStore } = useStores();
    const { chosenDoctor, appointmentForm } = appointmentStore;

    return (
        <div className={classes.resultWrapper}>
            <Typography className={classes.resultTitle} variant="h3">
                Вы успешно записались к врачу
            </Typography>
            <div className={classes.resultInfo}>
                <Typography variant="h6" color="textSecondary">
                    Специалист:
                </Typography>
                <Typography variant="body1">
                    {chosenDoctor &&
                        `${chosenDoctor.surname} ${chosenDoctor.name} ${chosenDoctor.middleName}`}
                </Typography>
            </div>
            <div className={classes.resultInfo}>
                <Typography variant="h6" color="textSecondary">
                    Детали записи:
                </Typography>
                <div className={classes.resultInfoItem}>
                    <span className={classes.resultInfoItemSvg}>
                        <CalendarIcon width={18} height={18} />
                    </span>
                    <Typography variant="body1">
                        {formatDate(appointmentForm.date.toString(), "d MMMM, EEEE")}
                    </Typography>
                </div>
                <div className={classes.resultInfoItem}>
                    <span className={classes.resultInfoItemSvg}>
                        <ClockIcon />
                    </span>
                    <Typography variant="body1">{appointmentForm.time}</Typography>
                </div>
                <div className={classes.resultInfoItem}>
                    <span className={classes.resultInfoItemSvg}>
                        <AccountEnvelopeIcon width={18} height={18} />
                    </span>
                    <Typography variant="body1">
                        {appointmentForm.communicationMethod
                            ? JSON.parse(appointmentForm.communicationMethod).method
                            : ""}
                    </Typography>
                </div>
            </div>
            <div className={classes.resultButtons}>
                <Button
                    className={classes.printResultBtn}
                    to="/dashboard/alerts"
                    variant="contained"
                    fullWidth
                >
                    Личный кабинет
                </Button>
                <Button to="/" variant="outlined" fullWidth>
                    На главную
                </Button>
            </div>
        </div>
    );
});
