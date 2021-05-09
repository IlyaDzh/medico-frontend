import React from "react";
import { IconButton, makeStyles } from "@material-ui/core";

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

export const EditIconButton: React.FC<IEditIconButton> = ({ title, onEdit }) => {
    const classes = useStyles();

    return (
        <IconButton
            className={classes.editButton}
            onClick={onEdit}
            aria-label={`Редактировать ${title}`}
        >
            <PencilIcon />
        </IconButton>
    );
};
