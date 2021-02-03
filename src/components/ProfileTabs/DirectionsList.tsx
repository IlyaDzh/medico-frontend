import React from "react";
import { Typography, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
    list: {
        paddingLeft: 24
    },
    listItem: {
        position: "relative",
        marginBottom: 8,
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
    }
}));

interface IDirectionsList {
    directions: string[];
}

export const DirectionsList: React.FC<IDirectionsList> = ({ directions }) => {
    const classes = useStyles();

    return (
        <ul className={classes.list}>
            {directions.map((direction, index) => (
                <li key={index} className={classes.listItem}>
                    <Typography variant="body1">{direction}</Typography>
                </li>
            ))}
        </ul>
    );
};
