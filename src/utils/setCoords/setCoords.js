import {setR, setX, setY} from "../../store/slices/form/coordsSlice";
import {toast} from "react-hot-toast";
import {validateR, validateY} from "../validators/validateCoord";
import {setClickX, setClickY} from "../../store/slices/form/clickSlice";

export const changeX = (coord,dispatch) => {
    const counts = [-5,-4,-3,-2,-1,0,1,2,3]
    const closest = counts.reduce(function(prev, curr) {
        return (Math.abs(curr - coord) < Math.abs(prev - coord) ? curr : prev);
    });
    dispatch(setX(closest));
    return true;
}
export const changeY = (coord,dispatch) => {
    toast.remove();
    if(validateY(coord)){
        dispatch(setY(coord))
        return true;
    }else {
        toast.error('Y должен быть в диапозоне от -3 до 3',{style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
            },});
        return false;
    }
}
export const changeR = (coord,dispatch) => {
    toast.remove();
    if(validateR(coord)){
        dispatch(setR(coord))
    }else {
        toast.error('Радиус должне быть больше нуля',{style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
            },});
    }

}
export const changeClickX = (coord,dispatch) => {
    const counts = [-5,-4,-3,-2,-1,0,1,2,3]
    const closest = counts.reduce(function(prev, curr) {
        return (Math.abs(curr - coord) < Math.abs(prev - coord) ? curr : prev);
    });
    dispatch(setClickX(closest));
    return true;
}
export const changeClickY = (coord,dispatch) => {
    toast.remove();
    if(validateY(coord)){
        dispatch(setClickY(coord))
        return true;
    }else {
        toast.error('Y должен быть в диапозоне от -3 до 3',{style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
            },});
        return false;
    }
}