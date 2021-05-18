import React from "react";
import clsx from "clsx";
import { IconButton, makeStyles, IconButtonProps } from "@material-ui/core";

import { PencilIcon } from "icons";

interface IEditIconButton {
    title: string;
    onEdit: () => void;
}

const useStyles = makeStyles(() => ({
    editButton: {
        width: 36,
        height: 36,
        padding: 0
    }
}));

export const EditIconButton: React.FC<IEditIconButton & IconButtonProps> = ({
    title,
    onEdit,
    className
}) => {
    const classes = useStyles();

    return (
        <IconButton
            className={clsx(classes.editButton, className)}
            onClick={onEdit}
            aria-label={`Редактировать ${title}`}
        >
            <PencilIcon />
        </IconButton>
    );
};
