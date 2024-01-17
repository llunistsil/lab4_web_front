import {toast} from "react-hot-toast";
import {serverPath} from "../utils";
import {checkResponse} from "../validators/checkResponse";
import {getDots} from "./getDotsRequest";


export const clearRequest = (dispatch) =>{
    toast.remove();
    fetch(serverPath + "/api/dots/delete", {
        method: 'POST',
        headers: {"Authorization": "Basic " + btoa(window.localStorage.getItem("login") + ":" + window.localStorage.getItem("password")).replaceAll("=", "")}
    })
        .then(response => {
            checkResponse(response, toast);
            getDots(dispatch);
        })
}