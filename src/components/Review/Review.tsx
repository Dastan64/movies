import React from 'react';
import "./Review.scss";
import { ReviewProps } from "./types";
import { formatDate } from "../../utils/formatDate";

//Assets
import avatar from "../../assets/images/avatar.png";
import classNames from "classnames";

const Review = ({ review }: ReviewProps) => {
    const { author_details: { username, rating, avatar_path }, content, created_at } = review;

    const ratingClass = classNames({
        'review__rating_good': rating >= 7,
        'review__rating_mid': rating >= 5 && rating < 7,
        'review__rating_bad': rating < 5,
    })

    return (
        <article className='review'>
            <div className="review__container">
                <div className="review__avatar-container">
                    <img className='review__author-avatar'
                         src={`${avatar_path ? `https://image.tmdb.org/t/p/original${avatar_path}` : avatar}`} alt=""/>
                    <span className='review__author-nickname'>{username ? username : 'unknown user'}</span>
                </div>
                {rating && <span className={`review__rating ${ratingClass}`}>{rating} / 10</span>}
            </div>
            <p className="review__text">{content}</p>
            <div className="review__info">
                <span className='review__date'>{formatDate(created_at)}</span>
            </div>
        </article>
    );
};

export default Review;
