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

export const EducationForm: React.FC = observer(() => {
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
                    Добавьте ваше образование
                    <Button
                        className={classes.iconButton}
                        variant="contained"
                        color="primary"
                        onClick={() => addTabValue("education")}
                        aria-label="Добавить образование"
                    >
                        <AddIcon />
                    </Button>
                </FormLabel>

                {doctorProfileForm.education.length > 0 ? (
                    doctorProfileForm.education.map((education, index) => (
                        <div key={index} className={classes.formRow}>
                            <TextField
                                className={classes.yearField}
                                type="number"
                                variant="outlined"
                                color="secondary"
                                placeholder="2021"
                                InputProps={{ inputProps: { min: 1900, max: 2021 } }}
                                value={education.year}
                                onChange={event =>
                                    setTabValue(
                                        "education",
                                        "year",
                                        index,
                                        event.target.value
                                    )
                                }
                            />
                            <TextField
                                variant="outlined"
                                color="secondary"
                                placeholder="Место учебы"
                                value={education.name}
                                onChange={event =>
                                    setTabValue(
                                        "education",
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
                                onClick={() => removeTabValue("education", index)}
                                aria-label="Удалить образование"
                            >
                                <RemoveIcon />
                            </Button>
                        </div>
                    ))
                ) : (
                    <Typography>Образование не заполнено</Typography>
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
