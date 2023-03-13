import React from 'react';
import "./Review.scss";
import { ReviewProps } from "./types";
import { formatDate } from "../../utils/formatDate";

const Review = ({ review }: ReviewProps) => {
    const { author_details: { username }, content, created_at } = review;
    return (
        <article>
            <span className='review__author-nickname'>{username}</span>
            <p className="review__text">{content}</p>
            <div className="review__info">
                <span className='review__date'>{formatDate(created_at)}</span>
            </div>
        </article>
    );
};

export default Review;
