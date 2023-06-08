import React, { useEffect } from 'react'
import './App.scss'

import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { IPreviewCard } from "../../@types/MoviePreviewCard";

//Features
import { getPopularMovies } from "../../features/movies-popular/popularMoviesSlice";
import { getTopRatedMovies } from "../../features/movies-top-rated/topRatedMoviesSlice";
import { getUpcomingMovies } from "../../features/movies-upcoming/upcomingMoviesSlice";

//Components
import MoviesSlider from "../MoviesSlider/MoviesSlider";
import Hero from "../Hero/Hero";

const App = () => {
    const popular = useAppSelector<IPreviewCard[]>(state => state.popular.movies)
    const topRated = useAppSelector<IPreviewCard[]>(state => state.topRated.movies)
    const upcoming = useAppSelector<IPreviewCard[]>(state => state.upcoming.movies)
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getPopularMovies())
        dispatch(getTopRatedMovies())
        dispatch(getUpcomingMovies())
    }, [])

    return (
        <div className="app">
            <Hero/>
            {upcoming.length > 0 && <MoviesSlider movies={upcoming} title="Upcoming"/>}
            {popular.length > 0 && <MoviesSlider movies={popular} title="Popular"/>}
            {topRated.length > 0 && <MoviesSlider movies={topRated} title="Top Rated"/>}
        </div>
    )
}

export default App
