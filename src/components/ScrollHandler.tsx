import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Location } from "history";

interface IScrollHandler {
    location: Location;
}

const _ScrollHandler: React.FC<IScrollHandler> = ({ location }) => {
    useEffect(() => {
        const element = document.getElementById(location.hash.replace("#", ""));

        setTimeout(() => {
            window.scrollTo({
                behavior: element ? "smooth" : "auto",
                top: element ? element.offsetTop : 0
            });
        }, 0);
    }, [location]);

    return null;
};

export const ScrollHandler = withRouter(_ScrollHandler);
