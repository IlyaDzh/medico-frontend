import { createMuiTheme } from "@material-ui/core";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

const breakpoints = createBreakpoints({});

const globalTheme = createMuiTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1400,
            xl: 1920
        }
    },
    palette: {
        primary: {
            main: "#5ea1f0",
            dark: "#2d85ec"
        },
        secondary: {
            main: "#2d85ec"
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
            primary: "#2d85ec",
            secondary: "#5a5f6f",
            hint: "#bdbfc6",
            disabled: "#bdbfc6"
        },
        background: {
            default: "#f6f9fc",
            dark: "#5a5f6f",
            blue: "#5ea1f0"
        },
        other: {
            main: "#eceff9"
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
            [breakpoints.down("sm")]: {
                fontSize: 38,
                lineHeight: "49px"
            },
            [breakpoints.down("xs")]: {
                fontSize: 24,
                lineHeight: "32px"
            }
        },
        h2: {
            fontSize: 42,
            fontWeight: 400,
            lineHeight: "56px",
            [breakpoints.down("sm")]: {
                fontSize: 32,
                lineHeight: "46px"
            },
            [breakpoints.down("xs")]: {
                fontSize: 24,
                lineHeight: "35px"
            }
        },
        h3: {
            fontSize: 28,
            fontWeight: 500,
            lineHeight: "36px",
            [breakpoints.down("sm")]: {
                fontSize: 24,
                lineHeight: "32px"
            },
            [breakpoints.down("xs")]: {
                fontSize: 20,
                lineHeight: "28px"
            }
        },
        h4: {
            fontSize: 20,
            fontWeight: 400,
            lineHeight: "26px",
            [breakpoints.down("sm")]: {
                fontSize: 18,
                lineHeight: "22px"
            },
            [breakpoints.down("xs")]: {
                fontSize: 14,
                lineHeight: "18px"
            }
        },
        h5: {
            fontSize: 18,
            fontWeight: 500,
            lineHeight: "28px",
            [breakpoints.down("sm")]: {
                fontSize: 16,
                lineHeight: "24px"
            },
            [breakpoints.down("xs")]: {
                fontSize: 14,
                lineHeight: "20px"
            }
        },
        h6: {
            fontSize: 12,
            fontWeight: 400,
            lineHeight: "18px",
            [breakpoints.down("xs")]: {
                fontSize: 10,
                lineHeight: "14px"
            }
        },
        body1: {
            fontSize: 18,
            fontWeight: 300,
            lineHeight: "28px",
            [breakpoints.down("sm")]: {
                fontSize: 16,
                lineHeight: "24px"
            },
            [breakpoints.down("xs")]: {
                fontSize: 14,
                lineHeight: "18px"
            }
        },
        body2: {
            fontSize: 18,
            fontWeight: 400,
            lineHeight: "28px",
            [breakpoints.down("sm")]: {
                fontSize: 16,
                lineHeight: "24px"
            },
            [breakpoints.down("xs")]: {
                fontSize: 14,
                lineHeight: "18px"
            }
        },
        fontFamily: "Rubik, sans-serif"
    }
});

const theme = createMuiTheme(
    {
        overrides: {
            MuiContainer: {
                root: {
                    paddingLeft: 20,
                    paddingRight: 20
                }
            },
            MuiButton: {
                root: {
                    borderRadius: 8,
                    textTransform: "inherit",
                    fontSize: 18,
                    fontWeight: 400,
                    lineHeight: "28px",
                    color: "#fff",
                    [breakpoints.down("sm")]: {
                        fontSize: 16,
                        lineHeight: "26px"
                    },
                    [breakpoints.down("xs")]: {
                        fontSize: 14,
                        lineHeight: "24px"
                    }
                },
                contained: {
                    fontWeight: 500,
                    padding: "10px 36px"
                },
                outlined: {
                    padding: "9px 36px",
                    border: "1px solid #fff"
                },
                containedPrimary: {
                    color: "#fff",
                    "&:hover": {
                        backgroundColor: globalTheme.palette.primary.dark
                    },
                    "&$disabled": {
                        backgroundColor: globalTheme.palette.other?.main,
                        color: globalTheme.palette.text.disabled
                    }
                },
                outlinedPrimary: {
                    borderColor: globalTheme.palette.primary.dark,
                    "&:hover": {
                        color: "#fff",
                        backgroundColor: globalTheme.palette.primary.dark,
                        borderColor: globalTheme.palette.primary.dark
                    },
                    "&$disabled": {
                        color: globalTheme.palette.text.disabled,
                        borderColor: globalTheme.palette.other?.main
                    }
                },
                containedSizeLarge: {
                    fontSize: 18,
                    fontWeight: 500,
                    padding: "16px 84px 16px 36px",
                    [breakpoints.down("sm")]: {
                        fontSize: 16,
                        padding: "12px 74px 12px 28px"
                    },
                    [breakpoints.down("xs")]: {
                        fontSize: 14,
                        padding: "8px 65px 8px 20px"
                    }
                },
                containedSizeSmall: {
                    fontSize: 18,
                    fontWeight: 400,
                    padding: "7px 24px",
                    [breakpoints.down("sm")]: {
                        fontSize: 14,
                        padding: "5px 18px"
                    },
                    [breakpoints.down("xs")]: {
                        fontSize: 12,
                        padding: "2px 12px"
                    }
                },
                outlinedSizeSmall: {
                    fontSize: 18,
                    fontWeight: 400,
                    padding: "7px 24px",
                    [breakpoints.down("sm")]: {
                        fontSize: 14,
                        padding: "5px 18px"
                    },
                    [breakpoints.down("xs")]: {
                        fontSize: 12,
                        padding: "2px 12px"
                    }
                },
                text: {
                    "& svg path": {
                        fill: "#fff"
                    },
                    [breakpoints.down("xs")]: {
                        fontSize: 16,
                        lineHeight: "26px"
                    }
                },
                textPrimary: {
                    "& svg path": {
                        fill: globalTheme.palette.primary.main
                    }
                }
            },
            MuiInputBase: {
                root: {
                    fontSize: 18,
                    fontWeight: 300,
                    lineHeight: "28px",
                    color: "#192035",
                    "&$disabled": {
                        color: globalTheme.palette.text.disabled
                    }
                }
            },
            MuiOutlinedInput: {
                root: {
                    overflow: "hidden",
                    borderRadius: 8,
                    "&$disabled $notchedOutline": {
                        borderColor: globalTheme.palette.other?.main
                    }
                },
                input: {
                    padding: "12px 16px",
                    height: "auto",
                    backgroundColor: "#fff"
                }
            },
            MuiListSubheader: {
                sticky: {
                    backgroundColor: "#fff",
                    fontSize: "12px",
                    fontWeight: 400,
                    lineHeight: "18px",
                    padding: "12px 16px"
                }
            },
            MuiCheckbox: {
                root: {
                    "& .MuiSvgIcon-root": {
                        width: 26,
                        height: 26
                    }
                }
            }
        }
    },
    globalTheme
);

export default theme;
