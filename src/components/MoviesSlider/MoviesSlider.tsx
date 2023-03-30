import React from 'react';
import Slider from "../UI/Slider/Slider";
import { SwiperSlide } from "swiper/react";
import PreviewCard from "../PreviewCard/PreviewCard";
import { MoviesSliderProps } from "./types";

const MoviesSlider = ({ movies, title }: MoviesSliderProps) => {
    const sliderOptions = {
        320: {
            slidesPerView: 2,
        },
        576: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
        1024: {
            slidesPerView: 5,
        }
    }

    return (
        <section className="app__section">
            <h2 className="app__section-title">{title}:</h2>
            {movies.length > 0 && (
                <Slider options={sliderOptions}>
                    {movies.map((movie) => (
                        <SwiperSlide key={movie.id}>
                            <PreviewCard preview={movie}/>
                        </SwiperSlide>
                    ))}
                </Slider>
            )}
        </section>
    );
};

export default MoviesSlider;
