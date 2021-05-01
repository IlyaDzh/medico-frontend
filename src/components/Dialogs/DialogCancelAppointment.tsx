import React from "react";
import { observer } from "mobx-react";
import { Typography, makeStyles } from "@material-ui/core";

import { DialogBase } from "./DialogBase";
import { Button } from "components";
import { useStores } from "stores/useStore";
import { RemoveAppointmentIcon } from "icons";

const useStyles = makeStyles(() => ({
    content: {
        marginBottom: 36
    },
    buttonMargin: {
        marginBottom: 16
    }
}));

export const DialogCancelAppointment: React.FC = observer(() => {
    const classes = useStyles();
    const { modalsStore } = useStores();
    const { getModalIsOpen, setModalIsOpen } = modalsStore;

    const handleClose = (): void => {
        setModalIsOpen("cancel-appointment", false);
    };

    const handleCancelClick = (): void => {
        handleClose();
        // cancelAppointment();
    };

    return (
        <DialogBase
            isOpen={getModalIsOpen("cancel-appointment")}
            title="Отмена записи"
            icon={<RemoveAppointmentIcon width={32} height={32} isLight />}
            onClose={handleClose}
        >
            <div className={classes.content}>
                <Typography variant="h5">Отменить запись?</Typography>
                <Typography variant="body2" color="textSecondary">
                    Данная запись будет удалена
                </Typography>
            </div>
            <Button
                className={classes.buttonMargin}
                variant="contained"
                color="primary"
                onClick={handleCancelClick}
                fullWidth
            >
                Отменить запись
            </Button>
            <Button
                variant="outlined"
                color="primary"
                onClick={handleClose}
                fullWidth
            >
                Закрыть
            </Button>
        </DialogBase>
    );
});
