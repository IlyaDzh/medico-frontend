import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import {
    Button as BaseButton,
    ButtonProps,
    makeStyles,
    Theme
} from "@material-ui/core";

interface IButton {
    to?: string;
    icon?: React.ReactNode;
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
        zIndex: 1
    },
    iconDisabed: {
        backgroundColor: theme.palette.border?.main,
        "& svg path": {
            fill: theme.palette.text.disabled
        }
    }
}));

const CustomButton: React.FC<IButton & ButtonProps> = ({ ...props }) => {
    const classes = useStyles();
    const { variant, disabled, to, icon, children } = props;

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
                <div className={clsx(classes.icon, disabled && classes.iconDisabed)}>
                    {icon}
                </div>
            )}
        </BaseButton>
    );
};

const DefaultButton: React.FC<IButton & ButtonProps> = ({ variant, ...props }) => {
    return (
        <BaseButton
            color="primary"
            variant={variant}
            disableElevation={variant === "contained"}
            {...props}
        />
    );
};

export const Button: React.FC<IButton & ButtonProps> = ({ to, icon, ...props }) => {
    return to || icon ? (
        <CustomButton to={to} icon={icon} {...props} />
    ) : (
        <DefaultButton {...props} />
    );
};
