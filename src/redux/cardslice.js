import { createSlice } from "@reduxjs/toolkit"

const productState = {
    items :[]
}

const cardslice = createSlice({
    name: "cart",
    initialState: productState,
    reducers:{
        addtocard : (state , action)=>{
            state.items.push(action.payload)
        },
        removeFromCart :(state,action) =>{
            const newarray = state.items.filter((items)=>items.id !=action.payload.id)
            state.items = newarray
        }
    }})

export default cardslice