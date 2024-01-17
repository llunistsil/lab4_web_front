import {serverPath} from "../utils";
import {getDots} from "./getDotsRequest";
import {checkResponse} from "../validators/checkResponse";
import {toast} from "react-hot-toast";

export const addDot = (dispatch,x,y,r) =>{
    toast.remove();
    let formData = new FormData();
    formData.append('x', x);
    formData.append('y', y);
    formData.append('r', r);
    fetch(serverPath + "/api/dots", {
        method: "POST",
        headers: {
            "Authorization": "Basic " + btoa(window.localStorage.getItem("login") + ":" + window.localStorage.getItem("password")).replaceAll("=", "")},
        body: formData
    })
        .then(
            (response) => {
                if (checkResponse(response,toast)) {
                    getDots(dispatch);
                }
            }
        )
}