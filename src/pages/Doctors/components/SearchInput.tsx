import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";
import {
    TextField,
    InputAdornment,
    IconButton,
    Paper,
    Grow,
    Typography,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    makeStyles,
    Theme,
    TextFieldProps
} from "@material-ui/core";

import { Avatar, Loader } from "components";
import { SearchIcon, CrossIcon } from "icons";
import { useStores } from "stores/useStore";

const useStyles = makeStyles((theme: Theme) => ({
    searchWrapper: {
        position: "relative"
    },
    cross: {
        padding: 8
    },
    searchDropdown: {
        position: "absolute",
        top: 54,
        overflow: "hidden",
        borderRadius: 8,
        width: "100%",
        boxShadow: "0px 8px 16px rgba(45, 96, 156, 0.2)"
    },
    listItemAvatar: {
        minWidth: "unset",
        marginRight: 12
    },
    listItemFullname: {
        "& span": {
            color: theme.palette.primary.main
        }
    },
    loader: {
        padding: 20
    }
}));

export const SearchInput: React.FC<TextFieldProps> = observer(({ ...props }) => {
    const classes = useStyles();
    const { searchDoctorStore } = useStores();
    const {
        searchText,
        dropdownDoctors,
        pendingSearchDoctors,
        setSearchText
    } = searchDoctorStore;

    useEffect(() => {
        return () => setSearchText("");
    }, [setSearchText]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value);
    };

    const renderList = () =>
        dropdownDoctors.map(doctor => (
            <ListItem
                key={doctor.id}
                component={Link}
                to={`/doctor/${doctor.id}`}
                button
            >
                <ListItemAvatar className={classes.listItemAvatar}>
                    <Avatar
                        src={process.env.REACT_APP_API_BASE_URL + doctor.photo}
                        size="lg"
                    />
                </ListItemAvatar>
                <ListItemText
                    primary={
                        <Typography variant="h6" color="textSecondary">
                            {doctor.specialties
                                .map((item, index) =>
                                    index < doctor.specialties.length - 1
                                        ? `${item.name}, `
                                        : item.name
                                )
                                .join("")}
                        </Typography>
                    }
                    secondary={
                        <Typography
                            className={classes.listItemFullname}
                            variant="body1"
                            dangerouslySetInnerHTML={{
                                __html: `${doctor.surname} ${doctor.name} ${doctor.middleName}`.replace(
                                    new RegExp("(" + searchText + ")", "gi"),
                                    function replace(match) {
                                        return "<span>" + match + "</span>";
                                    }
                                )
                            }}
                        />
                    }
                />
            </ListItem>
        ));

    return (
        <div className={classes.searchWrapper} aria-describedby="simple-popover">
            <TextField
                variant="outlined"
                placeholder="Поиск специалиста"
                value={searchText}
                onChange={handleChange}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                className={classes.cross}
                                onClick={() => setSearchText("")}
                                aria-label="remove all text"
                            >
                                <CrossIcon width={18} height={18} />
                            </IconButton>
                        </InputAdornment>
                    )
                }}
                fullWidth
                {...props}
            />
            <Grow in={searchText.length > 0}>
                <Paper
                    id="simple-popover"
                    className={classes.searchDropdown}
                    elevation={3}
                >
                    {pendingSearchDoctors && (
                        <div className={classes.loader}>
                            <Loader level={2.5} isCenter />
                        </div>
                    )}
                    {dropdownDoctors.length > 0 && !pendingSearchDoctors && (
                        <List component="nav">{renderList()}</List>
                    )}
                </Paper>
            </Grow>
        </div>
    );
});
