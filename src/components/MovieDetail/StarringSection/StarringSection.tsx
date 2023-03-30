import React from 'react';
import { SwiperSlide } from "swiper/react";
import { StarringSectionProps } from "./types";

import Slider from "../../UI/Slider/Slider";
import notFound from "../../../assets/images/avatar.png";

const StarringSection = ({ credits }: StarringSectionProps) => {
    const sliderOptions = {
        320: {
            slidesPerView: 2,
        },
        400: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
        1300: {
            slidesPerView: 5,
        },
    }
    return (
        <section className="starring">
            <Slider options={sliderOptions} type="md">
                {credits.cast.length > 0 && credits.cast.slice(0, 8).map(actor => {
                    return (
                        <SwiperSlide key={actor.id}>
                            <article className="star">
                                <figure className='star__image-container'>
                                    <img
                                        width={100} height={100}
                                        src={actor.profile_path ? `https://image.tmdb.org/t/p/w300${actor.profile_path}` : notFound}
                                        alt={actor.name}
                                        className="star__image" draggable={false}/>
                                </figure>
                                <span className="star__name">{actor.name}</span>
                                <span className="star__role">{actor.character}</span>
                            </article>
                        </SwiperSlide>
                    )
                })}
            </Slider>
        </section>
    );
};

export default StarringSection;
