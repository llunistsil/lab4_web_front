import {EMPTY_LOGIN_ERROR, EMPTY_PASSWORD_ERROR} from "../errors/error";

export function validateData(newLogin,newPassword,toast){
    if (newLogin === ""){
        toast.error(EMPTY_LOGIN_ERROR,{style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
            },});
        return false;
    }
    else if (newPassword === ""){
        toast.error(EMPTY_PASSWORD_ERROR,{style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
            },});
        return false;
    }
    else{
        return true;
    }
}