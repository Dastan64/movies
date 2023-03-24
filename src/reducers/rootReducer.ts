import { combineReducers } from '@reduxjs/toolkit'
import popularMoviesReducer from "../features/movies-popular/popularMoviesSlice";
import topRatedMoviesReducer from "../features/movies-top-rated/topRatedMoviesSlice";
import upcomingMoviesReducer from "../features/movies-upcoming/upcomingMoviesSlice";
import searchedMoviesReducer from "../features/movies-searched/searchedMoviesSlice";

export const rootReducer = combineReducers({
    popular: popularMoviesReducer,
    topRated: topRatedMoviesReducer,
    upcoming: upcomingMoviesReducer,
    searched: searchedMoviesReducer,
})
