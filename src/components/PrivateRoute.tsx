import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";

interface IPrivateRoute {
    isAuthorized?: boolean;
}

export const PrivateRoute: React.FC<IPrivateRoute & RouteProps> = ({
    component: Component,
    isAuthorized,
    ...rest
}: any) => {
    return (
        <Route
            {...rest}
            render={(props: any) =>
                isAuthorized ? <Component {...props} /> : <Redirect to="/" />
            }
        />
    );
};
