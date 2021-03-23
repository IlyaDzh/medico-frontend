import React from "react";
import { makeStyles } from "@material-ui/core";

import "./Loader.scss";

interface ILoader {
    level?: number;
}

const useStyles = makeStyles(() => ({
    loader: level => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 auto",
        width: Number(level) * 22,
        height: Number(level) * 22
    }),
    loaderInner: level => ({
        transform: `scale(${level})`
    })
}));

export const Loader: React.FC<ILoader> = ({ level = 1 }) => {
    const classes = useStyles(level);

    return (
        <div className={classes.loader}>
            <div className={`loader-inner ${classes.loaderInner}`}>
                <div className="loader-dots">
                    <div>
                        <div></div>
                    </div>
                    <div>
                        <div></div>
                    </div>
                    <div>
                        <div></div>
                    </div>
                    <div>
                        <div></div>
                    </div>
                    <div>
                        <div></div>
                    </div>
                    <div>
                        <div></div>
                    </div>
                    <div>
                        <div></div>
                    </div>
                    <div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    );
};
