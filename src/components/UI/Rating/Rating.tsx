import React from 'react';
import "./Rating.scss";
import classNames from "classnames";
import { RatingProps } from "./types";

const Rating = ({ rating, type, bound, size }: RatingProps) => {
    const bad = rating < 5, mid = rating >= 5 && rating < 7, good = rating >= 7;

    const ratingClass = classNames({
        [`rating_type_${type}`]: true,
        'rating_bad': bad,
        'rating_mid': mid,
        'rating_good': good,
        [`rating_size_${size}`]: true,
    })

    return (
        <div className={`rating ${ratingClass}`}>
            <span>{rating} {bound ? '/ 10' : ''}</span>
        </div>
    );
};

export default Rating;
