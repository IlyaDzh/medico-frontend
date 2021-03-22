import React, { useState } from "react";
import { makeStyles, Theme } from "@material-ui/core";

import { CategoryChip } from "./CategoryChip";
import { categories } from "utils/constants";

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
    }
}));

export const DoctorsCategories: React.FC = () => {
    const classes = useStyles();
    const [currentCategory, setCurrentCategory] = useState<string>("all");

    return (
        <ul className={classes.categories}>
            <li className={classes.category}>
                <CategoryChip
                    label="Все"
                    isActive={currentCategory === "all"}
                    onClick={() => setCurrentCategory("all")}
                />
            </li>
            {categories.map(category => (
                <li key={category.code} className={classes.category}>
                    <CategoryChip
                        label={category.label}
                        isActive={category.code === currentCategory}
                        onClick={() => setCurrentCategory(category.code)}
                    />
                </li>
            ))}
        </ul>
    );
};
