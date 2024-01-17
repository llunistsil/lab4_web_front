import {configureStore} from "@reduxjs/toolkit";
import coordsSlice from "./slices/form/coordsSlice";
import tableSlice from "./slices/result/tableSlice";
import clickSlice from "./slices/form/clickSlice";

export const store = configureStore({
    reducer: {
        coords:coordsSlice,
        table:tableSlice,
        click:clickSlice
    }
})