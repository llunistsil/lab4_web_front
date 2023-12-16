import {createBrowserRouter} from "react-router-dom";
import React from "react";
import Main from "../pages/Main";
import Error from "../pages/Error";
import Info from "../pages/info/Info";
import LoginForm from "../components/UI/form/LoginForm";
import SignForm from "../components/UI/form/SignForm";

export const publicRouter = createBrowserRouter([
    {
        path: "/",
        element: <Info/>,
        errorElement:<Error/>,
        children:[
            {
                path:"login",
                element: <LoginForm/>
            },
            {
                path:"sign",
                element:<SignForm/>
            }
        ]
    }

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