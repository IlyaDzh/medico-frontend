import React, { useState } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import {
    Typography,
    IconButton,
    Menu,
    MenuItem,
    Link as MaterialLink,
    Hidden,
    makeStyles,
    Theme
} from "@material-ui/core";

import { Avatar } from "components";
import { AlertMenuIcon, RemoveAppointmentIcon } from "icons";
import { useStores } from "stores/useStore";

interface IAlert {
    isHistory?: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
    alert: {
        background: "#fff",
        border: `1px solid ${theme.palette.other!.main}`,
        borderRadius: 8,
        padding: "15px 8px 15px 24px",
        marginBottom: 4,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        [theme.breakpoints.down("xs")]: {
            display: "block",
            padding: "12px 16px"
        }
    },
    alertLeft: {
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.down("sm")]: {
            marginRight: 18
        },
        [theme.breakpoints.down("xs")]: {
            display: "block",
            marginRight: 0
        }
    },
    alertRight: {
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.down("xs")]: {
            justifyContent: "space-between"
        }
    },
    separate: {
        height: 28,
        width: 1,
        background: "#c9cddd",
        margin: "0 24px"
    },
    doctorInfo: {
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.down("sm")]: {
            marginLeft: 18
        },
        [theme.breakpoints.down("xs")]: {
            margin: "8px 0",
            marginLeft: 0
        }
    },
    doctorData: {
        marginLeft: 12
    },
    method: {
        marginRight: 44,
        [theme.breakpoints.down("sm")]: {
            marginRight: 28
        }
    },
    menuButton: {
        width: 40,
        height: 40,
        padding: 0
    },
    menuItem: {
        color: theme.palette.text.secondary,
        fontWeight: 400
    },
    menuItemCancel: {
        color: theme.palette.error.main
    },
    menuIcon: {
        display: "inline-flex",
        marginRight: 16
    },
    appointmentLink: {
        fontSize: 14,
        marginRight: 32,
        "&:hover": {
            textDecoration: "none"
        }
    }
}));

export const Alert: React.FC<IAlert> = ({ isHistory }) => {
    const classes = useStyles();
    const { modalsStore } = useStores();
    const { setModalIsOpen } = modalsStore;
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = (): void => {
        setAnchorEl(null);
    };

    const handleCancelAppointmentClick = (): void => {
        handleMenuClose();
        setModalIsOpen("cancel-appointment", true);
    };

    return (
        <div className={classes.alert}>
            <div className={classes.alertLeft}>
                <Typography variant="body1">12 августа, Среда, 9:00</Typography>
                <Hidden smDown>
                    <div className={classes.separate} />
                </Hidden>
                <div className={classes.doctorInfo}>
                    <Avatar />
                    <div className={classes.doctorData}>
                        <Typography variant="h6" color="primary">
                            Терапевт
                        </Typography>
                        <Typography variant="body1">Имя Отчество Фамилия</Typography>
                    </div>
                </div>
            </div>
            {isHistory ? (
                <div className={classes.alertRight}>
                    <MaterialLink
                        className={classes.appointmentLink}
                        component={Link}
                        to={`/appointment/3`}
                        underline="always"
                    >
                        Записаться на прием
                    </MaterialLink>
                </div>
            ) : (
                <div className={classes.alertRight}>
                    <Typography className={classes.method} variant="body1">
                        Сообщения в чате
                    </Typography>
                    <IconButton
                        className={classes.menuButton}
                        color="primary"
                        onClick={handleMenuClick}
                        aria-label="Меню записи"
                        aria-controls="alert-menu"
                        aria-haspopup="true"
                    >
                        <AlertMenuIcon />
                    </IconButton>
                    <Menu
                        id="alert-menu"
                        anchorEl={anchorEl}
                        getContentAnchorEl={null}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "center"
                        }}
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "right"
                        }}
                    >
                        <MenuItem
                            onClick={handleCancelAppointmentClick}
                            className={clsx(
                                classes.menuItem,
                                classes.menuItemCancel
                            )}
                        >
                            <span className={classes.menuIcon}>
                                <RemoveAppointmentIcon />
                            </span>{" "}
                            Отменить запись
                        </MenuItem>
                    </Menu>
                </div>
            )}
        </div>
    );
};
