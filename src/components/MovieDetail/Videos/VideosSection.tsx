import React from 'react';
import { SwiperSlide } from "swiper/react";
import { VideosSectionProps } from "./types";

import Slider from "../../UI/Slider/Slider";
import VideoThumb from "../../VideoThumb/VideoThumb";

const VideosSection = ({ videos, onClick }: VideosSectionProps) => {
    const sliderOptions = {
        320: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 2,
        },
        900: {
            slidesPerView: 3,
        },
        1300: {
            slidesPerView: 4,
        }
    }
    return (
        <section className="materials">
            <h2 className="materials__title">Trailers and extras materials:</h2>
            <div className="materials__container">
                <Slider options={sliderOptions} type="md">
                    {videos.results.filter(v => v.site.toLowerCase().includes('youtube')).map(video =>
                        <SwiperSlide key={video.id}>
                            <VideoThumb info={video} onClick={onClick}/>
                        </SwiperSlide>
                    )}
                </Slider>
            </div>
        </section>
    );
};

export default VideosSection;
