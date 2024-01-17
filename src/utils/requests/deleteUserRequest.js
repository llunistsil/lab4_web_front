import {toast} from "react-hot-toast";
import {serverPath} from "../utils";
import {checkResponse} from "../validators/checkResponse";

export const deleteUserRequest = (dispatch,navigate) => {
    toast.remove();
    fetch(serverPath + "/api/user/delete", {
        method: 'POST',
        headers: {"Authorization": "Basic " + btoa(window.localStorage.getItem("login") + ":" + prompt("Введите пароль")).replaceAll("=", "")
        }
    })
        .then(response => {
            if (checkResponse(response, toast)) {
                window.localStorage.clear()
                navigate("/~s368679/");
            }
        })
}