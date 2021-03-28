import React from "react";
import { Typography, makeStyles } from "@material-ui/core";

import { ValidationGreenIcon, ValidationRedIcon } from "icons";

interface IPasswordRequirement {
    requirement: boolean;
    label: string;
}

const useStyles = makeStyles(() => ({
    requirementItem: {
        display: "flex",
        alignItems: "center",
        padding: "8px 4px",
        marginRight: 22,
        "&:last-child": {
            marginRight: 0
        }
    },
    requirementItemLabel: {
        marginLeft: 4,
        fontSize: 14
    }
}));

export const PasswordRequirement: React.FC<IPasswordRequirement> = ({
    requirement,
    label
}) => {
    const classes = useStyles();

    return (
        <div className={classes.requirementItem}>
            {requirement ? <ValidationGreenIcon /> : <ValidationRedIcon />}
            <Typography className={classes.requirementItemLabel} variant="h6">
                {label}
            </Typography>
        </div>
    );
};
