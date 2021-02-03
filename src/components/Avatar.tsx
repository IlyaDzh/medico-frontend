import React from "react";
import clsx from "clsx";
import {
    Avatar as MaterialAvatar,
    makeStyles,
    AvatarProps
} from "@material-ui/core";

interface IAvatarProps {
    size?: "sm" | "lg" | "elg";
    componentTag?: string;
}

const useStyles = makeStyles(() => ({
    avatar: {
        width: 44,
        height: 44
    },
    small: {
        width: 36,
        height: 36
    },
    large: {
        width: 48,
        height: 48
    },
    extraLarge: {
        width: 58,
        height: 58
    }
}));

export const Avatar: React.FC<IAvatarProps & AvatarProps> = ({
    size,
    componentTag,
    ...props
}) => {
    const classes = useStyles();

    const component = componentTag || "div";

    return (
        <MaterialAvatar
            component={component as any}
            className={clsx(
                classes.avatar,
                size === "sm" && classes.small,
                size === "lg" && classes.large,
                size === "elg" && classes.extraLarge
            )}
            {...props}
        />
    );
};
