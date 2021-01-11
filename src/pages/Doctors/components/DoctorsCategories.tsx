import React, { useState } from "react";
import { Container, makeStyles } from "@material-ui/core";

import { CategoryChip } from "./CategoryChip";
import { categories } from "utils/constants";

const useStyles = makeStyles(() => ({
    categories: {
        display: "flex",
        flexWrap: "wrap",
        margin: "0 -12px",
        padding: "36px 0 56px"
    },
    category: {
        margin: "6px 12px"
    }
}));

export const DoctorsCategories: React.FC = () => {
    const classes = useStyles();
    const [currentCategory, setCurrentCategory] = useState<string>("all");

    return (
        <Container>
            <ul className={classes.categories}>
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
        </Container>
    );
};
