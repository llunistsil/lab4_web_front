import {createBrowserRouter} from "react-router-dom";
import React from "react";
import Main from "../pages/Main";
import Error from "../pages/Error";
import Info from "../pages/info/Info";

export const publicRouter = createBrowserRouter([
    {
        path: "/",
        element: <Info/>,
        errorElement:<Error/>
    },

]);
export const privateRouter = createBrowserRouter([
    {
        path: "/",
        element: <Info/>,
        errorElement:<Error/>
    },
    {
        path: "/main",
        element: <Main/>,
    },

]);