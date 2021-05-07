import React from "react";
import { Typography, makeStyles, Theme } from "@material-ui/core";

interface IAdditionalDataItem {
    title: string;
    data: string | string[];
}

const useStyles = makeStyles((theme: Theme) => ({
    additionalItem: {
        background: "#fff",
        border: `1px solid ${theme.palette.other!.main}`,
        borderRadius: 8,
        padding: "16px",
        marginBottom: 18,
        margin: "0 24px 18px",
        width: "50%"
    },
    itemHeader: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 12
    },
    itemHeaderLeft: {
        display: "flex",
        alignItems: "center"
    },
    itemContent: {}
}));

export const AdditionalDataItem: React.FC<IAdditionalDataItem> = ({
    title,
    data
}) => {
    const classes = useStyles();

    return (
        <div className={classes.additionalItem}>
            <div className={classes.itemHeader}>
                <div className={classes.itemHeaderLeft}>
                    <svg width="26" height="21" viewBox="0 0 26 21" fill="none">
                        <g clip-path="url(#clip0)">
                            <path
                                d="M10.9798 5.37223C10.6377 5.00437 10.3398 4.70963 10.0942 4.49623C9.74517 4.19289 9.45636 4.00488 9.09553 4.00488C8.7347 4.00488 8.44589 4.19289 8.09687 4.49619C7.85131 4.70959 7.55331 5.00433 7.21124 5.37223C6.48909 6.14874 5.67909 7.13255 4.9304 8.14234C3.74989 9.7346 1.76953 12.6882 1.76953 14.58C1.76953 17.9366 5.05593 20.6673 9.09548 20.6673C13.135 20.6673 16.4214 17.9366 16.4214 14.58C16.4214 12.6882 14.4411 9.7346 13.2606 8.14234C12.5119 7.13255 11.7019 6.14878 10.9798 5.37223Z"
                                fill="#2D85EC"
                            />
                            <path
                                d="M22.109 2.33332C21.7051 1.78855 21.2674 1.25707 20.8766 0.836794C20.273 0.187686 19.9877 0 19.6051 0C19.2225 0 18.9372 0.187686 18.3336 0.836794C17.9428 1.25707 17.5052 1.78851 17.1013 2.33332C16.312 3.39793 15.3711 4.88141 15.3711 5.9027C15.3711 7.84264 17.2705 9.42085 19.6051 9.42085C21.9398 9.42085 23.8392 7.8426 23.8392 5.9027C23.8392 4.88137 22.8983 3.39793 22.109 2.33332Z"
                                fill="#2D85EC"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0">
                                <rect
                                    width="24.872"
                                    height="20.6667"
                                    fill="#fff"
                                    transform="translate(0.384766)"
                                />
                            </clipPath>
                        </defs>
                    </svg>
                    <Typography variant="body2">{title}</Typography>
                </div>
                <div>+</div>
            </div>
            <div className={classes.itemContent}>{data}</div>
        </div>
    );
};
