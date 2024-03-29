import React from 'react';
import "./PreviewCard.scss";
import { PreviewCardProps } from "./types";
import { Link } from "react-router-dom";

import posterNotFound from "../../assets/images/poster-not-found.png";

const PreviewCard = ({ preview, type }: PreviewCardProps) => {
    const { poster_path, title, release_date, vote_average, id } = preview;
    return (
        <Link to={`/movies/${id}`}>
            <article className='preview'>
                <figure>
                    <img draggable={false} width='300' height='400'
                         className={`preview__poster ${type ? `preview__poster_${type}` : ''}`}
                         src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : posterNotFound}
                         alt={`Movie name: ${title}`}
                         loading={"lazy"}/>
                </figure>
                <span className="preview__title">{title ? title : 'Unknown title'}</span>
                <div className="preview__rating-container">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} width={16}
                         height={16}
                         stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"/>
                    </svg>
                    <span>{vote_average ? vote_average.toFixed(1) : 'N/A'}</span>
                </div>
                <span className="preview__date">{release_date ? new Date(release_date).getFullYear() : 'N/A'}</span>
            </article>
        </Link>
    );
};

export default PreviewCard;
