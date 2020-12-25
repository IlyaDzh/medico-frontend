import React from "react";
import { Grid, Button, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    container: {
        padding: "15px 30px",
        "& .MuiButton-root": {
            marginBottom: "10px"
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

                <Button variant="contained" color="primary" disableElevation>
                    Написать отзыв
                </Button>
                <Button variant="outlined" color="primary">
                    Показать ещё
                </Button>
                <Button variant="text" color="primary">
                    Facebook
                </Button>
            </Grid>
        </Grid>
    );
};
