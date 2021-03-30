import React from "react";
import clsx from "clsx";
import { observer } from "mobx-react";
import { Container, makeStyles, Theme } from "@material-ui/core";

import { HeaderLeft } from "./HeaderLeft";
import { HeaderRight } from "./HeaderRight";
import { useStores } from "stores/useStore";

interface IHeader {
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
        display: "flex",
        alignItems: "center"
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
    accountMenuItemLink: {
        textDecoration: "none"
    },
    accountMenuItemExit: {
        color: theme.palette.error.main
    },
    accountMenuIcon: {
        display: "inline-flex",
        marginRight: 16
    }
}));

export const Header: React.FC<IHeader> = observer(
    ({ isAbsolute, leftBarIsLight, rightBarIsLight, isHeader }) => {
        const classes = useStyles();
        const { userStore } = useStores();
        const { isAuthorized } = userStore;

        const navigation = (
            <nav
                className={clsx(
                    classes.appBar,
                    isAbsolute && classes.appBarAbsolute
                )}
            >
                <Container
                    className={clsx(
                        classes.appBarContainer,
                        isAuthorized && classes.appBarContainerAuth
                    )}
                >
                    <HeaderLeft isLight={leftBarIsLight} classes={classes} />
                    <HeaderRight
                        isLight={rightBarIsLight}
                        classes={classes}
                        isAuthorized={isAuthorized}
                    />
                </Container>
            </nav>
        );

        return isHeader ? <header>{navigation}</header> : navigation;
    }
);
