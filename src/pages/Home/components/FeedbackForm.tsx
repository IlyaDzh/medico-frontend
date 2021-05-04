import React from "react";
import { Link } from "react-router-dom";
import {
    Container,
    Typography,
    TextField,
    FormControlLabel,
    Checkbox,
    makeStyles,
    Theme
} from "@material-ui/core";

import { Button } from "components";

const useStyles = makeStyles((theme: Theme) => ({
    feedbackSection: {
        paddingTop: 124,
        paddingBottom: 153,
        backgroundColor: "#fff",
        [theme.breakpoints.down("xs")]: {
            paddingTop: 57,
            paddingBottom: 75
        }
    },
    feedbackWrapper: {
        display: "flex",
        alignItems: "center",
        border: `4px solid ${theme.palette.background.dark}`,
        borderRadius: 16,
        background: theme.palette.background.default,
        padding: "60px 74px"
    },
    leftSide: {
        width: "40%"
    },
    rightSide: {
        width: "60%"
    },
    feedbackTitle: {
        marginBottom: 12
    },
    formRow: {
        display: "flex",
        alignItems: "center",
        "& input:first-child": {
            marginRight: 12
        }
    },
    formInput: {
        marginBottom: 12
    },
    agreement: {
        marginBottom: 12
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
                <div className={classes.feedbackWrapper}>
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
                </div>
            </Container>
        </section>
    );
};
