import React from "react";
import { observer } from "mobx-react";
import {
    Typography,
    Paper,
    FormControlLabel,
    FormControl,
    FormGroup,
    FormLabel,
    MenuItem,
    makeStyles,
    Theme
} from "@material-ui/core";

import { Select } from "components";
import { useStores } from "stores/useStore";

const useStyles = makeStyles((theme: Theme) => ({
    title: {
        marginBottom: 24
    },
    calendarWrapper: {
        borderRadius: 8,
        padding: 40,
        maxWidth: 700
    },
    formControl: {
        display: "block",
        marginBottom: 20,
        maxWidth: 400
    },
    formlabel: {
        color: theme.palette.text.secondary,
        fontSize: 16,
        fontWeight: 500,
        marginBottom: 12
    },
    formGroup: {
        flexWrap: "nowrap"
    },
    label: {
        marginRight: 8
    },
    labelPlacementStart: {
        width: "100%",
        marginLeft: 0,
        marginRight: 16
    },
    select: {
        width: "100%"
    }
}));

export const DoctorCalendarPage: React.FC = observer(() => {
    const classes = useStyles();
    const {} = useStores();

    return (
        <React.Fragment>
            <Typography className={classes.title} variant="h4">
                График работы
            </Typography>

            <Paper className={classes.calendarWrapper} variant="outlined">
                <form>
                    <FormControl
                        className={classes.formControl}
                        component="fieldset"
                    >
                        <FormLabel className={classes.formlabel} component="legend">
                            Понедельник:
                        </FormLabel>
                        <FormGroup className={classes.formGroup} row>
                            <FormControlLabel
                                classes={{
                                    label: classes.label,
                                    labelPlacementStart: classes.labelPlacementStart
                                }}
                                control={
                                    <Select className={classes.select} value="10">
                                        <MenuItem value="10">10:00</MenuItem>
                                        <MenuItem value="11">11:00</MenuItem>
                                        <MenuItem value="12">12:00</MenuItem>
                                        <MenuItem value="13">13:00</MenuItem>
                                    </Select>
                                }
                                label="с"
                                labelPlacement="start"
                            />
                            <FormControlLabel
                                classes={{
                                    label: classes.label,
                                    labelPlacementStart: classes.labelPlacementStart
                                }}
                                control={
                                    <Select className={classes.select} value="13">
                                        <MenuItem value="10">10:00</MenuItem>
                                        <MenuItem value="11">11:00</MenuItem>
                                        <MenuItem value="12">12:00</MenuItem>
                                        <MenuItem value="13">13:00</MenuItem>
                                    </Select>
                                }
                                label="по"
                                labelPlacement="start"
                            />
                        </FormGroup>
                    </FormControl>
                    <FormControl
                        className={classes.formControl}
                        component="fieldset"
                    >
                        <FormLabel className={classes.formlabel} component="legend">
                            Понедельник:
                        </FormLabel>
                        <FormGroup className={classes.formGroup} row>
                            <FormControlLabel
                                classes={{
                                    label: classes.label,
                                    labelPlacementStart: classes.labelPlacementStart
                                }}
                                control={
                                    <Select className={classes.select} value="10">
                                        <MenuItem value="10">10:00</MenuItem>
                                        <MenuItem value="11">11:00</MenuItem>
                                        <MenuItem value="12">12:00</MenuItem>
                                        <MenuItem value="13">13:00</MenuItem>
                                    </Select>
                                }
                                label="с"
                                labelPlacement="start"
                            />
                            <FormControlLabel
                                classes={{
                                    label: classes.label,
                                    labelPlacementStart: classes.labelPlacementStart
                                }}
                                control={
                                    <Select className={classes.select} value="13">
                                        <MenuItem value="10">10:00</MenuItem>
                                        <MenuItem value="11">11:00</MenuItem>
                                        <MenuItem value="12">12:00</MenuItem>
                                        <MenuItem value="13">13:00</MenuItem>
                                    </Select>
                                }
                                label="по"
                                labelPlacement="start"
                            />
                        </FormGroup>
                    </FormControl>
                    <FormControl
                        className={classes.formControl}
                        component="fieldset"
                    >
                        <FormLabel className={classes.formlabel} component="legend">
                            Понедельник:
                        </FormLabel>
                        <FormGroup className={classes.formGroup} row>
                            <FormControlLabel
                                classes={{
                                    label: classes.label,
                                    labelPlacementStart: classes.labelPlacementStart
                                }}
                                control={
                                    <Select className={classes.select} value="10">
                                        <MenuItem value="10">10:00</MenuItem>
                                        <MenuItem value="11">11:00</MenuItem>
                                        <MenuItem value="12">12:00</MenuItem>
                                        <MenuItem value="13">13:00</MenuItem>
                                    </Select>
                                }
                                label="с"
                                labelPlacement="start"
                            />
                            <FormControlLabel
                                classes={{
                                    label: classes.label,
                                    labelPlacementStart: classes.labelPlacementStart
                                }}
                                control={
                                    <Select className={classes.select} value="13">
                                        <MenuItem value="10">10:00</MenuItem>
                                        <MenuItem value="11">11:00</MenuItem>
                                        <MenuItem value="12">12:00</MenuItem>
                                        <MenuItem value="13">13:00</MenuItem>
                                    </Select>
                                }
                                label="по"
                                labelPlacement="start"
                            />
                        </FormGroup>
                    </FormControl>
                    <FormControl
                        className={classes.formControl}
                        component="fieldset"
                    >
                        <FormLabel className={classes.formlabel} component="legend">
                            Понедельник:
                        </FormLabel>
                        <FormGroup className={classes.formGroup} row>
                            <FormControlLabel
                                classes={{
                                    label: classes.label,
                                    labelPlacementStart: classes.labelPlacementStart
                                }}
                                control={
                                    <Select className={classes.select} value="10">
                                        <MenuItem value="10">10:00</MenuItem>
                                        <MenuItem value="11">11:00</MenuItem>
                                        <MenuItem value="12">12:00</MenuItem>
                                        <MenuItem value="13">13:00</MenuItem>
                                    </Select>
                                }
                                label="с"
                                labelPlacement="start"
                            />
                            <FormControlLabel
                                classes={{
                                    label: classes.label,
                                    labelPlacementStart: classes.labelPlacementStart
                                }}
                                control={
                                    <Select className={classes.select} value="13">
                                        <MenuItem value="10">10:00</MenuItem>
                                        <MenuItem value="11">11:00</MenuItem>
                                        <MenuItem value="12">12:00</MenuItem>
                                        <MenuItem value="13">13:00</MenuItem>
                                    </Select>
                                }
                                label="по"
                                labelPlacement="start"
                            />
                        </FormGroup>
                    </FormControl>
                    <FormControl
                        className={classes.formControl}
                        component="fieldset"
                    >
                        <FormLabel className={classes.formlabel} component="legend">
                            Понедельник:
                        </FormLabel>
                        <FormGroup className={classes.formGroup} row>
                            <FormControlLabel
                                classes={{
                                    label: classes.label,
                                    labelPlacementStart: classes.labelPlacementStart
                                }}
                                control={
                                    <Select className={classes.select} value="10">
                                        <MenuItem value="10">10:00</MenuItem>
                                        <MenuItem value="11">11:00</MenuItem>
                                        <MenuItem value="12">12:00</MenuItem>
                                        <MenuItem value="13">13:00</MenuItem>
                                    </Select>
                                }
                                label="с"
                                labelPlacement="start"
                            />
                            <FormControlLabel
                                classes={{
                                    label: classes.label,
                                    labelPlacementStart: classes.labelPlacementStart
                                }}
                                control={
                                    <Select className={classes.select} value="13">
                                        <MenuItem value="10">10:00</MenuItem>
                                        <MenuItem value="11">11:00</MenuItem>
                                        <MenuItem value="12">12:00</MenuItem>
                                        <MenuItem value="13">13:00</MenuItem>
                                    </Select>
                                }
                                label="по"
                                labelPlacement="start"
                            />
                        </FormGroup>
                    </FormControl>
                    <FormControl
                        className={classes.formControl}
                        component="fieldset"
                    >
                        <FormLabel className={classes.formlabel} component="legend">
                            Понедельник:
                        </FormLabel>
                        <FormGroup className={classes.formGroup} row>
                            <FormControlLabel
                                classes={{
                                    label: classes.label,
                                    labelPlacementStart: classes.labelPlacementStart
                                }}
                                control={
                                    <Select className={classes.select} value="10">
                                        <MenuItem value="10">10:00</MenuItem>
                                        <MenuItem value="11">11:00</MenuItem>
                                        <MenuItem value="12">12:00</MenuItem>
                                        <MenuItem value="13">13:00</MenuItem>
                                    </Select>
                                }
                                label="с"
                                labelPlacement="start"
                            />
                            <FormControlLabel
                                classes={{
                                    label: classes.label,
                                    labelPlacementStart: classes.labelPlacementStart
                                }}
                                control={
                                    <Select className={classes.select} value="13">
                                        <MenuItem value="10">10:00</MenuItem>
                                        <MenuItem value="11">11:00</MenuItem>
                                        <MenuItem value="12">12:00</MenuItem>
                                        <MenuItem value="13">13:00</MenuItem>
                                    </Select>
                                }
                                label="по"
                                labelPlacement="start"
                            />
                        </FormGroup>
                    </FormControl>
                    <FormControl
                        className={classes.formControl}
                        component="fieldset"
                    >
                        <FormLabel className={classes.formlabel} component="legend">
                            Понедельник:
                        </FormLabel>
                        <FormGroup className={classes.formGroup} row>
                            <FormControlLabel
                                classes={{
                                    label: classes.label,
                                    labelPlacementStart: classes.labelPlacementStart
                                }}
                                control={
                                    <Select className={classes.select} value="10">
                                        <MenuItem value="10">10:00</MenuItem>
                                        <MenuItem value="11">11:00</MenuItem>
                                        <MenuItem value="12">12:00</MenuItem>
                                        <MenuItem value="13">13:00</MenuItem>
                                    </Select>
                                }
                                label="с"
                                labelPlacement="start"
                            />
                            <FormControlLabel
                                classes={{
                                    label: classes.label,
                                    labelPlacementStart: classes.labelPlacementStart
                                }}
                                control={
                                    <Select className={classes.select} value="13">
                                        <MenuItem value="10">10:00</MenuItem>
                                        <MenuItem value="11">11:00</MenuItem>
                                        <MenuItem value="12">12:00</MenuItem>
                                        <MenuItem value="13">13:00</MenuItem>
                                    </Select>
                                }
                                label="по"
                                labelPlacement="start"
                            />
                        </FormGroup>
                    </FormControl>
                </form>
            </Paper>
        </React.Fragment>
    );
});
