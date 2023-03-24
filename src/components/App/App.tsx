import React, { useEffect } from 'react'
import './App.scss'
import { SwiperSlide } from "swiper/react";

import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { IPreviewCard } from "../PreviewCard/types";

//Features
import { getPopularMovies } from "../../features/movies-popular/popularMoviesSlice";
import { getTopRatedMovies } from "../../features/movies-top-rated/topRatedMoviesSlice";
import { getUpcomingMovies } from "../../features/movies-upcoming/upcomingMoviesSlice";

//Components
import Slider from "../UI/Slider/Slider";
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
                    {upcoming.length > 0 && (
                        <Slider numberOfSlides={5} type="md">
                            {upcoming.map(movie => {
                                return (
                                    <SwiperSlide key={movie.id}>
                                        <PreviewCard preview={movie}/>
                                    </SwiperSlide>
                                )
                            })}
                        </Slider>
                    )}
                </section>
                <section className="app__section popular">
                    <h2 className="popular__title app__section-title">Popular movies:</h2>
                    {popular.length > 0 && (
                        <Slider numberOfSlides={5} type="md">
                            {popular.map(movie => {
                                return (
                                    <SwiperSlide key={movie.id}>
                                        <PreviewCard preview={movie}/>
                                    </SwiperSlide>
                                )
                            })}
                        </Slider>
                    )}
                </section>
                <section className="app__section rated">
                    <h2 className="rated__title app__section-title">Top Rated movies:</h2>
                    {topRated.length > 0 && (
                        <Slider numberOfSlides={5} type="md">
                            {topRated.map(movie => {
                                return (
                                    <SwiperSlide key={movie.id}>
                                        <PreviewCard preview={movie}/>
                                    </SwiperSlide>
                                )
                            })}
                        </Slider>
                    )}
                </section>
            </div>
        </div>
    )
}

export default App
