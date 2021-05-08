import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";

interface IPrivateRoute {
    canRoute?: boolean;
}

export const PrivateRoute: React.FC<IPrivateRoute & RouteProps> = ({
    component: Component,
    canRoute,
    ...rest
}: any) => {
    return (
        <Route
            {...rest}
            render={(props: any) =>
                canRoute ? <Component {...props} /> : <Redirect to="/" />
            }
        />
    );
};
