import React from "react";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import {
    Container,
    Typography,
    TextField,
    FormControlLabel,
    Checkbox,
    Paper,
    makeStyles,
    Theme
} from "@material-ui/core";

import { Button, SubmissionResult } from "components";
import { useStores } from "stores/useStore";

const useStyles = makeStyles((theme: Theme) => ({
    feedbackSection: {
        paddingTop: 124,
        paddingBottom: 124,
        backgroundColor: "#fff",
        [theme.breakpoints.down("xs")]: {
            paddingTop: 62,
            paddingBottom: 62
        }
    },
    feedbackWrapper: {
        display: "flex",
        alignItems: "center",
        borderRadius: 16,
        background: theme.palette.background.default,
        padding: "60px 74px",
        [theme.breakpoints.down("sm")]: {
            display: "block"
        },
        [theme.breakpoints.down("xs")]: {
            border: "none",
            background: "#fff",
            padding: 0
        }
    },
    leftSide: {
        width: "40%",
        marginRight: 40,
        [theme.breakpoints.down("sm")]: {
            width: "100%",
            marginRight: 0,
            marginBottom: 32
        }
    },
    rightSide: {
        width: "60%",
        [theme.breakpoints.down("sm")]: {
            width: "100%"
        }
    },
    feedbackTitle: {
        marginBottom: 12
    },
    formRow: {
        display: "flex",
        alignItems: "center",
        "&>div:first-child": {
            marginRight: 12,
            [theme.breakpoints.down("xs")]: {
                marginRight: 0
            }
        },
        [theme.breakpoints.down("xs")]: {
            display: "block"
        }
    },
    formInput: {
        marginBottom: 12
    },
    agreement: {
        marginBottom: 18
    },
    agreementLink: {
        color: theme.palette.text.secondary,
        "&:hover": {
            textDecoration: "none"
        }
    },
    submitButton: {
        [theme.breakpoints.down("xs")]: {
            width: "100%"
        }
    }
}));

export const FeedbackForm: React.FC = observer(() => {
    const classes = useStyles();
    const { homeStore } = useStores();
    const {
        feedbackForm,
        feedbackFormErrors,
        pendingFeedback,
        submissionSuccess,
        submissionError,
        setFormValue,
        sendFeedback
    } = homeStore;

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        sendFeedback();
    };

    return (
        <section id="feedback" className={classes.feedbackSection}>
            <Container>
                <Paper className={classes.feedbackWrapper} variant="outlined">
                    <div className={classes.leftSide}>
                        <Typography className={classes.feedbackTitle} variant="h2">
                            Остались вопросы? <br /> Напишите нам
                        </Typography>
                        <Typography variant="body1" color="textSecondary">
                            Будем рады ответить
                        </Typography>
                    </div>
                    <div className={classes.rightSide}>
                        <form onSubmit={handleSubmit}>
                            <div className={classes.formRow}>
                                <TextField
                                    className={classes.formInput}
                                    variant="outlined"
                                    color="secondary"
                                    placeholder="Ваше имя"
                                    value={feedbackForm.name}
                                    onChange={event =>
                                        setFormValue("name", event.target.value)
                                    }
                                    error={Boolean(feedbackFormErrors.name)}
                                    helperText={feedbackFormErrors.name}
                                    fullWidth
                                />
                                <TextField
                                    className={classes.formInput}
                                    variant="outlined"
                                    color="secondary"
                                    placeholder="Email"
                                    value={feedbackForm.email}
                                    onChange={event =>
                                        setFormValue("email", event.target.value)
                                    }
                                    error={Boolean(feedbackFormErrors.email)}
                                    helperText={feedbackFormErrors.email}
                                    fullWidth
                                />
                            </div>
                            <TextField
                                className={classes.formInput}
                                variant="outlined"
                                color="secondary"
                                placeholder="Тема письма"
                                value={feedbackForm.subject}
                                onChange={event =>
                                    setFormValue("subject", event.target.value)
                                }
                                error={Boolean(feedbackFormErrors.subject)}
                                helperText={feedbackFormErrors.subject}
                                fullWidth
                            />
                            <TextField
                                className={classes.formInput}
                                variant="outlined"
                                color="secondary"
                                placeholder="Текст вопроса"
                                value={feedbackForm.text}
                                onChange={event =>
                                    setFormValue("text", event.target.value)
                                }
                                error={Boolean(feedbackFormErrors.text)}
                                helperText={feedbackFormErrors.text}
                                rows={4}
                                multiline
                                fullWidth
                            />
                            <FormControlLabel
                                className={classes.agreement}
                                control={
                                    <Checkbox
                                        color="secondary"
                                        checked={feedbackForm.acceptedAgreement}
                                        onChange={(_, checked) =>
                                            setFormValue(
                                                "acceptedAgreement",
                                                checked
                                            )
                                        }
                                    />
                                }
                                label={
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                    >
                                        Даю согласие на{" "}
                                        <Link
                                            className={classes.agreementLink}
                                            to="/"
                                        >
                                            обработку моих персональных данных
                                        </Link>
                                    </Typography>
                                }
                            />
                            <SubmissionResult align="center">
                                {submissionSuccess}
                            </SubmissionResult>
                            <SubmissionResult align="center" isError>
                                {submissionError}
                            </SubmissionResult>
                            <Button
                                className={classes.submitButton}
                                type="submit"
                                variant="contained"
                                color="primary"
                                disabled={
                                    !feedbackForm.acceptedAgreement ||
                                    pendingFeedback
                                }
                                isLoaded={pendingFeedback}
                            >
                                Отправить
                            </Button>
                        </form>
                    </div>
                </Paper>
            </Container>
        </section>
    );
});
