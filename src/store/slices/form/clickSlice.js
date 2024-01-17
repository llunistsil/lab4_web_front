import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    x:null,
    y:null,
}

const clickSlice = createSlice(
    {
        name: "selectSlice",
        initialState,
        reducers:{
            setClickX: (state, action)=>{
                state.x = action.payload;
            },
            setClickY: (state, action)=>{
                state.y = action.payload;
            }
        }
    }
);
export const {setClickX, setClickY} = clickSlice.actions
export const selectClickX = (state) => state.form.x;
export const selectClickY = (state) => state.form.y;

export default clickSlice.reducer;