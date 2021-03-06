import React, { useContext } from "react";
import { makeStyles, Theme } from "@material-ui/core";

import { StepsContext } from "./AppointmentSteps";
import { Button } from "components";

const useStyles = makeStyles((theme: Theme) => ({
    backButton: {
        color: theme.palette.text.secondary
    },
    icon: {
        display: "flex",
        marginRight: 12,
        "& svg path": {
            fill: theme.palette.text.secondary
        }
    }
}));

export const BackButton: React.FC = () => {
    const classes = useStyles();
    const { onPrevStep } = useContext(StepsContext);

    return (
        <Button className={classes.backButton} color="default" onClick={onPrevStep}>
            <span className={classes.icon}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                        d="M8.57955 16.4302C8.90739 16.7532 9.43501 16.7493 9.75803 16.4215C10.081 16.0936 10.0771 15.566 9.7493 15.243L5.27401 10.8335L16.6667 10.8335C17.1269 10.8335 17.5 10.4604 17.5 10.0002C17.5 9.53992 17.1269 9.16682 16.6667 9.16682L5.27951 9.16682L9.7493 4.76275C10.0771 4.43973 10.081 3.91211 9.75803 3.58427C9.43501 3.25643 8.90739 3.25252 8.57955 3.57554L2.80939 9.26086C2.3953 9.66887 2.3953 10.3369 2.80939 10.7449L8.57955 16.4302Z"
                        fill="#5a5f6f"
                    />
                </svg>
            </span>
            Назад
        </Button>
    );
};
