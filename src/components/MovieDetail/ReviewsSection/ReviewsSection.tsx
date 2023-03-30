import React from 'react';
import { SwiperSlide } from "swiper/react";
import Review from "../../Review/Review";
import { ReviewsSectionProps } from "./types";

import Slider from "../../UI/Slider/Slider";

const ReviewsSection = ({ reviews }: ReviewsSectionProps) => {
    const sliderOptions = {
        320: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    }
    return (
        <section className="reviews">
            <h2 className="reviews__title">Reviews <sup
                className='reviews__number'>{reviews?.total_results}</sup> :</h2>
            <div className="reviews__container">
                <Slider options={sliderOptions} type="md">
                    {reviews.results.map(review => {
                        return (
                            <SwiperSlide key={review.id}>
                                <Review review={review}/>
                            </SwiperSlide>
                        )
                    })}
                </Slider>
            </div>
        </section>
    );
};

export default ReviewsSection;
