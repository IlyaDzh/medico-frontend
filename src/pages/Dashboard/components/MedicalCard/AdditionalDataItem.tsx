import React from "react";
import { Typography, makeStyles, Theme } from "@material-ui/core";

import { EditIconButton } from "./";

interface IAdditionalDataItem {
    title: string;
    data: string | string[];
    icon: React.ReactNode;
    onEdit?: () => void;
}

const useStyles = makeStyles((theme: Theme) => ({
    additionalItem: {
        background: "#fff",
        border: `1px solid ${theme.palette.other!.main}`,
        borderRadius: 8,
        padding: 16,
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
    }
}));

export const AdditionalDataItem: React.FC<IAdditionalDataItem> = ({
    title,
    data,
    icon,
    onEdit
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
                {onEdit && <EditIconButton title={title} onEdit={onEdit} />}
            </div>
            {data ? (
                typeof data === "object" ? (
                    <ul>
                        {data.map((item, index) => (
                            <li key={index}>
                                <Typography variant="body1" color="textSecondary">
                                    {item}
                                </Typography>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <Typography variant="body1" color="textSecondary">
                        {data}
                    </Typography>
                )
            ) : (
                <Typography variant="body1" color="textSecondary">
                    <i>Не заполнено</i>
                </Typography>
            )}
        </div>
    );
};
