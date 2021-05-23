import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";
import {
    SwipeableDrawer,
    List,
    Divider,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
    makeStyles,
    Theme
} from "@material-ui/core";
import {
    Home as HomeIcon,
    PeopleAlt as PeopleAltIcon,
    HowToReg as HowToRegIcon
} from "@material-ui/icons";

import { useStores } from "stores/useStore";
import { ExitIcon, UserIcon } from "icons";
import { DOCTOR_MENU, PATIENT_MENU } from "utils/constants";

const useStyles = makeStyles((theme: Theme) => ({
    list: {
        width: 240
    },
    listItem: {
        "& svg": {
            fill: theme.palette.text.secondary
        }
    },
    exitItem: {
        color: theme.palette.error.main
    }
}));

export const Drawer: React.FC = observer(() => {
    const classes = useStyles();
    const { drawerStore, userStore, modalsStore } = useStores();
    const { drawerExpanded, setDrawerExpanded } = drawerStore;
    const { isAuthorized, currentUser, doLogout } = userStore;
    const { setModalIsOpen } = modalsStore;

    const isPatient: boolean = currentUser?.userType === "patient";

    const toggleDrawer =
        (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event &&
                event.type === "keydown" &&
                ((event as React.KeyboardEvent).key === "Tab" ||
                    (event as React.KeyboardEvent).key === "Shift")
            ) {
                return;
            }

            setDrawerExpanded(open);
        };

    const handleEntryClick = (): void => {
        setModalIsOpen("sign-in", true);
    };

    return (
        <SwipeableDrawer
            anchor="left"
            open={drawerExpanded}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
        >
            <nav
                className={classes.list}
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
            >
                <List>
                    <ListItem
                        className={classes.listItem}
                        component={Link}
                        to="/"
                        button
                    >
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText
                            primary={
                                <Typography variant="body2">Главная</Typography>
                            }
                        />
                    </ListItem>
                    <ListItem
                        className={classes.listItem}
                        component={Link}
                        to="/doctors"
                        button
                    >
                        <ListItemIcon>
                            <PeopleAltIcon />
                        </ListItemIcon>
                        <ListItemText
                            primary={
                                <Typography variant="body2">Специалисты</Typography>
                            }
                        />
                    </ListItem>
                </List>
                <Divider />
                {isAuthorized ? (
                    <>
                        <List>
                            <ListItem
                                className={classes.listItem}
                                component={Link}
                                to="/dashboard"
                                button
                            >
                                <ListItemIcon>
                                    <UserIcon color="#5a5f6f" />
                                </ListItemIcon>
                                <ListItemText
                                    primary={
                                        <Typography variant="body2">
                                            Личный кабинет
                                        </Typography>
                                    }
                                />
                            </ListItem>
                            {(isPatient ? PATIENT_MENU : DOCTOR_MENU).map(item => (
                                <ListItem
                                    key={item.label}
                                    className={classes.listItem}
                                    component={Link}
                                    to={item.to}
                                    button
                                >
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText
                                        primary={
                                            <Typography variant="body2">
                                                {item.label}
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                            ))}
                        </List>
                        <Divider />
                        <List>
                            <ListItem
                                className={clsx(classes.listItem, classes.exitItem)}
                                onClick={doLogout}
                                button
                            >
                                <ListItemIcon>
                                    <ExitIcon width={28} height={28} />
                                </ListItemIcon>
                                <ListItemText
                                    primary={
                                        <Typography variant="body2">
                                            Выйти
                                        </Typography>
                                    }
                                />
                            </ListItem>
                        </List>
                    </>
                ) : (
                    <List>
                        <ListItem
                            className={classes.listItem}
                            onClick={handleEntryClick}
                            button
                        >
                            <ListItemIcon>
                                <UserIcon color="#5a5f6f" />
                            </ListItemIcon>
                            <ListItemText
                                primary={
                                    <Typography variant="body2">Вход</Typography>
                                }
                            />
                        </ListItem>
                        <ListItem
                            className={classes.listItem}
                            component={Link}
                            to="/sign-up"
                            button
                        >
                            <ListItemIcon>
                                <HowToRegIcon />
                            </ListItemIcon>
                            <ListItemText
                                primary={
                                    <Typography variant="body2">
                                        Регистрация
                                    </Typography>
                                }
                            />
                        </ListItem>
                    </List>
                )}
            </nav>
        </SwipeableDrawer>
    );
});
