import { createSlice } from "@reduxjs/toolkit";



let initialState ={allMovies:[]}

let moviesSlice = createSlice({
    name:'movies',
    initialState,
    reducers:{
      addMovies : (state , action)=> {
        state.movies=action.payload
      }
    }
})
export let {addMovies} = moviesSlice.actions;
export let getAllMovies = (state)=> state.movies.movies;
export let moviesReducer = moviesSlice.reducer;