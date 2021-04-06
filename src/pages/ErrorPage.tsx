import React from "react";
import Lottie from "react-lottie";
import { makeStyles, Theme } from "@material-ui/core";

import { Button } from "components";
import animationData from "images/404-1.json";

const useStyles = makeStyles((theme: Theme) => ({
    content: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    animation: {
        width: 600,
        margin: "0 auto 20px",
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

export const ErrorPage: React.FC = () => {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <div>
                <div className={classes.animation}>
                    <Lottie options={defaultOptions} isClickToPauseDisabled={true} />
                </div>
                <div className={classes.button}>
                    <Button to="/" variant="contained" color="primary">
                        На главную
                    </Button>
                </div>
            </div>
        </main>
    );
};
