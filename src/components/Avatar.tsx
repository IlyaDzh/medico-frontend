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
                classes.avatar,
                isPositionTop && classes.objectPositionTop
            )}
            {...props}
        />
    );
};

// import React from "react";
// import clsx from "clsx";
// import {
//     Avatar as MaterialAvatar,
//     makeStyles,
//     AvatarProps
// } from "@material-ui/core";

// interface IAvatarProps {
//     size?: "sm" | "lg" | "elg";
//     componentTag?: string;
//     isPositionTop?: boolean;
// }

// const useStyles = makeStyles(() => ({
//     avatar: {
//         width: 44,
//         height: 44
//     },
//     small: {
//         width: 36,
//         height: 36
//     },
//     large: {
//         width: 48,
//         height: 48
//     },
//     extraLarge: {
//         width: 58,
//         height: 58
//     },
//     objectPositionTop: {
//         "& img": {
//             objectPosition: "top"
//         }
//     }
// }));

// export const Avatar: React.FC<IAvatarProps & AvatarProps> = ({
//     size,
//     componentTag,
//     isPositionTop,
//     ...props
// }) => {
//     const classes = useStyles();

//     const component = componentTag || "div";

//     return (
//         <MaterialAvatar
//             component={component as any}
//             className={clsx(
//                 classes.avatar,
//                 size === "sm" && classes.small,
//                 size === "lg" && classes.large,
//                 size === "elg" && classes.extraLarge,
//                 isPositionTop && classes.objectPositionTop
//             )}
//             {...props}
//         />
//     );
// };
