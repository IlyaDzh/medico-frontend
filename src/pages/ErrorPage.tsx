import React from "react";
import Lottie from "react-lottie";
import { makeStyles } from "@material-ui/core";

import { Button } from "components";
import animationData from "images/404.json";

const useStyles = makeStyles(() => ({
    content: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    animation: {
        maxWidth: 450,
        width: "100%",
        margin: "0 auto 40px"
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
