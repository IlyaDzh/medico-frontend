import React from "react";
import { observer } from "mobx-react";
import {
    Typography,
    TextField,
    FormHelperText,
    makeStyles,
    Theme
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";

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
    ratingWrapper: {
        marginBottom: 50,
        [theme.breakpoints.down("xs")]: {
            marginBottom: 24
        }
    },
    rating: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    },
    buttons: {
        display: "flex",
        justifyContent: "space-between",
        [theme.breakpoints.down("xs")]: {
            display: "block"
        }
    },
    button: {
        "&:first-child": {
            [theme.breakpoints.down("xs")]: {
                marginBottom: 8
            }
        },
        [theme.breakpoints.down("xs")]: {
            width: "100%"
        }
    }
}));

export const DialogAddComment: React.FC = observer(() => {
    const classes = useStyles();
    const { modalsStore, commentStore } = useStores();
    const { getModalIsOpen, setModalIsOpen } = modalsStore;
    const {
        commentForm,
        commentFormErrors,
        pending,
        submissionError,
        setFormValue,
        sendComment,
        resetForm
    } = commentStore;

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        sendComment();
    };

    const handleClose = (): void => {
        setModalIsOpen("add-comment", false);
        resetForm();
    };

    return (
        <DialogBase
            isOpen={getModalIsOpen("add-comment")}
            title="Написать отзыв"
            icon={<PlusIcon />}
            paperWidth={680}
            onClose={handleClose}
        >
            <form onSubmit={handleSubmit}>
                <TextField
                    className={classes.textField}
                    variant="outlined"
                    color="secondary"
                    placeholder="Что вам понравилось или не понравилось?"
                    value={commentForm.text}
                    onChange={event => setFormValue("text", event.target.value)}
                    rows={4}
                    error={Boolean(commentFormErrors.text)}
                    helperText={commentFormErrors.text}
                    multiline
                    fullWidth
                />
                <div className={classes.ratingWrapper}>
                    <div className={classes.rating}>
                        <Typography variant="h5" color="textSecondary">
                            Поставьте отметку
                        </Typography>
                        <Rating
                            name="doctor-rating"
                            value={commentForm.estimation}
                            onChange={(_, value) =>
                                setFormValue("estimation", value)
                            }
                            size="medium"
                        />
                    </div>
                    <FormHelperText error={Boolean(commentFormErrors.estimation)}>
                        {commentFormErrors.estimation}
                    </FormHelperText>
                </div>
                <SubmissionResult align="center" isError>
                    {submissionError}
                </SubmissionResult>
                <div className={classes.buttons}>
                    <Button
                        className={classes.button}
                        variant="outlined"
                        color="primary"
                        onClick={handleClose}
                    >
                        Отмена
                    </Button>
                    <Button
                        className={classes.button}
                        type="submit"
                        variant="contained"
                        color="primary"
                        disabled={pending}
                        isLoaded={pending}
                    >
                        Отправить отзыв
                    </Button>
                </div>
            </form>
        </DialogBase>
    );
});
