import React from "react";
import Lottie from "react-lottie";
import { Typography, makeStyles, Theme } from "@material-ui/core";

import animationData from "images/dialog-not-selected.json";

const useStyles = makeStyles((theme: Theme) => ({
    notSelected: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        padding: 20
    },
    animation: {
        maxWidth: 200,
        width: "100%",
        margin: "0 auto",
        [theme.breakpoints.down("sm")]: {
            maxWidth: 150
        }
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

export const DialogNotSelected: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.notSelected}>
            <div>
                <div className={classes.animation}>
                    <Lottie options={defaultOptions} isClickToPauseDisabled={true} />
                </div>
                <Typography variant="h3" align="center">
                    Выберите диалог, чтобы начать
                </Typography>
            </div>
        </div>
    );
};
