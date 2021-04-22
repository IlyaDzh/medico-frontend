import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react";
import { makeStyles, Theme } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

import { CategoryChip } from "./CategoryChip";
import { useStores } from "stores/useStore";

const useStyles = makeStyles((theme: Theme) => ({
    categories: {
        display: "flex",
        flexWrap: "wrap",
        margin: "0 -12px",
        padding: "36px 0 56px",
        [theme.breakpoints.down("xs")]: {
            padding: "25px 0",
            margin: "0 -6px"
        }
    },
    category: {
        margin: "6px 12px",
        [theme.breakpoints.down("xs")]: {
            margin: "6px"
        }
    },
    skeleton: {
        borderRadius: 8
    }
}));

export const DoctorsCategories: React.FC = observer(() => {
    const classes = useStyles();
    const { specialtiesStore } = useStores();
    const { specialties, getSpecialties } = specialtiesStore;
    const { specialty } = useParams<{ specialty: string }>();

    const currentCategory = specialty || "all";

    useEffect(() => {
        if (!specialties) {
            getSpecialties();
        }
    }, [specialties, getSpecialties]);

    return (
        <ul className={classes.categories}>
            {specialties && specialties.length > 0 ? (
                <>
                    <li className={classes.category}>
                        <CategoryChip
                            label="Все"
                            slug="all"
                            isActive={currentCategory === "all"}
                        />
                    </li>
                    {specialties.map(specialty => (
                        <li key={specialty.id} className={classes.category}>
                            <CategoryChip
                                label={specialty.name}
                                slug={specialty.slug}
                                isActive={specialty.slug === currentCategory}
                            />
                        </li>
                    ))}
                </>
            ) : (
                new Array(16).fill(undefined).map((_, index) => (
                    <li key={index} className={classes.category}>
                        <Skeleton
                            className={classes.skeleton}
                            variant="rect"
                            animation="wave"
                            width={80 + Math.round(Math.random() * 40)}
                            height={34}
                        />
                    </li>
                ))
            )}
        </ul>
    );
});
