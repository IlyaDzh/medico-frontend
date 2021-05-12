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
import { Consultation } from "stores/interfaces/Dashboard";
import { formatDate } from "utils/formatDate";

interface IConsultationItem {
    consultation: Consultation;
    onCancel?: () => void;
    isActive?: boolean;
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
            justifyContent: "space-between",
            flexWrap: "wrap"
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
        textDecoration: "none",
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
        marginRight: 20,
        textDecoration: "underline",
        textAlign: "center",
        "&:hover": {
            textDecoration: "none"
        },
        [theme.breakpoints.down("md")]: {
            marginRight: 16
        },
        [theme.breakpoints.down("sm")]: {}
    }
}));

export const ConsultationItem: React.FC<IConsultationItem> = ({
    consultation,
    onCancel,
    isActive
}) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = (): void => {
        setAnchorEl(null);
    };

    const handleCancelConsultation = (): void => {
        handleMenuClose();
        if (onCancel) onCancel();
    };

    return (
        <div className={classes.alert}>
            <div className={classes.alertLeft}>
                <Typography variant="body1">
                    {formatDate(
                        consultation.receptionDate.toString(),
                        "d MMMM, EEEE, HH:mm"
                    )}
                </Typography>
                <Hidden smDown>
                    <div className={classes.separate} />
                </Hidden>
                <Link
                    className={classes.doctorInfo}
                    to={`/doctor/${consultation.doctor.id}`}
                >
                    <Avatar
                        src={
                            process.env.REACT_APP_API_BASE_URL +
                            consultation.doctor.photo
                        }
                        alt={`${consultation.doctor.name} аватар`}
                        isPositionTop
                    />
                    <div className={classes.doctorData}>
                        <Typography variant="h6" color="primary">
                            {consultation.doctorSpecialty.name}
                        </Typography>
                        <Typography variant="body1">
                            {consultation.doctor.surname} {consultation.doctor.name}{" "}
                            {consultation.doctor.middleName}
                        </Typography>
                    </div>
                </Link>
            </div>
            {onCancel ? (
                <div className={classes.alertRight}>
                    <Typography className={classes.method} variant="body1">
                        {consultation.communicationMethod.method}
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
                            onClick={handleCancelConsultation}
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
            ) : (
                <div className={classes.alertRight}>
                    {isActive ? (
                        <MaterialLink
                            className={classes.appointmentLink}
                            component={Link}
                            to={`/dashboard/chat/${consultation.id}`}
                        >
                            Перейти к консультации
                        </MaterialLink>
                    ) : (
                        <React.Fragment>
                            <MaterialLink
                                className={classes.appointmentLink}
                                type="button"
                                component="button"
                                variant="h6"
                                onClick={() => {
                                    console.info("open add-comment dialog");
                                }}
                            >
                                Оставить отзыв
                            </MaterialLink>
                            <MaterialLink
                                className={classes.appointmentLink}
                                component={Link}
                                to={`/appointment/${consultation.doctor.id}`}
                            >
                                Записаться на прием
                            </MaterialLink>
                        </React.Fragment>
                    )}
                </div>
            )}
        </div>
    );
};
