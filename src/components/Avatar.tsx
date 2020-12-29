import React from "react";
import clsx from "clsx";
import {
    Avatar as MaterialAvatar,
    makeStyles,
    AvatarProps
} from "@material-ui/core";

interface IAvatarProps {
    size?: "sm" | "lg";
}

const useStyles = makeStyles(() => ({
    avatar: {
        width: "44px",
        height: "44px"
    },
    small: {
        width: "36px",
        height: "36px"
    },
    large: {
        width: "48px",
        height: "48px"
    }
}));

export const Avatar: React.FC<IAvatarProps & AvatarProps> = ({ size, ...props }) => {
    const classes = useStyles();

    return (
        <MaterialAvatar
            className={clsx(
                classes.avatar,
                size === "sm" && classes.small,
                size === "lg" && classes.large
            )}
            {...props}
        />
    );
};
