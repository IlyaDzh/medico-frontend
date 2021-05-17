import React from "react";
import { TextField, InputAdornment, makeStyles, Theme } from "@material-ui/core";

import { DialogItem } from "./DialogItem";
import { SearchIcon } from "icons";

const useStyles = makeStyles((theme: Theme) => ({
    dialogs: {
        width: 540,
        background: theme.palette.other!.main,
        padding: "12px 8px 0px"
    },
    search: {
        marginBottom: 14
    },
    dialogList: {
        height: "calc(100% - 82px)",
        overflowY: "auto"
    }
}));

export const DialogList: React.FC = () => {
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
            <div className={classes.dialogList}>
                {new Array(10).fill(undefined).map((_, index) => (
                    <DialogItem key={index} index={index} />
                ))}
            </div>
        </div>
    );
};
