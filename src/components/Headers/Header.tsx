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
    MenuIcon,
    ExitIcon
} from "icons";

interface IHeader {
    isAuthorized?: boolean;
    isAbsolute?: boolean;
    leftBarIsLight?: boolean;
    rightBarIsLight?: boolean;
    isHeader?: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
    appBar: {
        backgroundColor: "#fff",
        [theme.breakpoints.down("sm")]: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 2
        }
    },
    appBarAbsolute: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: "transparent"
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
    animatedLink: {
        paddingBottom: 4,
        marginBottom: -4,
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
    },
    animatedLinkIsLight: {
        color: "#fff",
        backgroundImage: "linear-gradient(#fff, #fff)"
    },
    signInLink: {
        padding: " 8px 24px"
    },
    conslutationBtn: {
        marginLeft: 24
    },
    iconButtons: {
        margin: "0 16px"
    },
    accountMenuBtn: {
        color: theme.palette.text.secondary,
        "&:hover": {
            color: theme.palette.text.primary
        }
    },
    accountMenuBtnLight: {
        color: "#fff",
        "&:hover": {
            color: "#fff"
        }
    },
    accountMenuItem: {
        color: theme.palette.text.secondary,
        fontWeight: 400
    },
    accountMenuItemExit: {
        color: theme.palette.error.main
    },
    accountMenuIcon: {
        display: "inline-flex",
        marginRight: 16
    }
}));

export const Header: React.FC<IHeader> = ({
    isAuthorized = false,
    isAbsolute,
    leftBarIsLight,
    rightBarIsLight,
    isHeader
}) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (): void => {
        setAnchorEl(null);
    };

    const navigation = (
        <nav className={clsx(classes.appBar, isAbsolute && classes.appBarAbsolute)}>
            <Container
                className={clsx(
                    classes.appBarContainer,
                    isAuthorized && classes.appBarContainerAuth
                )}
            >
                <div className={classes.leftBar}>
                    <Link
                        to="/"
                        className={classes.logo}
                        aria-label="Перейти на главную"
                    >
                        <Hidden xsDown>
                            <LogoIcon isLight={leftBarIsLight} />
                        </Hidden>
                        <Hidden smUp>
                            <LogoIcon width={64} isLight={leftBarIsLight} />
                        </Hidden>
                    </Link>
                    <Hidden smDown>
                        <Link
                            to="/doctors"
                            className={clsx(
                                classes.animatedLink,
                                leftBarIsLight && classes.animatedLinkIsLight
                            )}
                        >
                            Специалисты
                        </Link>
                    </Hidden>
                </div>
                {!isAuthorized ? (
                    <div>
                        <Button
                            variant="text"
                            color={rightBarIsLight ? "default" : "primary"}
                            to="/sign-in"
                            className={classes.signInLink}
                            startIcon={<UserIcon />}
                        >
                            Вход
                        </Button>
                        <Hidden smDown>
                            <Button
                                variant="outlined"
                                color={rightBarIsLight ? "default" : "primary"}
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
                            <Link
                                to="/doctors"
                                className={clsx(
                                    classes.animatedLink,
                                    rightBarIsLight && classes.animatedLinkIsLight
                                )}
                            >
                                Записаться на приём
                            </Link>
                            <div className={classes.iconButtons}>
                                <IconButton aria-label="Открыть уведомления">
                                    <AccountNotificationIcon
                                        isLight={rightBarIsLight}
                                        isNew
                                    />
                                </IconButton>
                                <IconButton aria-label="Открыть сообщения">
                                    <AccountEnvelopeIcon
                                        isLight={rightBarIsLight}
                                        isNew
                                    />
                                </IconButton>
                            </div>
                            <div>
                                <Button
                                    className={clsx(
                                        classes.accountMenuBtn,
                                        rightBarIsLight &&
                                            classes.accountMenuBtnLight
                                    )}
                                    variant="text"
                                    color="default"
                                    startIcon={
                                        <Avatar
                                            componentTag="span"
                                            alt="Евгений К."
                                            src={undefined}
                                        />
                                    }
                                    onClick={handleClick}
                                    aria-label="Аккаунт пользователя"
                                    aria-controls="account-menu"
                                    aria-haspopup="true"
                                    disableTouchRipple
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
                                >
                                    <MenuItem
                                        onClick={handleClose}
                                        className={classes.accountMenuItem}
                                    >
                                        <span className={classes.accountMenuIcon}>
                                            <UserIcon color="#5a5f6f" />
                                        </span>{" "}
                                        Мой кабинет
                                    </MenuItem>
                                    <MenuItem
                                        onClick={handleClose}
                                        className={clsx(
                                            classes.accountMenuItem,
                                            classes.accountMenuItemExit
                                        )}
                                    >
                                        <span className={classes.accountMenuIcon}>
                                            <ExitIcon />
                                        </span>{" "}
                                        Выйти
                                    </MenuItem>
                                </Menu>
                            </div>
                        </Hidden>
                        <Hidden mdUp>
                            <IconButton aria-label="Открыть меню">
                                <MenuIcon isLight={rightBarIsLight} isNew />
                            </IconButton>
                        </Hidden>
                    </div>
                )}
            </Container>
        </nav>
    );

    return isHeader ? <header>{navigation}</header> : navigation;
};
