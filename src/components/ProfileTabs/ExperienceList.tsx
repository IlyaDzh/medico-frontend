import React from "react";
import { Typography, makeStyles, Theme } from "@material-ui/core";

import { Button } from "components";
import { Experience } from "stores/interfaces/IUserStore";

const useStyles = makeStyles((theme: Theme) => ({
    experienceList: {
        marginBottom: 36
    },
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
    list: Experience[];
    onEdit?: () => void;
}

export const ExperienceList: React.FC<IExperienceList> = ({ list, onEdit }) => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <div className={classes.experienceList}>
                {list.length > 0 ? (
                    <ul className={classes.list}>
                        {list.map((item, index) => (
                            <li key={index} className={classes.listItem}>
                                <Typography variant="h5">{item.year}</Typography>
                                <Typography
                                    className={classes.listItemText}
                                    variant="body1"
                                >
                                    {item.name}
                                </Typography>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <Typography variant="body1">Не заполнено</Typography>
                )}
            </div>
            {onEdit && (
                <Button variant="outlined" onClick={onEdit}>
                    Добавить
                </Button>
            )}
        </React.Fragment>
    );
};
