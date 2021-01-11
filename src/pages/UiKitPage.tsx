import React, { useState } from "react";
import {
    Grid,
    Typography,
    TextField,
    MenuItem,
    ListSubheader,
    Checkbox,
    FormControlLabel,
    Radio,
    RadioGroup,
    makeStyles
} from "@material-ui/core";

import { Button } from "components";
import { ArrowRightIcon, CameraIcon, PhoneIcon, EnvelopeIcon } from "icons";

const useStyles = makeStyles(() => ({
    container: {
        padding: "15px 30px",
        "& .MuiButton-root, & .MuiFormControl-root": {
            marginBottom: 10,
            marginRight: 20
        }
    },
    title: {
        marginBottom: 20,
        color: "#b2b2b2"
    }
}));

export const UiKitPage: React.FC = () => {
    const classes = useStyles();
    const [select, setSelect] = useState<string>("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelect(event.target.value);
    };

    return (
        <Grid container spacing={3} className={classes.container}>
            <Grid item xs={12}>
                <Typography className={classes.title} variant="h1">
                    Buttons
                </Typography>

                <Button variant="contained">Написать отзыв</Button>
                <Button variant="outlined">Показать ещё</Button>
                <Button variant="contained" size="small">
                    Написать отзыв
                </Button>
                <Button variant="outlined" size="small">
                    Показать ещё
                </Button>
                <Button variant="contained" to="/doctors">
                    Специалисты
                </Button>
                <Button variant="contained" disabled>
                    Написать отзыв
                </Button>
                <Button variant="outlined" disabled>
                    Показать ещё
                </Button>
                <Button variant="text">Facebook</Button>
                <Button
                    variant="contained"
                    size="large"
                    icon={<ArrowRightIcon color="#fff" />}
                    to="/home"
                >
                    Записаться на прием
                </Button>
                <Button variant="contained" size="large" icon={<CameraIcon />}>
                    Связаться с пациентом
                </Button>
                <Button variant="contained" size="large" icon={<PhoneIcon />}>
                    Связаться с пациентом
                </Button>
                <Button variant="contained" size="large" icon={<EnvelopeIcon />}>
                    Связаться с пациентом
                </Button>
                <Button
                    variant="contained"
                    size="large"
                    icon={<ArrowRightIcon />}
                    to="/home"
                    disabled
                >
                    Записаться на прием
                </Button>
                <Button
                    variant="contained"
                    size="large"
                    icon={<CameraIcon />}
                    disabled
                >
                    Связаться с пациентом
                </Button>
            </Grid>
            <Grid item sm={6} xs={12}>
                <Typography className={classes.title} variant="h1">
                    Text fields
                </Typography>

                <TextField
                    variant="outlined"
                    color="secondary"
                    placeholder="Ваше имя"
                />
                <TextField
                    variant="outlined"
                    color="secondary"
                    placeholder="Ваше имя"
                    helperText="Заполните поле"
                    error
                />
                <TextField
                    variant="outlined"
                    color="secondary"
                    placeholder="Ваше имя"
                    disabled
                />
            </Grid>
            <Grid item sm={6} xs={12}>
                <Typography className={classes.title} variant="h1">
                    Dropdown
                </Typography>

                <TextField
                    select
                    value={select}
                    onChange={handleChange}
                    variant="outlined"
                    color="secondary"
                    SelectProps={{
                        displayEmpty: true
                    }}
                >
                    <MenuItem value="">Симптомы не выбраны</MenuItem>
                    <ListSubheader>Бедро и колено</ListSubheader>
                    <MenuItem value="1">Боль в колене</MenuItem>
                    <MenuItem value="2">Боль в колене</MenuItem>
                    <MenuItem value="3">Боль в колене</MenuItem>
                    <ListSubheader>Бедро и колено</ListSubheader>
                    <MenuItem value="4">Боль в колене</MenuItem>
                    <MenuItem value="5">Боль в колене</MenuItem>
                    <MenuItem value="6">Боль в колене</MenuItem>
                </TextField>
                <TextField
                    select
                    value={select}
                    onChange={handleChange}
                    variant="outlined"
                    color="secondary"
                    SelectProps={{
                        displayEmpty: true
                    }}
                    helperText="Заполните поле"
                    error
                >
                    <MenuItem value="">Симптомы не выбраны</MenuItem>
                    <ListSubheader>Бедро и колено</ListSubheader>
                    <MenuItem value="1">Боль в колене</MenuItem>
                    <MenuItem value="2">Боль в колене</MenuItem>
                    <MenuItem value="3">Боль в колене</MenuItem>
                    <ListSubheader>Бедро и колено</ListSubheader>
                    <MenuItem value="4">Боль в колене</MenuItem>
                    <MenuItem value="5">Боль в колене</MenuItem>
                    <MenuItem value="6">Боль в колене</MenuItem>
                </TextField>
            </Grid>
            <Grid item sm={6} xs={12}>
                <Typography className={classes.title} variant="h1">
                    Fonts
                </Typography>

                <Typography variant="h1">h1 - 52 medium (66)</Typography>
                <Typography variant="h2">h2 - 42 regular (56)</Typography>
                <Typography variant="h3">h3 - 28 medium (36)</Typography>
                <Typography variant="h4">h4 - 20 regular (26)</Typography>
                <Typography variant="h5">h5 - 18 medium (28)</Typography>
                <Typography variant="h6">h6 - 14 regular (18)</Typography>
                <Typography variant="body2">Text - 18 regular (28)</Typography>
                <Typography variant="body1">Paragraph - 18 ligtht (28)</Typography>
            </Grid>
            <Grid item sm={6} xs={12}>
                <Typography className={classes.title} variant="h1">
                    Checkboxes and radio
                </Typography>

                <FormControlLabel
                    control={<Checkbox color="secondary" />}
                    label="Checkbox"
                />
                <RadioGroup aria-label="gender" name="gender">
                    <FormControlLabel
                        value="female"
                        control={<Radio color="secondary" />}
                        label="Female"
                    />
                    <FormControlLabel
                        value="male"
                        control={<Radio color="secondary" />}
                        label="Male"
                    />
                </RadioGroup>
            </Grid>
        </Grid>
    );
};
