import React, { useCallback, useState } from 'react';
import "./PreviewCardsList.scss";
import PreviewCard from "../PreviewCard/PreviewCard";
import { PreviewCardsListProps } from "./types";

// Import Swiper components
import { Swiper as SwiperClass } from 'swiper/types';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const PreviewCardsList = ({ movies }: PreviewCardsListProps) => {
        const [swiperRef, setSwiperRef] = useState<SwiperClass>();
        const showPreviousSlide = useCallback(() => swiperRef?.slidePrev(), [swiperRef])
        const showNextSlide = useCallback(() => swiperRef?.slideNext(), [swiperRef])
        const breakpoints = {
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
            1024: {
                slidesPerView: 5,
            }
        }
        return (
            <div className='slider'>
                <button className={`slider__prev-button`}
                        onClick={showPreviousSlide}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000"
                         width="16" height="16">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
                    </svg>
                </button>
                <Swiper
                    breakpoints={breakpoints}
                    spaceBetween={20}
                    slidesPerView={5}
                    onSwiper={setSwiperRef}>
                    {movies.map(preview => {
                        return (
                            <SwiperSlide key={preview.id}>
                                <PreviewCard preview={preview}/>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
                <button className={`slider__next-button`}
                        onClick={showNextSlide}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000"
                         width="16" height="16">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
                    </svg>
                </button>
            </div>
        );
    }
;

export default PreviewCardsList;
