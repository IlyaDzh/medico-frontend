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
    list: string[];
}

export const ExperienceList: React.FC<IExperienceList> = ({ list }) => {
    const classes = useStyles();

    return (
        <ul className={classes.list}>
            {list.length > 0 ? (
                list.map((item, index) => (
                    <li key={index} className={classes.listItem}>
                        <Typography variant="h5">1996</Typography>
                        <Typography className={classes.listItemText} variant="body1">
                            {item}
                        </Typography>
                    </li>
                ))
            ) : (
                <Typography variant="body1">Не заполнено</Typography>
            )}
        </ul>
    );
};
