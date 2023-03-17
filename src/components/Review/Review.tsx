import React from 'react';
import "./Review.scss";
import { ReviewProps } from "./types";
import { formatDate } from "../../utils/formatDate";

//Assets
import avatar from "../../assets/images/avatar.png";
import Rating from "../UI/Rating/Rating";

const Review = ({ review }: ReviewProps) => {
    const { author_details: { username, rating, avatar_path }, content, created_at } = review;
    const handleAvatar = (path: string | null) => {
        let processedPath;
        if (!path) {
            processedPath = avatar;
            return processedPath;
        }
        if (path.startsWith('/https')) {
            processedPath = path.replace(/^\/(.*)/, '$1');
            return processedPath;
        } else {
            return `https://image.tmdb.org/t/p/original/${path}`;
        }
    }
    return (
        <article className='review'>
            <div className="review__container">
                <div className="review__avatar-container">
                    <img className='review__author-avatar'
                         src={handleAvatar(avatar_path)}
                         alt=""/>
                    <span className='review__author-nickname'>{username ? username : 'unknown user'}</span>
                </div>
                {rating && <Rating rating={rating} type="outlined" bound size="sm"/>}
            </div>
            <p className="review__text">{content}</p>
            <div className="review__info">
                <span className='review__date'>{formatDate(created_at)}</span>
            </div>
        </article>
    );
};

export default Review;
