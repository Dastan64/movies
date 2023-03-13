import React from 'react';
import "./Review.scss";
import { ReviewProps } from "./types";
import { formatDate } from "../../utils/formatDate";

//Assets
import avatar from "../../assets/images/avatar.png";
import star from "../../assets/images/icons/star.svg";

const Review = ({ review }: ReviewProps) => {
    const { author_details: { username, rating, avatar_path }, content, created_at } = review;
    return (
        <article className='review'>
            <div className="review__container">
                <img className='review__author-avatar'
                     src={`${avatar_path ? `https://image.tmdb.org/t/p/original${avatar_path}` : avatar}`} alt=""/>
                <span className='review__author-nickname'>{username ? username : 'unknown user'}</span>
                <div className="review__rating-container">
                    <img width={18} height={18} src={star} alt=""/>
                    {rating}
                </div>
            </div>
            <p className="review__text">{content}</p>
            <div className="review__info">
                <span className='review__date'>{formatDate(created_at)}</span>
            </div>
        </article>
    );
};

export default Review;
