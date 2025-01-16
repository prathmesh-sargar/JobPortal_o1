import { createSlice } from "@reduxjs/toolkit";

const jobSlice =  createSlice({

    name: "job",
    initialState:{
        job: []
    },
    reducers:{
        //actions
        getJobs:(state,action)=>{
            state.job = action.payload;
        }
    }
});

export const {getJobs} = jobSlice.actions;
export default jobSlice.reducer