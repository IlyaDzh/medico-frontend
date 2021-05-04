import React from "react";
import { Typography, makeStyles, Theme } from "@material-ui/core";
import { Clear as ClearIcon } from "@material-ui/icons";

import { Button } from "components";
import { Analysis } from "stores/interfaces/Dashboard";
import { formatDate } from "utils/formatDate";

interface IAnalysisItem {
    analysis: Analysis;
    onClick: () => void;
    onDelete?: () => void;
}

const useStyles = makeStyles((theme: Theme) => ({
    analysisItem: {
        cursor: "pointer",
        position: "relative",
        display: "flex",
        width: 175,
        height: 235,
        padding: "11px 8px",
        margin: "0 2px 4px",
        background: "#fff",
        border: `1px solid ${theme.palette.other!.main}`,
        borderRadius: 8
    },
    analysisImage: {
        objectFit: "cover",
        objectPosition: "top",
        width: "100%"
    },
    analysisCaption: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        textAlign: "center",
        background: "#c9cddd",
        borderRadius: 8,
        padding: "5px 12px"
    },
    removeButton: {
        position: "absolute",
        right: 4,
        top: 4,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minWidth: 26,
        height: 26,
        padding: 0,
        borderRadius: "50%",
        backgroundColor: "#f16161",
        "&:hover": {
            backgroundColor: theme.palette.error.main
        }
    }
}));

export const AnalysisItem: React.FC<IAnalysisItem> = ({
    analysis,
    onClick,
    onDelete
}) => {
    const classes = useStyles();

    const handleDeleteAnalysis = (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ): void => {
        event.stopPropagation();
        if (onDelete) onDelete();
    };

    return (
        <figure className={classes.analysisItem} onClick={onClick}>
            <img
                className={classes.analysisImage}
                src={process.env.REACT_APP_API_BASE_URL + analysis.path}
                alt={analysis.name}
            />
            <figcaption className={classes.analysisCaption}>
                <Typography variant="body1">
                    {formatDate(
                        analysis.analysisDeliveryDate.toString(),
                        "dd.MM.yyyy"
                    )}
                </Typography>
                <Typography variant="h6">{analysis.name}</Typography>
            </figcaption>
            {onDelete && (
                <Button
                    className={classes.removeButton}
                    variant="contained"
                    onClick={handleDeleteAnalysis}
                    aria-label={`Удалить ${
                        analysis.type === "analysis" ? "анализ" : "снимок"
                    }`}
                >
                    <ClearIcon />
                </Button>
            )}
        </figure>
    );
};
