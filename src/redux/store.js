import { configureStore } from "@reduxjs/toolkit";
import cardslice from "./cardslice";

const store = configureStore({
    reducer: {
        cart : cardslice.reducer
    } 
})

export default store