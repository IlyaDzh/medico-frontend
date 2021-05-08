import React from "react";
import { Typography, makeStyles, Theme } from "@material-ui/core";

interface IAdditionalDataItem {
    title: string;
    data: string | string[];
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
    itemContent: {}
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
                    <Typography variant="body2">{title}</Typography>
                </div>
                <div>+</div>
            </div>
            <div className={classes.itemContent}>{data}</div>
        </div>
    );
};
