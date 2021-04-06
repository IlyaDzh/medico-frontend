import React from "react";
import { Typography, makeStyles, Theme } from "@material-ui/core";

import { Specialty } from "stores/interfaces/ISpecialtiesStore";

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

interface ISpecialtiesList {
    specialties: Specialty[];
}

export const SpecialtiesList: React.FC<ISpecialtiesList> = ({ specialties }) => {
    const classes = useStyles();

    return (
        <ul className={classes.list}>
            {specialties.map(specialty => (
                <li key={specialty.id} className={classes.listItem}>
                    <Typography variant="body1">{specialty.name}</Typography>
                </li>
            ))}
        </ul>
    );
};
