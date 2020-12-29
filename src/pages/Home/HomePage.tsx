import React from "react";
import { Container } from "@material-ui/core";

import { HomeHeader } from "./components";

export const HomePage: React.FC = () => {
    return (
        <React.Fragment>
            <HomeHeader />
            <footer>
                <Container>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
                    quas perspiciatis maiores laboriosam nobis animi modi quia
                    laudantium impedit. Debitis, fugit quia! Ex provident dolor
                    accusantium eligendi porro illo quos, quasi autem iste accusamus
                    quod repellat cum quam dolorum, cupiditate doloribus repudiandae
                    quibusdam vel fuga delectus? Minima, nulla magni. Deleniti eaque
                    dignissimos nobis ex mollitia? Officiis sint aspernatur facere
                    architecto similique voluptatem earum error pariatur veritatis,
                    ut porro sequi harum suscipit aperiam iusto iure ab omnis dolorem
                    in accusamus ratione.
                </Container>
            </footer>
        </React.Fragment>
    );
};
