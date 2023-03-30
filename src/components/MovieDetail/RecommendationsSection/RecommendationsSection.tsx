import React from 'react';
import { SwiperSlide } from "swiper/react";
import { RecommendationsSectionProps } from "./types";

import Slider from "../../UI/Slider/Slider";
import PreviewCard from "../../PreviewCard/PreviewCard";

const RecommendationsSection = ({ recommendations }: RecommendationsSectionProps) => {
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
            slidesPerView: 7,
        },
    }
    return (
        <section className="recommended">
            <h2 className="recommended__title">We recommend to watch:</h2>
            <div className="recommended__container">
                <Slider options={sliderOptions} type="md">
                    {recommendations?.results.map(movie => {
                        return (
                            <SwiperSlide key={movie.id}>
                                <PreviewCard preview={movie} type="md"/>
                            </SwiperSlide>
                        )
                    })}
                </Slider>
            </div>
        </section>
    );
};

export default RecommendationsSection;
