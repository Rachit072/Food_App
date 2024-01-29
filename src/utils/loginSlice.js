import { createSlice } from "@reduxjs/toolkit/";

const loginSlice= createSlice({
    name:'login',
    initialState:{
        isAuthenticated:false,
        user:null,
    },
reducers:{
    signIn:(state,action)=>{
        state.isAuthenticated=true,
        state.user=action.payload;
        localStorage.setItem('user', JSON.stringify(action.payload));
    },
    signUp:(state,action)=>{
        state.isAuthenticated=true,
        state.user=action.payload;
        localStorage.setItem('user', JSON.stringify(action.payload));
    },
    logout:(state,action)=>{
        state.isAuthenticated=false,
        state.user=null;
        localStorage.removeItem('user');
    }

}});
export const {signIn,signUp,logout} = loginSlice.actions;
export default loginSlice.reducer;