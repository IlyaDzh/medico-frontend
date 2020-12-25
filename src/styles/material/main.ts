import { createMuiTheme } from "@material-ui/core";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

const breakpoints = createBreakpoints({});

export default createMuiTheme({
    overrides: {
        MuiButton: {
            root: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 8,
                textTransform: "inherit",
                fontSize: 18,
                fontWeight: 400,
                lineHeight: "28px"
            },
            contained: {
                fontWeight: 500,
                padding: "10px 36px"
            },
            outlined: {
                padding: "8px 36px",
                borderWidth: "2px"
            },
            containedPrimary: {
                color: "#fff",
                "&:hover": {
                    backgroundColor: "#2d85ec"
                }
            },
            outlinedPrimary: {
                borderColor: "#2d85ec",
                "&:hover": {
                    color: "#fff",
                    backgroundColor: "#2d85ec",
                    borderColor: "#2d85ec"
                }
            }
        }
    },
    palette: {
        primary: {
            main: "#5ea1f0",
            dark: "#2d85ec"
        },
        error: {
            main: "#e34242"
        },
        warning: {
            main: "#f9c84d"
        },
        success: {
            main: "#2ab841"
        },
        text: {
            primary: "#192035",
            secondary: "#5a5f6f",
            hint: "#bdbfc6",
            disabled: "#bdbfc6"
        },
        background: {
            default: "#f6f9fc"
        }
    },
    typography: {
        allVariants: {
            color: "#192035"
        },
        h1: {
            fontSize: 52,
            fontWeight: 500,
            lineHeight: "66px",
            [breakpoints.down("xs")]: {
                fontSize: 24,
                lineHeight: "32px"
            }
        },
        h2: {
            fontSize: 42,
            fontWeight: 400,
            lineHeight: "56px",
            [breakpoints.down("xs")]: {
                fontSize: 24
            }
        },
        h3: {
            fontSize: 28,
            fontWeight: 500,
            lineHeight: "36px",
            [breakpoints.down("xs")]: {
                fontSize: 20
            }
        },
        h4: {
            fontSize: 20,
            fontWeight: 400,
            lineHeight: "26px",
            [breakpoints.down("xs")]: {
                fontSize: 14
            }
        },
        h5: {
            fontSize: 18,
            fontWeight: 500,
            lineHeight: "28px",
            [breakpoints.down("xs")]: {
                fontSize: 14
            }
        },
        h6: {
            fontSize: 12,
            fontWeight: 400,
            lineHeight: "18px",
            [breakpoints.down("xs")]: {
                fontSize: 10
            }
        },
        body1: {
            fontSize: 18,
            fontWeight: 300,
            lineHeight: "28px",
            [breakpoints.down("xs")]: {
                fontSize: 14
            }
        },
        body2: {
            fontSize: 18,
            fontWeight: 400,
            lineHeight: "28px",
            [breakpoints.down("xs")]: {
                fontSize: 14
            }
        },
        fontFamily: "Rubik, sans-serif"
    }
});
