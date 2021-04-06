import React from "react";
import Lottie from "react-lottie";
import { makeStyles } from "@material-ui/core";

import { Button } from "components";
import animationData from "images/404.json";

interface IErrorAnimation {
    path: string;
    title: string;
}

const useStyles = makeStyles(() => ({
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

export const ErrorAnimation: React.FC<IErrorAnimation> = ({ path, title }) => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <div className={classes.animation}>
                <Lottie options={defaultOptions} isClickToPauseDisabled={true} />
            </div>
            <div className={classes.button}>
                <Button to={path} variant="contained" color="primary">
                    {title}
                </Button>
            </div>
        </React.Fragment>
    );
};
