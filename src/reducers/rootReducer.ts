import { combineReducers } from '@reduxjs/toolkit'
import popularMoviesReducer from "../features/movies-popular/popularMoviesSlice";
import topRatedMoviesReducer from "../features/movies-top-rated/topRatedMoviesSlice";

export const rootReducer = combineReducers({
    popular: popularMoviesReducer,
    topRated: topRatedMoviesReducer,
})
