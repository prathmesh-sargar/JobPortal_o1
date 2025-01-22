import { createSlice } from "@reduxjs/toolkit";

const authSlice =  createSlice({

    name: "auth",
    initialState:{
        user: null,
        appliedJobs:[]
    },
    reducers:{
        //actions
        setUser:(state,action)=>{
            state.user = action.payload;
        },
        setAppliedJobs:(state,action)=>{
            state.appliedJobs = action.payload;
        }
    }
});

export const {setUser,setAppliedJobs} = authSlice.actions;
export default authSlice.reducer;