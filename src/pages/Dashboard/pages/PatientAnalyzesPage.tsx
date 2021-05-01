import React, { useState } from "react";
import { Typography, makeStyles, Theme } from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";

import { Button, DialogAddAnalysis } from "components";
import { AnalyzesChip, AnalysisItem } from "../components";
import { useStores } from "stores/useStore";

const useStyles = makeStyles((theme: Theme) => ({
    header: {
        display: "flex",
        alignItems: "center",
        marginBottom: 29
    },
    addButton: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minWidth: 26,
        height: 26,
        padding: 0,
        marginLeft: 12,
        borderRadius: "50%"
    },
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

export const PatientAnalyzesPage: React.FC = () => {
    const classes = useStyles();
    const { modalsStore } = useStores();
    const { setModalIsOpen } = modalsStore;
    const [currentChip, setCurrentChip] = useState<"all" | "analyzes" | "snapshot">(
        "all"
    );

    const handleAddAnalysis = (): void => {
        setModalIsOpen("add-analysis", true);
    };

    return (
        <React.Fragment>
            <div className={classes.header}>
                <Typography variant="h4">Мои анализы</Typography>
                <Button
                    className={classes.addButton}
                    variant="contained"
                    onClick={handleAddAnalysis}
                >
                    <AddIcon />
                </Button>
            </div>
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
                <AnalysisItem />
                <AnalysisItem />
                <AnalysisItem />
            </div>
            <DialogAddAnalysis />
        </React.Fragment>
    );
};
