import React from "react";
import { Typography, makeStyles } from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";

import { Button, DialogAddAnalysis, DialogDeleteAnalysis } from "components";
import { AnalyzesList } from "../components";
import { useStores } from "stores/useStore";

const useStyles = makeStyles(() => ({
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
    }
}));

export const PatientAnalyzesPage: React.FC = () => {
    const classes = useStyles();
    const { modalsStore } = useStores();
    const { setModalIsOpen } = modalsStore;

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
                    aria-label="Добавить новый анализ или снимок"
                >
                    <AddIcon />
                </Button>
            </div>
            <AnalyzesList />
            <DialogAddAnalysis />
            <DialogDeleteAnalysis />
        </React.Fragment>
    );
};
