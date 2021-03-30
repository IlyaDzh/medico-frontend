import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { Hidden } from "@material-ui/core";

import { LogoIcon } from "icons";

interface IHeaderLeft {
    isLight?: boolean;
    classes?: any;
}

export const HeaderLeft: React.FC<IHeaderLeft> = ({ isLight, classes }) => {
    return (
        <div className={classes.leftBar}>
            <Link to="/" className={classes.logo} aria-label="Перейти на главную">
                <Hidden xsDown>
                    <LogoIcon isLight={isLight} />
                </Hidden>
                <Hidden smUp>
                    <LogoIcon width={64} isLight={isLight} />
                </Hidden>
            </Link>
            <Hidden smDown>
                <Link
                    to="/doctors"
                    className={clsx(
                        classes.animatedLink,
                        isLight && classes.animatedLinkIsLight
                    )}
                >
                    Специалисты
                </Link>
            </Hidden>
        </div>
    );
};
