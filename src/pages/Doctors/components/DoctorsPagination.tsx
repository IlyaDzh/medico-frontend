import React from "react";
import { observer } from "mobx-react";
import { Link, useParams } from "react-router-dom";
import { makeStyles, useMediaQuery, Theme } from "@material-ui/core";
import { Pagination, PaginationItem } from "@material-ui/lab";

import { useStores } from "stores/useStore";

const useStyles = makeStyles((theme: Theme) => ({
    pagination: {
        display: "flex",
        justifyContent: "center",
        marginBottom: 78,
        [theme.breakpoints.down("xs")]: {
            marginBottom: 55
        }
    },
    paginationItem: {
        color: theme.palette.text.secondary
    }
}));

export const DoctorsPagination: React.FC = observer(() => {
    const classes = useStyles();
    const { page } = useParams<{ page: string }>();
    const matches = useMediaQuery((theme: Theme) => theme.breakpoints.down("xs"));
    const { searchDoctorStore } = useStores();
    const { pagination } = searchDoctorStore;

    if (!pagination) {
        return null;
    }

    return (
        <div className={classes.pagination}>
            <Pagination
                page={Number(page) || 1}
                count={pagination.pageCount}
                siblingCount={matches ? 0 : 3}
                renderItem={item => (
                    <PaginationItem
                        component={Link}
                        classes={{ root: classes.paginationItem }}
                        to={`/doctors/${item.page}`}
                        {...item}
                    />
                )}
            />
        </div>
    );
});
