//appStore contains the Slices
import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./cartSlice"
const appStore = configureStore({
    reducer:{
        cart1:cartReducer,
    },
})


export default appStore