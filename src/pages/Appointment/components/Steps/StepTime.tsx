import React, { useContext } from "react";
import { observer } from "mobx-react";
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
import { Button, Select, Loader } from "components";
import { useStores } from "stores/useStore";

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
        "& > fieldset:first-child": {
            marginRight: 20
        },
        [theme.breakpoints.down(1200)]: {
            display: "block"
        },
        [theme.breakpoints.down("sm")]: {
            display: "flex"
        },
        [theme.breakpoints.down("xs")]: {
            display: "block"
        }
    },
    formControl: {
        marginBottom: 20
    },
    groupLabel: {
        color: theme.palette.text.secondary,
        fontSize: 14,
        fontWeight: 400,
        marginBottom: 8
    }
}));

export const StepTime: React.FC = observer(() => {
    const classes = useStyles();
    const { onNextStep } = useContext(StepsContext);
    const { appointmentStore } = useStores();
    const {
        appointmentForm,
        chosenDoctor,
        availableTime,
        communicationMethods,
        pendingMetaInfo,
        setFormValue,
        getFreeDoctorTime
    } = appointmentStore;

    const handleDateChange = (date: any): void => {
        setFormValue("date", date);
        getFreeDoctorTime(date);
    };

    return (
        <div className={classes.stepContent}>
            {pendingMetaInfo ? (
                <Loader level={2.5} isCenter />
            ) : (
                <React.Fragment>
                    <AppointmentDoctorCard />
                    <form className={classes.timeForm}>
                        <div className={classes.timeFormFields}>
                            <div className={classes.formRow}>
                                <FormControl
                                    className={classes.formControl}
                                    component="fieldset"
                                    fullWidth
                                >
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
                                        value={appointmentForm.date}
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
                                <FormControl
                                    className={classes.formControl}
                                    component="fieldset"
                                    fullWidth
                                >
                                    <FormLabel
                                        className={classes.groupLabel}
                                        component="legend"
                                    >
                                        Время приёма:
                                    </FormLabel>
                                    <Select
                                        value={appointmentForm.time || ""}
                                        onChange={event =>
                                            setFormValue(
                                                "time",
                                                event.target.value as string
                                            )
                                        }
                                        disabled={
                                            !availableTime ||
                                            availableTime.length === 0
                                        }
                                    >
                                        {availableTime?.map(time => (
                                            <MenuItem
                                                key={time.time}
                                                value={time.time}
                                                disabled={time.isClosed}
                                            >
                                                {time.time}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </div>
                            <div className={classes.formRow}>
                                <FormControl
                                    className={classes.formControl}
                                    component="fieldset"
                                    fullWidth
                                >
                                    <FormLabel
                                        className={classes.groupLabel}
                                        component="legend"
                                    >
                                        Способ связи:
                                    </FormLabel>
                                    <Select
                                        value={
                                            appointmentForm.communicationMethod || ""
                                        }
                                        onChange={event => {
                                            setFormValue(
                                                "communicationMethod",
                                                event.target.value as string
                                            );
                                        }}
                                    >
                                        {communicationMethods?.map(method => (
                                            <MenuItem
                                                key={method.id}
                                                value={JSON.stringify(method)}
                                            >
                                                {method.method}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                                <FormControl
                                    className={classes.formControl}
                                    component="fieldset"
                                    fullWidth
                                >
                                    <FormLabel
                                        className={classes.groupLabel}
                                        component="legend"
                                    >
                                        Специальность:
                                    </FormLabel>
                                    <Select
                                        value={appointmentForm.doctorSpecialty || ""}
                                        onChange={event =>
                                            setFormValue(
                                                "doctorSpecialty",
                                                event.target.value as number
                                            )
                                        }
                                    >
                                        {chosenDoctor?.specialties.map(specialty => (
                                            <MenuItem
                                                key={specialty.id}
                                                value={specialty.id}
                                            >
                                                {specialty.name}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                        <Button variant="contained" onClick={onNextStep}>
                            Выбрать и продолжить
                        </Button>
                    </form>
                </React.Fragment>
            )}
        </div>
    );
});
