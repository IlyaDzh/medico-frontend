import React, { useContext, useState } from "react";
import {
    Button as MaterialButton,
    FormControlLabel,
    Checkbox,
    Typography,
    makeStyles,
    Theme
} from "@material-ui/core";

import { StepsContext } from "../AppointmentSteps";
import { AppointmentDoctorCard } from "../AppointmentDoctorCard";
import { Button } from "components";
import { useStores } from "stores/useStore";

const useStyles = makeStyles((theme: Theme) => ({
    stepContent: {
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.down("sm")]: {
            display: "block"
        }
    },
    paymentForm: {
        display: "flex",
        flexDirection: "column",
        maxWidth: 409,
        width: "100%"
    },
    checkbox: {
        marginBottom: 24
    },
    checkboxLabel: {
        fontSize: 14,
        paddingLeft: 10,
        "& a": {
            color: theme.palette.text.secondary
        }
    },
    paymentButton: {
        marginBottom: 16
    }
}));

export const StepPayment: React.FC = () => {
    const classes = useStyles();
    const { onNextStep } = useContext(StepsContext);
    const [checked, setChecked] = useState<boolean>(false);
    const [paymentSuccess, setPaymentSuccess] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const { appointmentStore } = useStores();
    const { createAppointment } = appointmentStore;

    const handlePaymentClick = () => {
        setPaymentSuccess(true);
        createAppointment();
    };

    const handleCheckPaymentClick = () => {
        setLoading(true);
        setTimeout(() => {
            onNextStep();
        }, 2000);
    };

    return (
        <div className={classes.stepContent}>
            <AppointmentDoctorCard displayDetails />
            <form className={classes.paymentForm}>
                <FormControlLabel
                    className={classes.checkbox}
                    control={
                        <Checkbox
                            color="secondary"
                            checked={checked}
                            onChange={(_, value) => setChecked(value)}
                        />
                    }
                    label={
                        <Typography
                            className={classes.checkboxLabel}
                            variant="body2"
                            color="textSecondary"
                        >
                            Проверил(а) данные и готов(а) к оплате
                            {/* Принимаю условия{" "}
                            <Link to="/">пользовательского соглашения</Link> и даю
                            согласие на{" "}
                            <Link to="/">обработку моих персональных данных</Link> */}
                        </Typography>
                    }
                />
                <MaterialButton
                    className={classes.paymentButton}
                    href="https://www.google.ru/"
                    target="_blank"
                    variant="contained"
                    color="primary"
                    onClick={handlePaymentClick}
                    disabled={!checked}
                    disableElevation
                >
                    Оплатить
                </MaterialButton>
                <Button
                    variant="outlined"
                    onClick={handleCheckPaymentClick}
                    disabled={!paymentSuccess || loading}
                    isLoaded={loading}
                >
                    Проверить оплату
                </Button>
            </form>
        </div>
    );
};
