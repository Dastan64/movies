import React from 'react';
import "./PreviewCardsList.scss";
import PreviewCard from "../PreviewCard/PreviewCard";
import { PreviewCardsListProps } from "./types";

// Import Swiper components
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const PreviewCardsList = ({ movies }: PreviewCardsListProps) => {
        return (
            <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={5}
                navigation
            >
                {movies.map(preview => {
                    return (
                        <SwiperSlide>
                            <PreviewCard preview={preview} key={preview.id}/>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        );
    }
;

export default PreviewCardsList;
