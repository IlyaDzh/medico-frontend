import React from "react";
import { Select as BaseSelect, SelectProps } from "@material-ui/core";

interface ISelect {}

export const Select: React.FC<ISelect & SelectProps> = ({ children, ...props }) => {
    return (
        <BaseSelect
            variant="outlined"
            color="secondary"
            MenuProps={{
                anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "left"
                },
                transformOrigin: {
                    vertical: "top",
                    horizontal: "left"
                },
                getContentAnchorEl: null
            }}
            {...props}
        >
            {children}
        </BaseSelect>
    );
};
