import React from "react";
import { Container, makeStyles, useMediaQuery, Theme } from "@material-ui/core";
import { Pagination, PaginationItem } from "@material-ui/lab";

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

export const DoctorsPagination: React.FC = () => {
    const classes = useStyles();
    const matches = useMediaQuery((theme: Theme) => theme.breakpoints.down("xs"));

    return (
        <Container>
            <div className={classes.pagination}>
                <Pagination
                    count={23}
                    siblingCount={matches ? 0 : 3}
                    renderItem={item => (
                        <PaginationItem
                            classes={{ root: classes.paginationItem }}
                            {...item}
                        />
                    )}
                />
            </div>
        </Container>
    );
};
