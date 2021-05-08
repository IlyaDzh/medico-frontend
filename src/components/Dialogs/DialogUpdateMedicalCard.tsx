import React from "react";
import { observer } from "mobx-react";
import {
    Typography,
    TextField,
    RadioGroup,
    FormControlLabel,
    Radio,
    FormControl,
    FormLabel,
    FormHelperText,
    makeStyles,
    Theme
} from "@material-ui/core";

import { DialogBase } from "./DialogBase";
import { Button, SubmissionError } from "components";
import { useStores } from "stores/useStore";
import { PlusIcon } from "icons";

const useStyles = makeStyles((theme: Theme) => ({}));

export const DialogUpdateMedicalCard: React.FC = observer(() => {
    const classes = useStyles();
    const { modalsStore } = useStores();
    const { getModalIsOpen, setModalIsOpen } = modalsStore;

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        // updateMedicalCard();
    };

    const handleClose = (): void => {
        setModalIsOpen("update-medical-card", false);
        // resetForm();
    };

    return (
        <DialogBase
            isOpen={getModalIsOpen("update-medical-card")}
            title="Изменение мед. карты"
            icon={<PlusIcon />}
            onClose={handleClose}
            paperWidth={560}
        >
            <form onSubmit={handleSubmit}>
                {/* <SubmissionError align="center">{submissionError}</SubmissionError> */}
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    // disabled={pending}
                    // isLoaded={pending}
                >
                    Изменить
                </Button>
            </form>
        </DialogBase>
    );
});
