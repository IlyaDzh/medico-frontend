import React from "react";
import { Paper, Typography, makeStyles, Theme } from "@material-ui/core";

import { Button } from "components";

const useStyles = makeStyles((theme: Theme) => ({
    card: {
        position: "relative",
        width: "33%",
        padding: "48px 36px",
        backgroundColor: theme.palette.border?.main,
        borderRadius: 8,
        "&:hover": {
            boxShadow: "0px 8px 16px rgba(45, 96, 156, 0.2)"
        }
    },
    tariffName: {},
    tariffPrice: {},
    tariffReception: {}
}));

export const TariffCard: React.FC = () => {
    const classes = useStyles();

    return (
        <Paper component="article" className={classes.card} elevation={0}>
            <div>
                <Typography className={classes.tariffName} variant="h4">
                    Пробная консультация
                </Typography>
                <div>
                    <Typography className={classes.tariffPrice} variant="h3">
                        Бесплатно
                    </Typography>
                    <Typography
                        className={classes.tariffReception}
                        variant="h6"
                        color="primary"
                    >
                        1 приём
                    </Typography>
                </div>
                <ul>
                    <li>15 минут</li>
                    <li>Подбор врача</li>
                    <li>Чат</li>
                    <li>Возрастные ограничения 16+</li>
                </ul>
            </div>
            <div>
                <Button variant="contained" fullWidth>
                    Выбрать тариф
                </Button>
                <Button variant="outlined" fullWidth>
                    Подробнее
                </Button>
            </div>
        </Paper>
    );
};
