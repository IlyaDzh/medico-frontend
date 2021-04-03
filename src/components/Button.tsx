import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import {
    Button as BaseButton,
    ButtonProps,
    makeStyles,
    Theme
} from "@material-ui/core";

import { Loader } from "components";

interface IButton {
    to?: string;
    icon?: React.ReactNode;
    isLoaded?: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
    icon: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        right: 0,
        top: 0,
        bottom: 0,
        width: 60,
        backgroundColor: theme.palette.primary.dark,
        borderRadius: 8,
        zIndex: 1,
        [theme.breakpoints.down("sm")]: {
            width: 54
        },
        [theme.breakpoints.down("xs")]: {
            width: 46
        }
    },
    iconDisabed: {
        backgroundColor: theme.palette.other?.main,
        "& svg path": {
            fill: theme.palette.text.disabled
        }
    },
    loader: {
        position: "absolute"
    }
}));

const CustomButton: React.FC<IButton & ButtonProps> = ({
    variant,
    disabled,
    to,
    icon,
    children,
    ...props
}) => {
    const classes = useStyles();

    const component = to
        ? React.forwardRef((props, ref) => (
              <Link to={to as any} {...props} ref={ref as any} />
          ))
        : "button";

    return (
        <BaseButton
            color="primary"
            variant={variant}
            disableElevation={variant === "contained"}
            component={component}
            disabled={disabled}
            {...props}
        >
            {children}
            {icon && (
                <span
                    className={clsx(classes.icon, disabled && classes.iconDisabed)}
                >
                    {icon}
                </span>
            )}
        </BaseButton>
    );
};

const DefaultButton: React.FC<IButton & ButtonProps> = ({
    variant,
    isLoaded,
    children,
    ...props
}) => {
    const classes = useStyles();

    return (
        <BaseButton
            color="primary"
            variant={variant}
            disableElevation={variant === "contained"}
            {...props}
        >
            {isLoaded && <Loader className={classes.loader} level={2.5} isCenter />}
            {children}
        </BaseButton>
    );
};

export const Button: React.FC<IButton & ButtonProps> = ({ to, icon, ...props }) => {
    return to || icon ? (
        <CustomButton to={to} icon={icon} {...props} />
    ) : (
        <DefaultButton {...props} />
    );
};
