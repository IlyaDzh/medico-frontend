import React from "react";
import clsx from "clsx";
import { Typography, makeStyles, Theme } from "@material-ui/core";

interface ICategoryChip {
    label: string;
    isActive?: boolean;
    onClick: () => void;
}

const useStyles = makeStyles((theme: Theme) => ({
    chip: {
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 34,
        padding: "6px 16px",
        backgroundColor: theme.palette.other?.main,
        border: `2px solid ${theme.palette.other?.main}`,
        borderRadius: 8,
        transition: "0.2s border ease",
        "&:hover": {
            borderColor: theme.palette.primary.dark
        },
        "&:focus": {
            outline: "none",
            borderColor: theme.palette.primary.dark
        }
    },
    chipActive: {
        borderColor: theme.palette.primary.dark
    },
    chipLabelActive: {
        color: theme.palette.primary.dark,
        transition: "0.2s color ease"
    }
}));

export const CategoryChip: React.FC<ICategoryChip> = ({
    label,
    isActive,
    onClick
}) => {
    const classes = useStyles();

    return (
        <button
            className={clsx(classes.chip, isActive && classes.chipActive)}
            onClick={onClick}
        >
            <Typography
                className={isActive ? classes.chipLabelActive : ""}
                variant="h6"
            >
                {label}
            </Typography>
        </button>
    );
};
