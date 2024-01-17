import {toast} from "react-hot-toast";
import {validateData} from "../validators/validate";
import {serverPath} from "../utils";
import {checkResponse} from "../validators/checkResponse";
import {setRows} from "../../store/slices/result/tableSlice";

export const signUpRequest = (dispatch,navigate,newLogin,newPassword) => {
    toast.dismiss();
    if (validateData(newLogin,newPassword,toast)){
        let formData = new FormData();
        formData.append('login', newLogin);
        formData.append('password', newPassword);
        fetch(serverPath + "/api/user/register",{
            method: 'POST',
            body: formData
        }).then(response => {
            if (checkResponse(response,toast)){
                window.localStorage.setItem("login", newLogin);
                window.localStorage.setItem("password", newPassword);
                navigate("/~s368679/main");
            }
        })

    }
}