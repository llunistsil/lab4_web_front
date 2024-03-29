import * as React from "react";
import * as ReactDOM from "react-dom/client";
import './styles/index.module.css';

import App from "./App";
import {Provider} from "react-redux";
import {store} from "./store/store";



ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>



);



