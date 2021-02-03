import React from "react";
import { Paper, Typography, makeStyles, Theme } from "@material-ui/core";

import { Button } from "components";

const useStyles = makeStyles((theme: Theme) => ({
    card: {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        maxWidth: 445,
        width: "100%",
        height: "100%",
        padding: "48px 36px",
        margin: "0 auto",
        backgroundColor: theme.palette.other?.main,
        borderRadius: 8,
        "&:hover": {
            boxShadow: "0px 8px 16px rgba(45, 96, 156, 0.2)"
        },
        [theme.breakpoints.down(1024)]: {
            padding: "42px 24px"
        },
        [theme.breakpoints.down("xs")]: {
            padding: "32px 20px"
        }
    },
    tariffName: {
        position: "relative",
        marginBottom: 36,
        "&:before": {
            content: "''",
            position: "absolute",
            left: 0,
            bottom: -18,
            width: 48,
            height: 2,
            backgroundColor: theme.palette.primary.main,
            [theme.breakpoints.down("xs")]: {
                bottom: -12
            }
        },
        [theme.breakpoints.down("xs")]: {
            marginBottom: 18
        }
    },
    tariffPrice: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 24,
        [theme.breakpoints.down("xs")]: {
            marginBottom: 12
        }
    },
    list: {
        paddingLeft: 24,
        marginBottom: 24,
        [theme.breakpoints.down("xs")]: {
            marginBottom: 18
        }
    },
    listItem: {
        position: "relative",
        marginBottom: 16,
        "&:after": {
            content: "''",
            position: "absolute",
            top: 8,
            left: -22,
            width: 8,
            height: 8,
            backgroundColor: theme.palette.primary.dark,
            borderRadius: "50%",
            [theme.breakpoints.down("xs")]: {
                top: 4,
                width: 6,
                height: 6
            }
        }
    },
    tariffButtons: {
        "& button:first-child": {
            marginBottom: 8
        }
    }
}));

interface ITariffCard {
    tariffName: string;
    price: string;
    receptions: string;
    descriptionList: string[];
}

export const TariffCard: React.FC<ITariffCard> = ({
    tariffName,
    price,
    receptions,
    descriptionList
}) => {
    const classes = useStyles();

    return (
        <Paper component="article" className={classes.card} elevation={0}>
            <div>
                <Typography className={classes.tariffName} variant="h4">
                    {tariffName}
                </Typography>
                <div className={classes.tariffPrice}>
                    <Typography variant="h3">{price}</Typography>
                    <Typography variant="h6" color="textPrimary">
                        {receptions}
                    </Typography>
                </div>
                <ul className={classes.list}>
                    {descriptionList.map((item, index) => (
                        <li key={index} className={classes.listItem}>
                            <Typography variant="body1">{item}</Typography>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={classes.tariffButtons}>
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
