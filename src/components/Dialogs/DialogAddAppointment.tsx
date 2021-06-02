import React from "react";
import { observer } from "mobx-react";
import { TextField, makeStyles, Theme } from "@material-ui/core";

import { DialogBase } from "./DialogBase";
import { Button } from "components";
import { useStores } from "stores/useStore";
import { PlusIcon } from "icons";

const useStyles = makeStyles((theme: Theme) => ({
    textField: {
        marginBottom: 26,
        [theme.breakpoints.down("xs")]: {
            marginBottom: 16
        }
    }
}));

export const DialogAddAppointment: React.FC = observer(() => {
    const classes = useStyles();
    const { modalsStore, dashboardPatientInfoStore } = useStores();
    const { getModalIsOpen, setModalIsOpen } = modalsStore;
    const {
        appointmentText,
        pendingAppointment,
        appointmentError,
        sendAppointment,
        setAppointmentText,
        resetAppointmentError
    } = dashboardPatientInfoStore;

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        sendAppointment();
    };

    const handleClose = (): void => {
        setModalIsOpen("add-appointment", false);
        setAppointmentText("");
        resetAppointmentError();
    };

    return (
        <DialogBase
            isOpen={getModalIsOpen("add-appointment")}
            title="Назначение врача"
            icon={<PlusIcon />}
            paperWidth={680}
            onClose={handleClose}
        >
            <form onSubmit={handleSubmit}>
                <TextField
                    className={classes.textField}
                    variant="outlined"
                    color="secondary"
                    placeholder="Парацетамол - по 1 таблетке - 3 раза в день, ..."
                    value={appointmentText}
                    onChange={event => setAppointmentText(event.target.value)}
                    rows={5}
                    error={Boolean(appointmentError)}
                    helperText={appointmentError}
                    multiline
                    fullWidth
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={pendingAppointment}
                    isLoaded={pendingAppointment}
                >
                    Назначить
                </Button>
            </form>
        </DialogBase>
    );
});
