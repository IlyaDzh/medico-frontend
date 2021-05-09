import React from "react";
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

import { Button } from "components";

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
        display: "block"
    }
}));

export const FeedbackForm: React.FC = () => {
    const classes = useStyles();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        // sendFeedback();
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
                                    // value={appointmentForm.symptoms}
                                    // onChange={event =>
                                    //     setFormValue("symptoms", event.target.value)
                                    // }
                                    // error={Boolean(appointmentFormErrors.symptoms)}
                                    // helperText={appointmentFormErrors.symptoms}
                                    fullWidth
                                />
                                <TextField
                                    className={classes.formInput}
                                    variant="outlined"
                                    color="secondary"
                                    placeholder="Email"
                                    // value={appointmentForm.symptoms}
                                    // onChange={event =>
                                    //     setFormValue("symptoms", event.target.value)
                                    // }
                                    // error={Boolean(appointmentFormErrors.symptoms)}
                                    // helperText={appointmentFormErrors.symptoms}
                                    fullWidth
                                />
                            </div>
                            <TextField
                                className={classes.formInput}
                                variant="outlined"
                                color="secondary"
                                placeholder="Тема письма"
                                // value={appointmentForm.symptoms}
                                // onChange={event =>
                                //     setFormValue("symptoms", event.target.value)
                                // }
                                // error={Boolean(appointmentFormErrors.symptoms)}
                                // helperText={appointmentFormErrors.symptoms}
                                fullWidth
                            />
                            <TextField
                                className={classes.formInput}
                                variant="outlined"
                                color="secondary"
                                placeholder="Текст вопроса"
                                // value={appointmentForm.symptoms}
                                // onChange={event =>
                                //     setFormValue("symptoms", event.target.value)
                                // }
                                rows={4}
                                // error={Boolean(appointmentFormErrors.symptoms)}
                                // helperText={appointmentFormErrors.symptoms}
                                multiline
                                fullWidth
                            />
                            <FormControlLabel
                                className={classes.agreement}
                                control={
                                    <Checkbox
                                        color="secondary"
                                        // checked={signUpForm.acceptedUserAgreement}
                                        // onChange={(_, checked) =>
                                        //     setFormValue(
                                        //         "acceptedUserAgreement",
                                        //         checked
                                        //     )
                                        // }
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
                            <Button
                                className={classes.submitButton}
                                type="submit"
                                variant="contained"
                                color="primary"
                            >
                                Отправить
                            </Button>
                        </form>
                    </div>
                </Paper>
            </Container>
        </section>
    );
};
