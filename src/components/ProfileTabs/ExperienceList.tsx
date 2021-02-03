import React from "react";
import { Typography, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
    list: {
        paddingLeft: 24
    },
    listItem: {
        position: "relative",
        marginBottom: 24,
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
    listItemText: {
        marginLeft: -24,
        paddingTop: 2
    }
}));

interface IExperienceList {
    list: {
        id: string;
        date: string;
        text: string;
    }[];
}

export const ExperienceList: React.FC<IExperienceList> = ({ list }) => {
    const classes = useStyles();

    return (
        <ul className={classes.list}>
            {list.map(item => (
                <li key={item.id} className={classes.listItem}>
                    <Typography variant="h5">{item.date}</Typography>
                    <Typography className={classes.listItemText} variant="body1">
                        {item.text}
                    </Typography>
                </li>
            ))}
        </ul>
    );
};
