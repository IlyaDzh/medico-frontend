import React from "react";
import clsx from "clsx";
import { TextField, InputAdornment, makeStyles, Theme } from "@material-ui/core";

import { DialogItem } from "./DialogItem";
import { SearchIcon } from "icons";

const useStyles = makeStyles((theme: Theme) => ({
    dialogs: {
        width: 540,
        background: theme.palette.other!.main,
        padding: "14px 8px 0"
    },
    search: {
        padding: "0 8px",
        marginBottom: 14
    },
    dialogList: {
        height: "calc(100% - 80px)",
        overflowY: "auto",
        padding: "0 8px"
    }
}));

export const Dialogs: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.dialogs}>
            <TextField
                className={classes.search}
                variant="outlined"
                placeholder="Поиск диалога"
                // value={searchText}
                // onChange={handleChange}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    )
                }}
                fullWidth
            />
            <div className={clsx(classes.dialogList, "chat-scrollbar")}>
                {new Array(10).fill(undefined).map((_, index) => (
                    <DialogItem key={index} index={index} />
                ))}
            </div>
        </div>
    );
};
