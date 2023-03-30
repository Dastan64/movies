import React from "react";

export interface SliderProps {
    options?: {
        [breakpoint: number]: {
            slidesPerView: number;
        }
    }
    type?: string;
    children: React.ReactNode,
}
