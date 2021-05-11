import React from "react";
import { observer } from "mobx-react";
import {
    Typography,
    RadioGroup,
    FormControlLabel,
    Radio,
    FormControl,
    FormLabel
} from "@material-ui/core";

import { Button, SubmissionResult } from "components";
import { useStores } from "stores/useStore";
import { useFormStyles } from "styles/material/useFormStyles";

export const BloodTypeForm: React.FC = observer(() => {
    const formClasses = useFormStyles();
    const { dashboardMedicalCard } = useStores();
    const {
        changeCardForm,
        pending,
        submissionError,
        setFormValue
    } = dashboardMedicalCard;

    return (
        <React.Fragment>
            <FormControl className={formClasses.formGroup} component="fieldset">
                <FormLabel className={formClasses.groupLabel} component="legend">
                    Группа крови:
                </FormLabel>
                <RadioGroup
                    value={changeCardForm.bloodType}
                    onChange={event => setFormValue("bloodType", event.target.value)}
                    aria-label="Группа крови"
                >
                    <FormControlLabel
                        value="I"
                        control={<Radio color="secondary" />}
                        label={
                            <Typography variant="body1" color="textSecondary">
                                I
                            </Typography>
                        }
                    />
                    <FormControlLabel
                        value="II"
                        control={<Radio color="secondary" />}
                        label={
                            <Typography variant="body1" color="textSecondary">
                                II
                            </Typography>
                        }
                    />
                    <FormControlLabel
                        value="III"
                        control={<Radio color="secondary" />}
                        label={
                            <Typography variant="body1" color="textSecondary">
                                III
                            </Typography>
                        }
                    />
                    <FormControlLabel
                        value="IV"
                        control={<Radio color="secondary" />}
                        label={
                            <Typography variant="body1" color="textSecondary">
                                IV
                            </Typography>
                        }
                    />
                </RadioGroup>
            </FormControl>
            <FormControl className={formClasses.formGroup} component="fieldset">
                <FormLabel className={formClasses.groupLabel} component="legend">
                    Резус фактор:
                </FormLabel>
                <RadioGroup
                    value={changeCardForm.RHFactor}
                    onChange={event => setFormValue("RHFactor", event.target.value)}
                    aria-label="Резус фактор"
                >
                    <FormControlLabel
                        value="Rh+"
                        control={<Radio color="secondary" />}
                        label={
                            <Typography variant="body1" color="textSecondary">
                                Rh+
                            </Typography>
                        }
                    />
                    <FormControlLabel
                        value="Rh-"
                        control={<Radio color="secondary" />}
                        label={
                            <Typography variant="body1" color="textSecondary">
                                Rh-
                            </Typography>
                        }
                    />
                </RadioGroup>
            </FormControl>
            <SubmissionResult align="center" isError>
                {submissionError}
            </SubmissionResult>
            <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={pending}
                isLoaded={pending}
            >
                Изменить
            </Button>
        </React.Fragment>
    );
});
