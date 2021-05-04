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

export const DialogDeleteAnalysis: React.FC = observer(() => {
    const classes = useStyles();
    const { modalsStore, dashboardAnalyzes } = useStores();
    const { getModalIsOpen, setModalIsOpen } = modalsStore;
    const { deleteAnalysis } = dashboardAnalyzes;

    const handleClose = (): void => {
        setModalIsOpen("delete-analysis", false);
    };

    const handleDeleteClick = (): void => {
        handleClose();
        deleteAnalysis();
    };

    return (
        <DialogBase
            isOpen={getModalIsOpen("delete-analysis")}
            title="Удаление файла"
            icon={<RemoveAppointmentIcon width={32} height={32} isLight />}
            onClose={handleClose}
        >
            <div className={classes.content}>
                <Typography variant="h5">Удалить файл?</Typography>
                <Typography variant="body2" color="textSecondary">
                    Данный анализ/снимок будет удалён
                </Typography>
            </div>
            <Button
                className={classes.buttonMargin}
                variant="contained"
                color="primary"
                onClick={handleDeleteClick}
                fullWidth
            >
                Удалить
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
