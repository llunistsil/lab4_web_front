import {createBrowserRouter} from "react-router-dom";
import Login from "../pages/Login";
import React from "react";
import CreateUser from "../pages/CreateUser";
import Main from "../pages/Main";
import Error from "../pages/Error";

export const publicRouter = createBrowserRouter([
    {
        path: "/",
        element: <Login/>,
        errorElement:<Error/>
    },
    {
        path: "/create_user",
        element: <CreateUser/>,
    },

]);
export const privateRouter = createBrowserRouter([
    {
        path: "/",
        element: <Login/>,
        errorElement:<Error/>
    },
    {
        path: "/create_user",
        element: <CreateUser/>,
    },
    {
        path: "/main",
        element: <Main/>,
    },

]);