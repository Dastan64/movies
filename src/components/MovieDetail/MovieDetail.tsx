import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import "./MovieDetail.scss";
import { IMovieDetail } from "./types";

//Assets
import clock from "../../assets/images/icons/clock.svg"
import calendar from "../../assets/images/icons/calendar.svg"

import { convertMinutesToHours } from "../../utils/convertMinutesToHours";

//Components
import Loader from "../UI/Loader/Loader";
import Slider from "../UI/Slider/Slider";
import Rating from "../UI/Rating/Rating";
import Popup from "../Popup/Popup";
import ReviewsSection from "./Reviews/ReviewsSection";
import RecommendationsSection from "./Recommendations/RecommendationsSection";
import VideosSection from "./Videos/VideosSection";
import StarringSection from "./StarringSection/StarringSection";

const MovieDetail = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [iframeId, setIframeId] = useState('');
    const { id } = useParams();
    const [data, setData] = useState<IMovieDetail>();

    useEffect(() => {
        fetch(`${import.meta.env.VITE_REACT_APP_BASE_URL}/movie/${id}?api_key=${import.meta.env.VITE_REACT_APP_API_KEY}&append_to_response=videos,credits,reviews`).then(response => response.json()).then(data => {
            setData(prevData => ({ ...prevData, ...data, }));
        });

        fetch(`${import.meta.env.VITE_REACT_APP_BASE_URL}/movie/${id}/recommendations?api_key=${import.meta.env.VITE_REACT_APP_API_KEY}`).then(response => response.json()).then(recommendations => {
            setData(prevData => ({ ...prevData, recommendations, }))
        }).catch(error => console.log(error));

        window.scrollTo(0, 0)
    }, [id])

    const handleClose = () => {
        setIsOpen(false);
        setIframeId('');
    }

    const handleVideoThumbClick = (id: string) => {
        setIsOpen(true);
        setIframeId(id);
    }

    return (
        <>
            {data ? (
                <section className='movie'>
                    <div className="movie__container">
                        <figure className="movie__poster-container">
                            <img width={500} height={700} src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`}
                                 alt={data?.title}
                                 className="movie__poster"/>
                        </figure>
                        <div className="movie__info">
                            <h1 className="movie__title">{data?.title}</h1>
                            {data.tagline && <span className='movie__tagline'>{data.tagline}</span>}
                            <div className="movie__brief-info">
                                {typeof data.vote_average === 'number' && data.vote_average !== 0 &&
                                    <Rating rating={data?.vote_average.toFixed(1)} type="solid"
                                            size="big"/>}
                                <ul className="movie__genres-list">
                                    {data.genres && data.genres.length > 0 && data.genres.slice(0, 2).map(genre => <li
                                        className='movie__genre-item'
                                        key={genre.id}>{genre.name}</li>)}
                                </ul>
                                <div className="thumb">
                                    <img width={16} height={16} src={calendar} alt=""/>
                                    <span>{data?.release_date && new Date(data?.release_date).getFullYear()}</span>
                                </div>
                                <div className="thumb">
                                    <img width={16} height={16} src={clock} alt=""/>
                                    <span>{data?.runtime && convertMinutesToHours(data.runtime)}</span>
                                </div>
                            </div>
                            {data.overview && <p className='movie__overview'>{data.overview}</p>}
                            <ul className="movie__facts">
                                <li className='movie__fact'>
                                    <span className="movie__fact-caption">Budget</span>:
                                    ${data?.budget?.toLocaleString()}
                                </li>
                                <li className='movie__fact'>
                                    <span
                                        className="movie__fact-caption">Production</span>: {data?.production_companies?.map((company, index) => {
                                    return <span key={company.id}>{(index ? ', ' : '') + company.name}</span>
                                })}</li>
                                {(data?.revenue || 0 > 0) &&
                                    <li className='movie__fact'>
                                        <span
                                            className="movie__fact-caption">Revenue</span>:
                                        ${data?.revenue?.toLocaleString()}
                                    </li>}
                            </ul>
                            {data.credits && <StarringSection credits={data.credits}/>}
                        </div>
                    </div>
                    {data.videos?.results && data.videos.results.length > 0 &&
                        <VideosSection videos={data.videos} onClick={handleVideoThumbClick}/>}
                    <Popup isOpen={isOpen} onClose={handleClose}>
                        {iframeId && <iframe className='movie__iframe' width="100%" height="715"
                                             src={`https://www.youtube.com/embed/${iframeId}`}
                                             title="YouTube video player" frameBorder="0"
                                             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                             allowFullScreen></iframe>}
                    </Popup>
                    {data.reviews && data.reviews.results.length > 0 && <ReviewsSection reviews={data.reviews}/>}
                    {data.recommendations && data.recommendations.results.length > 0 &&
                        <RecommendationsSection recommendations={data.recommendations}/>}
                </section>
            ) : <Loader/>}
        </>
    );
};

export default MovieDetail;
