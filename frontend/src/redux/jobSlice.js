import { createSlice } from "@reduxjs/toolkit";

const jobSlice =  createSlice({

    name: "job",
    initialState:{
        job: [],
        adminjob:[]
    },
    reducers:{
        //actions
        getJobs:(state,action)=>{
            state.job = action.payload;
        },
        getadminjob: (state,action)=>{
            state.adminjob = action.payload;
        }
    }
});

export const {getJobs,getadminjob} = jobSlice.actions;
export default jobSlice.reducer