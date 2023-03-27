import React from "react";

export interface SliderProps {
    numberOfSlides: number;
    mobileNumberOfSlides?: number;
    type?: string;
    children: React.ReactNode,
}
