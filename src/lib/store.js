import { configureStore } from "@reduxjs/toolkit";
import { moviesReducer } from "./moviesSlice";
import { tvReducer } from "./tvSlice";

export let store = configureStore({
    reducer:{
              movies: moviesReducer ,
              tv: tvReducer 
    }
})