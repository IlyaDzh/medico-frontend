import React from "react";
import { Typography, Link, makeStyles, Theme } from "@material-ui/core";

import { UserPlusIcon } from "icons";

const useStyles = makeStyles((theme: Theme) => ({
    header: {
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.down("xs")]: {
            display: "block"
        }
    },
    headerLeft: {
        display: "flex",
        justifyContent: "flex-end",
        backgroundColor: theme.palette.background.blue,
        borderRadius: "0 0 16px",
        padding: "28px 56px",
        width: "50%",
        [theme.breakpoints.down("xs")]: {
            width: "100%",
            borderRadius: 0,
            justifyContent: "center",
            padding: "18px 12px"
        }
    },
    headerRight: {
        padding: "18px 40px",
        textAlign: "right",
        [theme.breakpoints.down("xs")]: {
            textAlign: "center"
        }
    },
    headerTitle: {
        color: "#fff",
        marginLeft: 18
    },
    headerEnter: {
        fontSize: 18,
        textDecoration: "underline",
        "&:hover": {
            textDecoration: "none"
        }
    },
    form: {}
}));

export const SignUpForm: React.FC = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <div className={classes.header}>
                <div className={classes.headerLeft}>
                    <div>
                        <UserPlusIcon />
                    </div>
                    <Typography className={classes.headerTitle} variant="h3">
                        Регистрация
                    </Typography>
                </div>
                <div className={classes.headerRight}>
                    <Typography>Есть аккаунт?</Typography>
                    <Link
                        className={classes.headerEnter}
                        type="button"
                        component="button"
                        color="textSecondary"
                        onClick={() => {
                            console.log("Войти");
                        }}
                    >
                        Войти
                    </Link>
                </div>
            </div>
            <form className={classes.form}></form>
        </React.Fragment>
    );
};
