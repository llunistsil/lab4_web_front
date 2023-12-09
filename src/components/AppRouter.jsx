import React from 'react';
import {RouterProvider} from "react-router-dom";
import {privateRouter, publicRouter} from "../router";
const AppRouter = () => {
    const isAuth = false;
    return (
        isAuth
        ?
            <RouterProvider router={privateRouter} />
        :
            <RouterProvider router={publicRouter} />
    );
};

export default AppRouter;