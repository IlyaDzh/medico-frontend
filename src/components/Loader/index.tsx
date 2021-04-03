import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core";

import "./Loader.scss";

interface ILoader {
    level?: number;
    isCenter?: boolean;
    className?: string;
}

const useStyles = makeStyles(() => ({
    loader: level => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: Number(level) * 22,
        height: Number(level) * 22
    }),
    loaderInner: level => ({
        transform: `scale(${level})`
    }),
    loaderIsCenter: {
        margin: "0 auto"
    }
}));

export const Loader: React.FC<ILoader> = ({ level = 1, isCenter, className }) => {
    const classes = useStyles(level);

    return (
        <div
            className={clsx(
                classes.loader,
                isCenter && classes.loaderIsCenter,
                className
            )}
        >
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
