import React, { useState } from "react";
import clsx from "clsx";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import { Hidden, IconButton, Menu, MenuItem } from "@material-ui/core";

import { Button, Avatar } from "components";
import { useStores } from "stores/useStore";
import {
    UserIcon,
    AccountNotificationIcon,
    AccountEnvelopeIcon,
    MenuIcon,
    ExitIcon
} from "icons";

interface IHeaderRight {
    isAuthorized?: boolean;
    isLight?: boolean;
    classes?: any;
}

export const HeaderRight: React.FC<IHeaderRight> = observer(
    ({ isAuthorized, isLight, classes }) => {
        const { modalsStore, userStore, drawerStore } = useStores();
        const { setModalIsOpen } = modalsStore;
        const { currentUser, doLogout } = userStore;
        const { setDrawerExpanded } = drawerStore;
        const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

        const avatarSrc = currentUser?.additionalData
            ? currentUser.userType === "doctor"
                ? currentUser.additionalData.photo &&
                  process.env.REACT_APP_API_BASE_URL +
                      currentUser.additionalData.photo
                : currentUser.additionalData.avatar &&
                  process.env.REACT_APP_API_BASE_URL +
                      currentUser.additionalData.avatar
            : undefined;

        const handleMenuClick = (
            event: React.MouseEvent<HTMLButtonElement>
        ): void => {
            setAnchorEl(event.currentTarget);
        };

        const handleMenuClose = (): void => {
            setAnchorEl(null);
        };

        const handleEntryClick = (): void => {
            setModalIsOpen("sign-in", true);
        };

        const handleLogoutClick = (): void => {
            handleMenuClose();
            doLogout();
        };

        return (
            <div className={classes.rightBar}>
                {!isAuthorized ? (
                    <Hidden smDown>
                        <Button
                            variant="text"
                            color={isLight ? "default" : "primary"}
                            className={classes.signInLink}
                            startIcon={<UserIcon />}
                            onClick={handleEntryClick}
                        >
                            Вход
                        </Button>
                        <Button
                            variant="outlined"
                            color={isLight ? "default" : "primary"}
                            size="small"
                            to="/sign-up"
                            className={classes.conslutationBtn}
                        >
                            Регистрация
                        </Button>
                    </Hidden>
                ) : (
                    <Hidden smDown>
                        <div className={classes.iconButtons}>
                            <IconButton aria-label="Открыть уведомления">
                                <AccountNotificationIcon isLight={isLight} />
                            </IconButton>
                            <IconButton aria-label="Открыть сообщения">
                                <AccountEnvelopeIcon isLight={isLight} />
                            </IconButton>
                        </div>
                        <div>
                            <Button
                                className={clsx(
                                    classes.accountMenuBtn,
                                    isLight && classes.accountMenuBtnLight
                                )}
                                variant="text"
                                color="default"
                                startIcon={
                                    <Avatar
                                        componentTag="span"
                                        alt={`${currentUser?.name} аватар`}
                                        src={avatarSrc}
                                    />
                                }
                                onClick={handleMenuClick}
                                aria-label="Аккаунт пользователя"
                                aria-controls="account-menu"
                                aria-haspopup="true"
                                disableTouchRipple
                            >
                                {`${currentUser?.name} ${currentUser?.surname[0]}.`}
                            </Button>
                            <Menu
                                id="account-menu"
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
                                    horizontal: "center"
                                }}
                                keepMounted
                            >
                                <Link
                                    to="/dashboard"
                                    className={classes.accountMenuItemLink}
                                >
                                    <MenuItem
                                        onClick={handleMenuClose}
                                        className={classes.accountMenuItem}
                                    >
                                        <span className={classes.accountMenuIcon}>
                                            <UserIcon color="#5a5f6f" />
                                        </span>{" "}
                                        Мой кабинет
                                    </MenuItem>
                                </Link>
                                <MenuItem
                                    onClick={handleLogoutClick}
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
                )}
                <Hidden mdUp>
                    <IconButton
                        onClick={() => setDrawerExpanded(true)}
                        aria-label="Открыть меню"
                    >
                        <MenuIcon isLight={isLight} />
                    </IconButton>
                </Hidden>
            </div>
        );
    }
);
