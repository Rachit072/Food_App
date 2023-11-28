import { createSlice } from "@reduxjs/toolkit"; 

const cartSlice = createSlice({
    name:'cart',
    initialState :{
        items:[]
    },
    reducers:{
        additem:(state,action)=>{
            state.items.push(action.payload);
        },
        clearCart:(state)=>{
            state.items = []
        },
        removeCart:(state,action)=>{
            state.items.pop();
        },
    },
});
export const {additem,removeCart,clearCart} = cartSlice.actions;
export default cartSlice.reducer;