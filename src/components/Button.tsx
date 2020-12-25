import React from "react";
import { Link } from "react-router-dom";
import { Button as BaseButton, ButtonProps } from "@material-ui/core";

interface IButton {
    to?: string;
}

export const Button: React.FC<IButton & ButtonProps> = ({ ...props }) => {
    const { variant, to } = props;

    return to ? (
        <BaseButton
            color="primary"
            variant={variant}
            disableElevation={variant === "contained"}
            component={React.forwardRef((props, ref) => (
                <Link to={to} {...props} ref={ref as any} />
            ))}
            {...props}
        />
    ) : (
        <BaseButton
            color="primary"
            variant={variant}
            disableElevation={variant === "contained"}
            {...props}
        />
    );
};
