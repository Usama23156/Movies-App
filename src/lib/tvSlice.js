import { createSlice } from "@reduxjs/toolkit";



let initialState ={allTv:[]}

let tvSlice = createSlice({
    name:'tv',
    initialState,
    reducers:{
      addTv : (state , action)=> {
        state.tv=action.payload
      }
    }
})
export let {addTv} = tvSlice.actions;
export let getAllTv = (state)=> state.tv.tv;
export let tvReducer = tvSlice.reducer;