import React, { useState } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import {
    Container,
    Hidden,
    IconButton,
    Menu,
    MenuItem,
    makeStyles,
    Theme
} from "@material-ui/core";

import { Button, Avatar } from "components";
import {
    LogoIcon,
    UserIcon,
    AccountNotificationIcon,
    AccountEnvelopeIcon,
    MenuIcon
} from "icons";

interface IHeader {
    isAuthorized?: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
    appBar: {
        backgroundColor: "#fff"
    },
    appBarContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: 19,
        paddingBottom: 19,
        [theme.breakpoints.down("sm")]: {
            paddingTop: 8,
            paddingBottom: 8
        }
    },
    appBarContainerAuth: {
        paddingTop: 13,
        paddingBottom: 13,
        [theme.breakpoints.down("sm")]: {
            paddingTop: 10,
            paddingBottom: 10
        }
    },
    leftBar: {
        display: "flex"
    },
    rightBar: {
        display: "flex",
        alignItems: "center"
    },
    logo: {
        marginRight: 67,
        display: "flex",
        alignItems: "center"
    },
    doctorsLink: {
        paddingBottom: 4,
        color: theme.palette.text.secondary,
        textDecoration: "none",
        backgroundImage: `linear-gradient(${theme.palette.primary.dark}, ${theme.palette.primary.dark})`,
        backgroundPosition: "100% 100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "25% 3px",
        transition: "background-size .3s",
        "&:hover": {
            backgroundSize: "100% 3px"
        }
    },
    signInLink: {
        padding: " 8px 24px"
    },
    conslutationBtn: {
        marginLeft: 24
    },
    buyDoctorLink: {
        paddingBottom: 4,
        marginRight: 14,
        color: theme.palette.text.secondary,
        textDecoration: "none",
        backgroundImage: `linear-gradient(${theme.palette.primary.dark}, ${theme.palette.primary.dark})`,
        backgroundPosition: "100% 100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "0% 3px",
        transition: "background-size .3s",
        "&:hover": {
            backgroundSize: "100% 3px"
        }
    }
}));

export const Header: React.FC<IHeader> = ({ isAuthorized = true }) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (): void => {
        setAnchorEl(null);
    };

    return (
        <div className={classes.appBar}>
            <Container
                className={clsx(
                    classes.appBarContainer,
                    isAuthorized && classes.appBarContainerAuth
                )}
            >
                <div className={classes.leftBar}>
                    <Link to="/" className={classes.logo}>
                        <LogoIcon />
                    </Link>
                    <Hidden smDown>
                        <Link to="/doctors" className={classes.doctorsLink}>
                            Специалисты
                        </Link>
                    </Hidden>
                </div>
                {!isAuthorized ? (
                    <div>
                        <Button
                            variant="text"
                            to="/sign-in"
                            className={classes.signInLink}
                            startIcon={<UserIcon />}
                        >
                            Вход
                        </Button>
                        <Hidden smDown>
                            <Button
                                variant="outlined"
                                size="small"
                                className={classes.conslutationBtn}
                            >
                                Бесплатная консультация
                            </Button>
                        </Hidden>
                    </div>
                ) : (
                    <div className={classes.rightBar}>
                        <Hidden smDown>
                            <Link to="/doctors" className={classes.buyDoctorLink}>
                                Записаться на приём
                            </Link>
                            <IconButton aria-label="Открыть уведомления">
                                <AccountNotificationIcon isNew />
                            </IconButton>
                            <IconButton aria-label="Открыть сообщения">
                                <AccountEnvelopeIcon isNew />
                            </IconButton>
                            <div>
                                <Button
                                    variant="text"
                                    startIcon={
                                        <Avatar alt="Евгений К." src={undefined} />
                                    }
                                    onClick={handleClick}
                                    aria-label="Аккаунт пользователя"
                                    aria-controls="account-menu"
                                    aria-haspopup="true"
                                >
                                    Евгений К.
                                </Button>
                                <Menu
                                    id="account-menu"
                                    anchorEl={anchorEl}
                                    getContentAnchorEl={null}
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                    anchorOrigin={{
                                        vertical: "bottom",
                                        horizontal: "center"
                                    }}
                                    transformOrigin={{
                                        vertical: "top",
                                        horizontal: "center"
                                    }}
                                    keepMounted
                                >
                                    <MenuItem onClick={handleClose}>
                                        Мой кабинет
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>Выйти</MenuItem>
                                </Menu>
                            </div>
                        </Hidden>
                        <Hidden mdUp>
                            <IconButton aria-label="Открыть меню">
                                <MenuIcon isNew />
                            </IconButton>
                        </Hidden>
                    </div>
                )}
            </Container>
        </div>
    );
};
