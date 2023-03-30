import React, { useRef } from 'react';
import "./Slider.scss";

// Import Swiper components
import { Swiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { SliderProps } from "./types";
import { Navigation } from "swiper";

const Slider = ({ options, type, children }: SliderProps) => {
    const navigationPrevRef = useRef(null)
    const navigationNextRef = useRef(null)
    const defaultOptions = {
        320: {
            slidesPerView: 1,
        },
        450: {
            slidesPerView: 2,
        },
        576: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
    }
    return (
        <div className='slider'>
            <button className={`slider__prev-button ${type ? `slider__prev-button_${type}` : ''}`}
                    ref={navigationPrevRef}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000"
                     width="16" height="16">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
                </svg>
            </button>
            <Swiper
                modules={[Navigation]}
                breakpoints={options || defaultOptions}
                spaceBetween={20}
                navigation={{
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current,
                }}
                onInit={(swiper) => {
                    if (swiper.params.navigation) {
                        //@ts-ignore
                        swiper.params.navigation.prevEl = navigationPrevRef.current;
                        //@ts-ignore
                        swiper.params.navigation.nextEl = navigationNextRef.current;
                    }
                    swiper.navigation.init();
                    swiper.navigation.update();
                }}>
                {children}
            </Swiper>
            <button className={`slider__next-button ${type ? `slider__next-button_${type}` : ''}`}
                    ref={navigationNextRef}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000"
                     width="16" height="16">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
                </svg>
            </button>
        </div>
    );
};

export default Slider;
