import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { observer } from "mobx-react";
import {
    Typography,
    TextField,
    InputAdornment,
    makeStyles,
    Theme
} from "@material-ui/core";

import { Loader } from "components";
import { DialogItem } from "./DialogItem";
import { SearchIcon } from "icons";
import { useStores } from "stores/useStore";

const useStyles = makeStyles((theme: Theme) => ({
    dialogs: {
        maxWidth: 420,
        width: "100%",
        background: theme.palette.other!.main,
        padding: "14px 8px 0",
        [theme.breakpoints.down("xs")]: {
            maxWidth: "unset"
        }
    },
    search: {
        padding: "0 8px",
        marginBottom: 14
    },
    dialogList: {
        height: "calc(100% - 80px)",
        overflow: "hidden auto",
        padding: "0 8px"
    }
}));

export const Dialogs: React.FC = observer(() => {
    const classes = useStyles();
    const [searchText, setSearchText] = useState<string>("");
    const { chatStore } = useStores();
    const { dialogs, pendingDialogs, getDialogs } = chatStore;

    useEffect(() => {
        if (dialogs.length > 0 || pendingDialogs) {
            return;
        }

        getDialogs();
    }, [dialogs, pendingDialogs, getDialogs]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setSearchText(event.target.value.toLowerCase());
    };

    return (
        <div className={classes.dialogs}>
            <TextField
                className={classes.search}
                variant="outlined"
                placeholder="Поиск диалога"
                value={searchText}
                onChange={handleChange}
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
                {pendingDialogs ? (
                    <Loader level={2} isCenter />
                ) : dialogs.length > 0 ? (
                    (searchText
                        ? dialogs.filter(({ interlocutor }) =>
                              `${interlocutor.name} ${interlocutor.surname}`
                                  .toLowerCase()
                                  .includes(searchText)
                          )
                        : dialogs
                    ).map(dialog => <DialogItem key={dialog.id} dialog={dialog} />)
                ) : (
                    <Typography variant="body1" color="textSecondary">
                        <i>Диалогов не найдено</i>
                    </Typography>
                )}
            </div>
        </div>
    );
});
