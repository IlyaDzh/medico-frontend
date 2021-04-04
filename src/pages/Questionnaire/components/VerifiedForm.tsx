import React from "react";
import Lottie from "react-lottie";
import { makeStyles, Theme } from "@material-ui/core";

import { FormWrapper } from "./FormWrapper";
import { Button } from "components";
import animationData from "images/scanning.json";

const useStyles = makeStyles((theme: Theme) => ({
    animation: {
        width: 400,
        margin: "0 auto",
        [theme.breakpoints.down("xs")]: {
            width: "100%"
        }
    },
    button: {
        textAlign: "center"
    }
}));

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};

export const VerifiedForm: React.FC = () => {
    const classes = useStyles();

    return (
        <FormWrapper
            title="Заявка на рассмотрении"
            subtitle="Проверка модератором может занять от 12 часов до 3 дней. Результат рассмотрения вашей заявки придет на указанную при регистрации почту"
        >
            <div className={classes.animation}>
                <Lottie options={defaultOptions} isClickToPauseDisabled={true} />
            </div>
            <div className={classes.button}>
                <Button to="/" variant="contained" color="primary">
                    На главную
                </Button>
            </div>
        </FormWrapper>
    );
};
