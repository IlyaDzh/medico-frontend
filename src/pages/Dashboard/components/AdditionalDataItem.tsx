import React from "react";
import { Typography, IconButton, makeStyles, Theme } from "@material-ui/core";

import { PencilIcon } from "icons";

interface IAdditionalDataItem {
    title: string;
    data: string;
    icon: React.ReactNode;
}

const useStyles = makeStyles((theme: Theme) => ({
    additionalItem: {
        background: "#fff",
        border: `1px solid ${theme.palette.other!.main}`,
        borderRadius: 8,
        padding: "16px",
        marginBottom: 18,
        [theme.breakpoints.down("xs")]: {
            marginBottom: 12
        }
    },
    itemHeader: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 12
    },
    itemHeaderLeft: {
        display: "flex",
        alignItems: "center"
    },
    itemTitle: {
        fontSize: 16,
        marginLeft: 12
    },
    editButton: {
        width: 36,
        height: 36,
        padding: 0
    }
}));

export const AdditionalDataItem: React.FC<IAdditionalDataItem> = ({
    title,
    data,
    icon
}) => {
    const classes = useStyles();

    return (
        <div className={classes.additionalItem}>
            <div className={classes.itemHeader}>
                <div className={classes.itemHeaderLeft}>
                    {icon}
                    <Typography className={classes.itemTitle} variant="body2">
                        {title}
                    </Typography>
                </div>
                <IconButton
                    className={classes.editButton}
                    aria-label={`Редактировать ${title}`}
                >
                    <PencilIcon />
                </IconButton>
            </div>
            <Typography variant="body1" color="textSecondary">
                {data || <i>Не заполнено</i>}
            </Typography>
        </div>
    );
};