import React from "react";
import clsx from "clsx";
import {
    Avatar as MaterialAvatar,
    makeStyles,
    AvatarProps
} from "@material-ui/core";

interface IAvatarProps {
    size?: number;
    componentTag?: string;
    isPositionTop?: boolean;
}

const useStyles = makeStyles(() => ({
    avatar: size => ({
        width: Number(size),
        height: Number(size)
    }),
    objectPositionTop: {
        "& img": {
            objectPosition: "top"
        }
    }
}));

export const Avatar: React.FC<IAvatarProps & AvatarProps> = ({
    className,
    size,
    componentTag,
    isPositionTop,
    ...props
}) => {
    const classes = useStyles(size || 44);

    const component = componentTag || "div";

    return (
        <MaterialAvatar
            component={component as any}
            className={clsx(
                className,
                classes.avatar,
                isPositionTop && classes.objectPositionTop
            )}
            {...props}
        />
    );
};
