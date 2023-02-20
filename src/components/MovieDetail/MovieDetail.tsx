import React, { useEffect, useState } from 'react';
import "./MovieDetail.scss";
import { IMovieDetail } from "./types";

import { convertMinutesToHours } from "../../utils/convertMinutesToHours";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
    const { id } = useParams();
    const [data, setData] = useState<IMovieDetail>();
    useEffect(() => {
        fetch(`${import.meta.env.VITE_REACT_APP_BASE_URL}/movie/${id}?api_key=${import.meta.env.VITE_REACT_APP_API_KEY}&append_to_response=videos,credits`).then(response => response.json()).then(data => {
            console.log(data);
            setData(data);
        });
    }, [])

    return (
        <section className='movie'>
            <div className="movie__container">
                <figure className="movie__poster-container">
                    <img src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`} alt={data?.title}
                         className="movie__poster"/>
                </figure>
                <div className="movie__info">
                    <h1 className="movie__title">{data?.title}</h1>
                    <span className='movie__tagline'>{data?.tagline}</span>
                    <div className="movie__rating-thumb">
                        <svg width={16} height={16} xmlns="http://www.w3.org/2000/svg" fill="#F5C518"
                             viewBox="0 0 24 24" strokeWidth={1.5} stroke="#F5C518">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"/>
                        </svg>
                        <span>{data?.vote_average.toFixed(1)} ({data?.vote_count} reviews)</span>
                    </div>
                    <ul className="movie__genres-list">
                        {data?.genres.map(genre => <li className='movie__genre-item' key={genre.id}>{genre.name}</li>)}
                    </ul>
                    <div className="movie__top-info">
                        <div className="thumb thumb--release">
                            <svg width={16} height={16} xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 24 24" strokeWidth={1.5}
                                 stroke="#fff">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"/>
                            </svg>
                            <span>{data?.release_date && new Date(data?.release_date).getFullYear()}</span>
                        </div>
                        <div className="thumb thumb--runtime">
                            <svg width={16} height={16} xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 24 24"
                                 strokeWidth={1.5} stroke="#fff">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                            <span>{data?.runtime && convertMinutesToHours(data.runtime)}</span>
                        </div>
                    </div>
                    <p className='movie__overview'>{data?.overview}</p>

                    <ul className="movie__facts">
                        <li className='movie__fact'><span
                            className="movie__fact-caption">Budget</span>: ${data?.budget.toLocaleString()}
                        </li>
                        <li className='movie__fact'><span
                            className="movie__fact-caption">Production</span>: {data?.production_companies.map(company => {
                            return <span key={company.id}>{company.name}</span>
                        })}</li>
                        <li className='movie__fact'><span
                            className="movie__fact-caption">Revenue</span>: ${data?.revenue.toLocaleString()}
                        </li>
                    </ul>
                </div>
            </div>
            <section className="starring">
                <h2 className="starring__title title">Starring:</h2>
                <div className="starring__container">
                    {data?.credits.cast && data?.credits.cast.slice(0, 12).map(actor => {
                        return (
                            <article className="star" key={actor.id}>
                                <figure className='star__image-container'>
                                    <img src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`} alt=""
                                         className="star__image" draggable={false}/>
                                </figure>
                                <span className="star__name">{actor.name}</span>
                                <span className="star__role">{actor.character}</span>
                            </article>
                        )
                    })}
                </div>
            </section>
            <section className="materials">
                <h2 className="materials__title title">Trailers and extras materials</h2>
                <div className="materials__container">
                    {data?.videos.results && data.videos.results.filter(v => v.site.toLowerCase().includes('youtube')).map(video => {
                        return (
                            <iframe key={video.id} width="100%" height="315"
                                    src={`https://www.youtube.com/embed/${video.key}`}
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen></iframe>
                        )
                    })}
                </div>
            </section>
        </section>
    );
};

export default MovieDetail;
