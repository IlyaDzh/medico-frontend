import React from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";

import { Button } from "../components";

const useStyles = makeStyles(() => ({
    container: {
        padding: "15px 30px",
        "& .MuiButton-root": {
            marginBottom: "10px",
            marginRight: "20px"
        }
    },
    title: {
        marginBottom: "20px"
    }
}));

export const UiKitPage: React.FC = () => {
    const classes = useStyles();

    return (
        <Grid container spacing={3} className={classes.container}>
            <Grid item xs={12}>
                <Typography className={classes.title} variant="h1">
                    Buttons
                </Typography>

                <Button variant="contained">Написать отзыв</Button>
                <Button variant="outlined">Показать ещё</Button>
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
            </Grid>
        </Grid>
    );
};
