import {createBrowserRouter} from "react-router-dom";
import React from "react";
import Main from "../pages/main/Main";
import Error from "../pages/Error";
import Info from "../pages/info/Info";
import LoginForm from "../components/UI/form/auth/LoginForm";
import SignForm from "../components/UI/form/auth/SignForm";
import OptionForm from "../components/UI/form/auth/OptionForm";

export const router = createBrowserRouter([
    {
        path: "~s368679/",
        element: <Info/>,
        errorElement:<Error/>,
        children:[
            {
                path: "login",
                element: <LoginForm/>,
            },
            {
                path: "sign",
                element: <SignForm/>
            },
        ]
    },
    {
        path: "~s368679/main",
        element: <Main/>,
        errorElement:<Error/>,
        children:[
            {
                path: "option",
                element: <OptionForm/>
            },
        ]
    },
]);