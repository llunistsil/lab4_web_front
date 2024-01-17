import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    x:null,
    y:null,
    r: 3,
}

const coordsSlice = createSlice(
    {
        name: "selectSlice",
        initialState,
        reducers:{
            setX: (state, action)=>{
                state.x = action.payload;
            },
            setY: (state, action)=>{
                state.y = action.payload;
            },
            setR: (state, action)=>{
                state.r = action.payload;
            }
        }
    }
);
export const {setX, setY, setR} = coordsSlice.actions
export const selectX = (state) => state.form.x;
export const selectY = (state) => state.form.y;
export const selectR = (state) => state.form.r;

export default coordsSlice.reducer;