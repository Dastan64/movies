import React, { useEffect, useState } from 'react';
import { SwiperSlide } from "swiper/react";
import { useParams } from "react-router-dom";
import "./MovieDetail.scss";
import { IMovieDetail } from "./types";
import notFound from "../../assets/images/avatar.png"

import { convertMinutesToHours } from "../../utils/convertMinutesToHours";

//Components
import Loader from "../UI/Loader/Loader";
import Slider from "../UI/Slider/Slider";
import VideoThumb from "../VideoThumb/VideoThumb";
import Review from "../Review/Review";
import Rating from "../UI/Rating/Rating";
import PreviewCard from "../PreviewCard/PreviewCard";

const MovieDetail = () => {
    const { id } = useParams();
    const [data, setData] = useState<IMovieDetail>();

    useEffect(() => {
        fetch(`${import.meta.env.VITE_REACT_APP_BASE_URL}/movie/${id}?api_key=${import.meta.env.VITE_REACT_APP_API_KEY}&append_to_response=videos,credits,reviews`).then(response => response.json()).then(data => {
            setData(prevData => ({ ...prevData, ...data, }));
        });

        fetch(`${import.meta.env.VITE_REACT_APP_BASE_URL}/movie/${id}/recommendations?api_key=${import.meta.env.VITE_REACT_APP_API_KEY}`).then(response => response.json()).then(recommendations => {
            setData(prevData => ({ ...prevData, recommendations, }))
        }).catch(error => console.log(error));
    }, [])

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
                                    <svg width={16} height={16} xmlns="http://www.w3.org/2000/svg" fill="none"
                                         viewBox="0 0 24 24" strokeWidth={1.5}
                                         stroke="#fff">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"/>
                                    </svg>
                                    <span>{data?.release_date && new Date(data?.release_date).getFullYear()}</span>
                                </div>
                                <div className="thumb">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5} stroke="currentColor" width={16} height={16}>
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                    </svg>
                                    <span>{data?.runtime && convertMinutesToHours(data.runtime)}</span>
                                </div>
                            </div>
                            {data.vote_average &&
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
                                <li className='movie__fact'>
                                    <span className="movie__fact-caption">Revenue</span>:
                                    ${data?.revenue?.toLocaleString()}
                                </li>
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
                    <section className="materials">
                        <h2 className="materials__title">Trailers and extras materials:</h2>
                        <div className="materials__container">
                            <Slider numberOfSlides={4} type="md">
                                {data?.videos?.results && data.videos.results.filter(v => v.site.toLowerCase().includes('youtube')).map(video =>
                                    <SwiperSlide key={video.id}>
                                        <VideoThumb info={video}/>
                                    </SwiperSlide>
                                )}
                            </Slider>
                        </div>
                    </section>
                    <section className="reviews">
                        <h2 className="reviews__title">Reviews <sup
                            className='reviews__number'>{data.reviews?.total_results}</sup> :</h2>
                        <div className="reviews__container">
                            <Slider numberOfSlides={3} type="md">
                                {data?.reviews?.results.map(review => {
                                    return (
                                        <SwiperSlide key={review.id}>
                                            <Review review={review}/>
                                        </SwiperSlide>
                                    )
                                })}
                            </Slider>
                        </div>
                    </section>
                    <section className="recommended">
                        <h2 className="recommended__title">We recommend to watch:</h2>
                        <div className="recommended__container">
                            <Slider numberOfSlides={5}>
                                {data.recommendations?.results.map(movie => {
                                    return (
                                        <SwiperSlide key={movie.id}>
                                            <PreviewCard preview={movie}/>
                                        </SwiperSlide>
                                    )
                                })}
                            </Slider>
                        </div>
                    </section>
                </section>
            ) : <Loader/>}
        </>
    );
};

export default MovieDetail;
