import {toast} from "react-hot-toast";
import {validateData} from "../validators/validate";
import {serverPath} from "../utils";
import {checkResponse} from "../validators/checkResponse";

export const logInRequest = (dispatch,navigate,newLogin,newPassword) =>{
    toast.remove();
    if (validateData(newLogin,newPassword,toast)){
        fetch(serverPath + "/api/user/login", {
            method: "POST",
            headers: {"Authorization": "Basic " + btoa(newLogin + ":" + newPassword).replaceAll("=", "")}})
            .then(response => {
                if (checkResponse(response,toast)){
                    window.localStorage.setItem("login", newLogin);
                    window.localStorage.setItem("password", newPassword);
                    navigate("/~s368679/main");
                }
            })
    }
}