import {RouterProvider} from "react-router-dom";
import {privateRouter, publicRouter} from "../router";

const AppRouter = () => {
    const isAuth = false;//TODO Доделать авторизацию
    // (не использовать Redux,потому что при обновлении страницы он возвращается в дефолтное состояние)
    return (
        isAuth
        ?
            <RouterProvider router={privateRouter} />
        :
            <RouterProvider router={publicRouter} />
    );
};

export default AppRouter;