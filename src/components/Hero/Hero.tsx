import React from 'react';
import "./Hero.scss";
import { useAppSelector } from "../../hooks/hooks";
import { IPreviewCard } from "../../@types/MoviePreviewCard";
import { SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import Slider from "../UI/Slider/Slider";

const Hero = () => {
    const upcomingMovies = useAppSelector<IPreviewCard[]>(state => state.upcoming.movies)
    const heroMovies = upcomingMovies.slice(0, 6);
    const sliderOptions = {
        slidesPerView: 1,
        loop: true,
    }
    return (
        <section className='hero'>
            <Slider options={sliderOptions}>
                {heroMovies.map(movie => {
                    return (
                        <SwiperSlide key={movie.id}>
                            <Link to={`/movies/${movie.id}`}>
                                <div className='hero__slider-image-container'>
                                    <img width={'100%'} height={720} className='hero__slider-image'
                                         src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`}
                                         alt={movie.title}/>
                                    <div className="info">
                                        <h2>{movie.title}</h2>
                                        <p>{movie.overview}</p>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                    )
                })}
            </Slider>
        </section>
    );
};

export default Hero;
