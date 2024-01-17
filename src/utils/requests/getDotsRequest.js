import {serverPath} from "../utils";
import {setRows} from "../../store/slices/result/tableSlice";
import {checkResponse} from "../validators/checkResponse";
import {toast} from "react-hot-toast";

export const getDots = (dispatch) => {
    toast.remove();
    fetch(serverPath + "/api/dots", {
        method: "GET",
        headers: {"Authorization": "Basic " + btoa(window.localStorage.getItem("login") + ":" + window.localStorage.getItem("password")).replaceAll("=", "")}
    })
        .then(
            response => {
                if (checkResponse(response, toast)) {

                    response.text().then(
                        (text) => {
                            dispatch(setRows(JSON.parse(text)));
                        }
                    );
                }
            }
        )
}