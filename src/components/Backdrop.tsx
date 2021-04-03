import React from "react";
import { Backdrop as BaseBackdrop, makeStyles } from "@material-ui/core";

import { Loader } from "components";

const useStyles = makeStyles(() => ({
    backdrop: {
        background: "#fff"
    }
}));

export const Backdrop: React.FC = () => {
    const classes = useStyles();

    return (
        <BaseBackdrop className={classes.backdrop} transitionDuration={500} open>
            <Loader level={3} isCenter />
        </BaseBackdrop>
    );
};
