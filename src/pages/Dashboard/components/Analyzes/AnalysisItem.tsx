import React from "react";
import { Typography, makeStyles, Theme } from "@material-ui/core";

interface IAnalysisItem {
    image: string;
    onClick: () => void;
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
        objectFit: "contain",
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
    }
}));

export const AnalysisItem: React.FC<IAnalysisItem> = ({ image, onClick }) => {
    const classes = useStyles();

    return (
        <figure className={classes.analysisItem} onClick={onClick}>
            <img className={classes.analysisImage} src={image} alt="Анализ" />
            <figcaption className={classes.analysisCaption}>
                <Typography variant="body1">10.08.2020</Typography>
                <Typography variant="h6">Анализ</Typography>
            </figcaption>
        </figure>
    );
};
