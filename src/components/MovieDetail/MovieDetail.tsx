import React, { useEffect, useState } from 'react';
import { SwiperSlide } from "swiper/react";
import { useParams } from "react-router-dom";
import "./MovieDetail.scss";
import { IMovieDetail } from "./types";

//Assets
import clock from "../../assets/images/icons/clock.svg"
import calendar from "../../assets/images/icons/calendar.svg"
import notFound from "../../assets/images/avatar.png"

import { convertMinutesToHours } from "../../utils/convertMinutesToHours";

//Components
import Loader from "../UI/Loader/Loader";
import Slider from "../UI/Slider/Slider";
import VideoThumb from "../VideoThumb/VideoThumb";
import Review from "../Review/Review";
import Rating from "../UI/Rating/Rating";
import PreviewCard from "../PreviewCard/PreviewCard";
import Popup from "../Popup/Popup";

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
                                <ul className="movie__genres-list">
                                    {data && data.genres && data?.genres.slice(0, 3).map(genre => <li
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
                            {typeof data.vote_average === 'number' && data.vote_average !== 0 &&
                                <Rating rating={+data?.vote_average.toFixed(1)} type="solid" size="big"/>}
                            <p className='movie__overview'>{data?.overview}</p>
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
                            <section className="starring">
                                <Slider numberOfSlides={5} type="md">
                                    {data?.credits?.cast.slice(0, 12).map(actor => {
                                        return (
                                            <SwiperSlide key={actor.id}>
                                                <article className="star">
                                                    <figure className='star__image-container'>
                                                        <img
                                                            width={100} height={100}
                                                            src={actor.profile_path ? `https://image.tmdb.org/t/p/w300${actor.profile_path}` : notFound}
                                                            alt={actor.name}
                                                            className="star__image" draggable={false}/>
                                                    </figure>
                                                    <span className="star__name">{actor.name}</span>
                                                    <span className="star__role">{actor.character}</span>
                                                </article>
                                            </SwiperSlide>
                                        )
                                    })}
                                </Slider>
                            </section>
                        </div>
                    </div>
                    {data?.videos?.results && data.videos.results.length > 0 && <section className="materials">
                        <h2 className="materials__title">Trailers and extras materials:</h2>
                        <div className="materials__container">
                            <Slider numberOfSlides={4} type="md">
                                {data.videos.results && data.videos.results.filter(v => v.site.toLowerCase().includes('youtube')).map(video =>
                                    <SwiperSlide key={video.id}>
                                        <VideoThumb info={video} onClick={handleVideoThumbClick}/>
                                    </SwiperSlide>
                                )}
                            </Slider>
                        </div>
                    </section>}
                    <Popup isOpen={isOpen} onClose={handleClose}>
                        {iframeId && <iframe className='movie__iframe' width="100%" height="715"
                                             src={`https://www.youtube.com/embed/${iframeId}`}
                                             title="YouTube video player" frameBorder="0"
                                             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                             allowFullScreen></iframe>}
                    </Popup>
                    {data.reviews?.results && data.reviews.results.length > 0 && <section className="reviews">
                        <h2 className="reviews__title">Reviews <sup
                            className='reviews__number'>{data.reviews?.total_results}</sup> :</h2>
                        <div className="reviews__container">
                            <Slider numberOfSlides={3} type="md">
                                {data.reviews.results.map(review => {
                                    return (
                                        <SwiperSlide key={review.id}>
                                            <Review review={review}/>
                                        </SwiperSlide>
                                    )
                                })}
                            </Slider>
                        </div>
                    </section>}
                    {data.recommendations?.results && data.recommendations?.results.length > 0 &&
                        <section className="recommended">
                            <h2 className="recommended__title">We recommend to watch:</h2>
                            <div className="recommended__container">
                                <Slider numberOfSlides={7} type="md">
                                    {data.recommendations.results.map(movie => {
                                        return (
                                            <SwiperSlide key={movie.id}>
                                                <PreviewCard preview={movie} type="sm"/>
                                            </SwiperSlide>
                                        )
                                    })}
                                </Slider>
                            </div>
                        </section>}
                </section>
            ) : <Loader/>}
        </>
    );
};

export default MovieDetail;
