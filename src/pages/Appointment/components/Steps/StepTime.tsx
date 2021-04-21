import React, { useContext } from "react";
import {
    FormControl,
    FormLabel,
    MenuItem,
    makeStyles,
    Theme
} from "@material-ui/core";
import { KeyboardDatePicker } from "@material-ui/pickers";

import { StepsContext } from "../AppointmentSteps";
import { AppointmentDoctorCard } from "../AppointmentDoctorCard";
import { Button, Select } from "components";

const useStyles = makeStyles((theme: Theme) => ({
    stepContent: {
        display: "flex",
        [theme.breakpoints.down("sm")]: {
            display: "block"
        }
    },
    timeForm: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-end"
    },
    timeFormFields: {
        width: "100%",
        marginBottom: 20
    },
    formRow: {
        display: "flex",
        marginBottom: 20,
        "& > fieldset:first-child": {
            marginRight: 20
        }
    },
    groupLabel: {
        color: theme.palette.text.secondary,
        fontSize: 14,
        fontWeight: 400,
        marginBottom: 8
    }
}));

export const StepTime: React.FC = () => {
    const classes = useStyles();
    const { onNextStep } = useContext(StepsContext);

    const [selectedDate, setSelectedDate] = React.useState<Date | null>(new Date());

    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
    };

    return (
        <div className={classes.stepContent}>
            <AppointmentDoctorCard />
            <form className={classes.timeForm}>
                <div className={classes.timeFormFields}>
                    <div className={classes.formRow}>
                        <FormControl component="fieldset" fullWidth>
                            <FormLabel
                                className={classes.groupLabel}
                                component="legend"
                            >
                                Дата приёма:
                            </FormLabel>
                            <KeyboardDatePicker
                                variant="inline"
                                inputVariant="outlined"
                                color="secondary"
                                placeholder="Не выбрана"
                                format="dd/MM/yyyy"
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    "aria-label": "change date"
                                }}
                                invalidDateMessage="Неверный формат даты"
                                minDateMessage="Неверный формат даты"
                                maxDateMessage="Неверный формат даты"
                                disableToolbar
                                disablePast
                                autoOk
                            />
                        </FormControl>
                        <FormControl component="fieldset" fullWidth>
                            <FormLabel
                                className={classes.groupLabel}
                                component="legend"
                            >
                                Время приёма:
                            </FormLabel>
                            <Select defaultValue="9">
                                <MenuItem value="9">9:00</MenuItem>
                                <MenuItem value="10">10:00</MenuItem>
                                <MenuItem value="11">11:00</MenuItem>
                                <MenuItem value="12">12:00</MenuItem>
                                <MenuItem value="13">13:00</MenuItem>
                                <MenuItem value="14">14:00</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <FormControl component="fieldset" fullWidth>
                        <FormLabel className={classes.groupLabel} component="legend">
                            Способ связи:
                        </FormLabel>
                        <Select defaultValue="messages">
                            <MenuItem value="messages">Сообщения в чате</MenuItem>
                            <MenuItem value="audio">Аудиозвонок</MenuItem>
                            <MenuItem value="video">Видеозвонок</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <Button variant="contained" onClick={onNextStep}>
                    Выбрать и продолжить
                </Button>
            </form>
        </div>
    );
};
