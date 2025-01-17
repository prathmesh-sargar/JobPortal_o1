import { createSlice } from "@reduxjs/toolkit";


const compnaySlice =  createSlice({

    name: "companies",
    initialState:{
        companies: []
    },
    reducers:{
        //actions
        getCompanies:(state,action)=>{
            state.companies = action.payload;
        }
    }
});

export const {getCompanies} = compnaySlice.actions;
export default compnaySlice.reducer