import React from "react";
import { observer } from "mobx-react";
import { Typography, TextField, FormLabel, makeStyles } from "@material-ui/core";
import { Remove as RemoveIcon, Add as AddIcon } from "@material-ui/icons";

import { Button, SubmissionResult } from "components";
import { useStores } from "stores/useStore";
import { useFormStyles } from "styles/material/useFormStyles";

const useStyles = makeStyles(() => ({
    formRow: {
        display: "flex",
        alignItems: "center",
        marginBottom: 12,
        "&:last-child": {
            marginBottom: 0
        }
    },
    yearField: {
        minWidth: 95,
        marginRight: 18
    },
    iconButton: {
        marginLeft: 24,
        borderRadius: "50%",
        minWidth: 32,
        height: 32,
        padding: 0
    }
}));

export const WorkplacesForm: React.FC = observer(() => {
    const classes = useStyles();
    const formClasses = useFormStyles();
    const { dashboardDoctorProfileStore } = useStores();
    const {
        doctorProfileForm,
        pendingUpdate,
        submissionError,
        setTabValue,
        removeTabValue,
        addTabValue
    } = dashboardDoctorProfileStore;

    return (
        <React.Fragment>
            <fieldset className={formClasses.formGroup}>
                <FormLabel className={formClasses.groupLabel} component="legend">
                    Добавьте ваш опыт работы
                    <Button
                        className={classes.iconButton}
                        variant="contained"
                        color="primary"
                        onClick={() => addTabValue("workplaces")}
                        aria-label="Добавить опыт работы"
                    >
                        <AddIcon />
                    </Button>
                </FormLabel>

                {doctorProfileForm.workplaces.length > 0 ? (
                    doctorProfileForm.workplaces.map((workplaces, index) => (
                        <div key={index} className={classes.formRow}>
                            <TextField
                                className={classes.yearField}
                                type="number"
                                variant="outlined"
                                color="secondary"
                                placeholder="2021"
                                InputProps={{ inputProps: { min: 1900, max: 2021 } }}
                                value={workplaces.year}
                                onChange={event =>
                                    setTabValue(
                                        "workplaces",
                                        "year",
                                        index,
                                        event.target.value
                                    )
                                }
                            />
                            <TextField
                                variant="outlined"
                                color="secondary"
                                placeholder="Место работы"
                                value={workplaces.name}
                                onChange={event =>
                                    setTabValue(
                                        "workplaces",
                                        "name",
                                        index,
                                        event.target.value
                                    )
                                }
                                fullWidth
                            />
                            <Button
                                className={classes.iconButton}
                                variant="contained"
                                color="primary"
                                onClick={() => removeTabValue("workplaces", index)}
                                aria-label="Удалить опыт работы"
                            >
                                <RemoveIcon />
                            </Button>
                        </div>
                    ))
                ) : (
                    <Typography>Опыт работы не заполнен</Typography>
                )}
            </fieldset>
            <SubmissionResult align="center" isError>
                {submissionError}
            </SubmissionResult>
            <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={pendingUpdate}
                isLoaded={pendingUpdate}
            >
                Изменить
            </Button>
        </React.Fragment>
    );
});
