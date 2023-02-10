import React, { useEffect } from 'react'
import './App.scss'

import Header from "../Header/Header";
import PreviewCardsList from "../PreviewCardsList/PreviewCardsList";

import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { IPreviewCard } from "../PreviewCard/types";

import { getPopularMovies } from "../../features/movies-popular/popularMoviesSlice";
import { getTopRatedMovies } from "../../features/movies-top-rated/topRatedMoviesSlice";

const App = () => {
    const popular = useAppSelector<IPreviewCard[]>(state => state.popular.movies)
    const topRated = useAppSelector<IPreviewCard[]>(state => state.topRated.movies)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getPopularMovies())
        dispatch(getTopRatedMovies())
    }, [])

    return (
        <div className="app">
            <div className="wrapper">
                <Header/>
                <main className='main'>
                    <PreviewCardsList movies={popular}/>
                    <PreviewCardsList movies={topRated}/>
                </main>
            </div>
        </div>
    )
}

export default App
