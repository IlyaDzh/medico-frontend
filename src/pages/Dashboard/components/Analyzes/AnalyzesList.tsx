import React, { useState } from "react";
import { makeStyles, Theme } from "@material-ui/core";

import { AnalyzesChip, AnalysisItem } from "./";
import { Lightbox } from "components";

import analysis1 from "./analysis1.jpg";
import analysis2 from "./analysis2.jpg";
import analysis3 from "./analysis3.jpg";
import analysis4 from "./analysis4.jpg";

const useStyles = makeStyles((theme: Theme) => ({
    tags: {
        display: "flex",
        alignItems: "center",
        marginBottom: 28,
        "& button": {
            marginRight: 21
        },
        "& button:last-child": {
            marginRight: 0
        }
    },
    analyzes: {
        display: "flex",
        flexWrap: "wrap",
        margin: "0 -2px",
        [theme.breakpoints.down("xs")]: {
            justifyContent: "center"
        }
    }
}));

export const AnalyzesList: React.FC = () => {
    const classes = useStyles();
    const [currentChip, setCurrentChip] = useState<"all" | "analyzes" | "snapshot">(
        "all"
    );
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [photoIndex, setPhotoIndex] = useState<number>(0);

    const setIndex = (value: number): void => {
        setPhotoIndex(value);
    };

    const handleAnalysisItemClick = (value: number): void => {
        setIsOpen(true);
        setPhotoIndex(value);
    };

    return (
        <React.Fragment>
            <div className={classes.tags}>
                <AnalyzesChip
                    label="Все"
                    onClick={() => setCurrentChip("all")}
                    isActive={"all" === currentChip}
                />
                <AnalyzesChip
                    label="Анализы"
                    onClick={() => setCurrentChip("analyzes")}
                    isActive={"analyzes" === currentChip}
                />
                <AnalyzesChip
                    label="Снимки"
                    onClick={() => setCurrentChip("snapshot")}
                    isActive={"snapshot" === currentChip}
                />
            </div>
            <div className={classes.analyzes}>
                <AnalysisItem
                    image={analysis1}
                    onClick={() => handleAnalysisItemClick(0)}
                />
                <AnalysisItem
                    image={analysis2}
                    onClick={() => handleAnalysisItemClick(1)}
                />
                <AnalysisItem
                    image={analysis3}
                    onClick={() => handleAnalysisItemClick(2)}
                />
                <AnalysisItem
                    image={analysis4}
                    onClick={() => handleAnalysisItemClick(3)}
                />
            </div>
            {isOpen && (
                <Lightbox
                    images={[analysis1, analysis2, analysis3, analysis4]}
                    index={photoIndex}
                    onClose={() => setIsOpen(false)}
                    setIndex={setIndex}
                />
            )}
        </React.Fragment>
    );
};
