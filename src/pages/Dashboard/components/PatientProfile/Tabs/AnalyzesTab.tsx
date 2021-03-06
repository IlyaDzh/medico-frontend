import React, { useState } from "react";
import { observer } from "mobx-react";
import { Typography, makeStyles, Theme } from "@material-ui/core";

import { Lightbox } from "components";
import { useStores } from "stores/useStore";
import { AnalyzesChip, AnalysisItem } from "../../Analyzes";

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

type ChipTypes = "all" | "analysis" | "snapshot";

export const AnalyzesTab: React.FC = observer(() => {
    const classes = useStyles();
    const [currentChip, setCurrentChip] = useState<ChipTypes>("all");
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [photoIndex, setPhotoIndex] = useState<number>(0);
    const { dashboardPatientInfoStore } = useStores();
    const { analyzes, sortAnalyzesByType } = dashboardPatientInfoStore;

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

            {analyzes.length > 0 ? (
                <div className={classes.analyzes}>
                    {(currentChip === "all"
                        ? analyzes
                        : sortAnalyzesByType(currentChip)
                    ).map((analysis, index) => (
                        <AnalysisItem
                            key={analysis.id}
                            analysis={analysis}
                            onClick={() => handleAnalysisItemClick(index)}
                        />
                    ))}
                </div>
            ) : (
                <Typography variant="body1">Анализов нет</Typography>
            )}

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
