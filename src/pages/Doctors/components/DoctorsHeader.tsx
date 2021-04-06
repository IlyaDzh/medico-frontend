import React from "react";
import { Hidden, makeStyles } from "@material-ui/core";

import { ExtendedHeader, SearchInput } from "components";

const useStyles = makeStyles(() => ({
    headerSearchWrapper: {
        maxWidth: 396,
        width: "100%"
    }
}));

export const DoctorsHeader: React.FC = () => {
    const classes = useStyles();

    return (
        <ExtendedHeader
            title="Специалисты"
            action={
                <Hidden smDown>
                    <div className={classes.headerSearchWrapper}>
                        <SearchInput placeholder="Поиск специалиста" fullWidth />
                    </div>
                </Hidden>
            }
        />
    );
};
