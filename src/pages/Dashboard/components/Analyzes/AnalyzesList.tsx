import React, { useState, useEffect } from "react";
import { observer } from "mobx-react";
import { makeStyles, Theme } from "@material-ui/core";

import { AnalyzesChip, AnalysisItem } from "./";
import { Lightbox, Loader } from "components";
import { useStores } from "stores/useStore";

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

export const AnalyzesList: React.FC = observer(() => {
    const classes = useStyles();
    const [currentChip, setCurrentChip] = useState<"all" | "analysis" | "snapshot">(
        "all"
    );
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [photoIndex, setPhotoIndex] = useState<number>(0);
    const { dashboardAnalyzes } = useStores();
    const { analyzes, analyzesPending, getAnalyzes } = dashboardAnalyzes;

    useEffect(() => {
        if (!analyzes.length) {
            getAnalyzes();
        }
    }, [getAnalyzes]);

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
                    onClick={() => setCurrentChip("analysis")}
                    isActive={"analysis" === currentChip}
                />
                <AnalyzesChip
                    label="Снимки"
                    onClick={() => setCurrentChip("snapshot")}
                    isActive={"snapshot" === currentChip}
                />
            </div>
            <div className={classes.analyzes}>
                {!analyzesPending ? (
                    analyzes.map((analysis, index) => (
                        <AnalysisItem
                            key={analysis.id}
                            analysis={analysis}
                            onClick={() => handleAnalysisItemClick(index)}
                        />
                    ))
                ) : (
                    <Loader level={2.5} isCenter />
                )}
            </div>
            {isOpen && analyzes.length > 0 && (
                <Lightbox
                    images={analyzes.map(
                        item => `${process.env.REACT_APP_API_BASE_URL}${item.path}`
                    )}
                    index={photoIndex}
                    onClose={() => setIsOpen(false)}
                    setIndex={setIndex}
                />
            )}
        </React.Fragment>
    );
});
