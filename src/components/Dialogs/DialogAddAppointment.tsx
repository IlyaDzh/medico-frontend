import React from "react";
import { observer } from "mobx-react";
import { TextField, makeStyles, Theme } from "@material-ui/core";

import { DialogBase } from "./DialogBase";
import { Button, SubmissionResult } from "components";
import { useStores } from "stores/useStore";
import { PlusIcon } from "icons";

const useStyles = makeStyles((theme: Theme) => ({
    textField: {
        marginBottom: 26,
        [theme.breakpoints.down("xs")]: {
            marginBottom: 16
        }
    },
    button: {}
}));

export const DialogAddAppointment: React.FC = observer(() => {
    const classes = useStyles();
    const { modalsStore } = useStores();
    const { getModalIsOpen, setModalIsOpen } = modalsStore;

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        // sendAppointment();
    };

    const handleClose = (): void => {
        setModalIsOpen("add-appointment", false);
        // resetForm();
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
                    // value={commentForm.text}
                    // onChange={event => setFormValue("text", event.target.value)}
                    rows={5}
                    // error={Boolean(commentFormErrors.text)}
                    // helperText={commentFormErrors.text}
                    multiline
                    fullWidth
                />
                <SubmissionResult align="center" isError>
                    {/* {submissionError} */}
                </SubmissionResult>
                <Button
                    className={classes.button}
                    type="submit"
                    variant="contained"
                    color="primary"
                    // disabled={pending}
                    // isLoaded={pending}
                >
                    Назначить
                </Button>
            </form>
        </DialogBase>
    );
});
