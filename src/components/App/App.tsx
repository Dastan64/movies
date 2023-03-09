import React, { useEffect } from 'react'
import './App.scss'

import PreviewCardsList from "../PreviewCardsList/PreviewCardsList";

import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { IPreviewCard } from "../PreviewCard/types";

import { getPopularMovies } from "../../features/movies-popular/popularMoviesSlice";
import { getTopRatedMovies } from "../../features/movies-top-rated/topRatedMoviesSlice";
import { getUpcomingMovies } from "../../features/movies-upcoming/upcomingMoviesSlice";
import Slider from "../UI/Slider/Slider";
import { SwiperSlide } from "swiper/react";
import PreviewCard from "../PreviewCard/PreviewCard";

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
            <div className="wrapper">
                <section className="app__section upcoming">
                    <h2 className="upcoming__title app__section-title">Upcoming:</h2>
                    {/*<PreviewCardsList movies={upcoming}/>*/}
                    <Slider numberOfSlides={5} type="md">
                        {popular.map(movie => {
                            return (
                                <SwiperSlide>
                                    <PreviewCard preview={movie}/>
                                </SwiperSlide>
                            )
                        })}
                    </Slider>
                </section>
                <section className="app__section popular">
                    <h2 className="popular__title app__section-title">Popular movies:</h2>
                    {/*<PreviewCardsList movies={popular}/>*/}
                </section>
                <section className="app__section rated">
                    <h2 className="rated__title app__section-title">Top Rated movies:</h2>
                    {/*<PreviewCardsList movies={topRated}/>*/}
                </section>
            </div>
        </div>
    )
}

export default App
