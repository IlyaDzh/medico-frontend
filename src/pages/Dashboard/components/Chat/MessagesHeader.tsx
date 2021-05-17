import React from "react";
import { Typography, makeStyles, Theme } from "@material-ui/core";

import { Avatar, Button } from "components";
import { PhoneIcon, CameraIcon } from "icons";

const useStyles = makeStyles((theme: Theme) => ({
    header: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "8px 28px",
        backgroundColor: "#fff"
    },
    headerFlex: {
        display: "flex",
        alignItems: "center"
    },
    fullName: {
        margin: "0 18px"
    },
    iconButton: {
        minWidth: 44,
        height: 44,
        padding: 0,
        borderRadius: "50%",
        "&:first-child": {
            marginRight: 18
        }
    }
}));

export const MessagesHeader: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.header}>
            <div className={classes.headerFlex}>
                <Avatar size={48} src={undefined} alt={`Алла аватар`} />
                <Typography className={classes.fullName} variant="body2">
                    Алла Иванова
                </Typography>
                <Typography variant="h6" color="textPrimary">
                    Терапевт
                </Typography>
            </div>
            <div className={classes.headerFlex}>
                <Button
                    className={classes.iconButton}
                    variant="contained"
                    color="default"
                    aria-label="Аудиозвонок"
                >
                    <PhoneIcon color="#5a5f6f" width={25} height={25} />
                </Button>
                <Button
                    className={classes.iconButton}
                    variant="contained"
                    color="default"
                    aria-label="Видеозвонок"
                >
                    <CameraIcon color="#5a5f6f" width={25} height={25} />
                </Button>
            </div>
        </div>
    );
};
