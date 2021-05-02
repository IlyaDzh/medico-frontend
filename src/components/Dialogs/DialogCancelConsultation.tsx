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

export const DialogCancelConsultation: React.FC = observer(() => {
    const classes = useStyles();
    const { modalsStore, dashboardConsultations } = useStores();
    const { getModalIsOpen, setModalIsOpen } = modalsStore;
    const { cancelConsultation } = dashboardConsultations;

    const handleClose = (): void => {
        setModalIsOpen("cancel-consultation", false);
    };

    const handleCancelClick = (): void => {
        handleClose();
        cancelConsultation();
    };

    return (
        <DialogBase
            isOpen={getModalIsOpen("cancel-consultation")}
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
