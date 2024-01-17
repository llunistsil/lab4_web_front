import {changeClickX, changeClickY} from "./setCoords/setCoords";

export const clickHandler = (e,dispatch) => {
    const arr = e.target.getBoundingClientRect();
    const y = ((arr.top - e.clientY )/36 + 5).toFixed(2);
    const x = ((e.clientX - arr.left)/37 - 5).toFixed(2);
    changeClickY(y,dispatch);
    changeClickX(x,dispatch);
}