import React from 'react';
import "./PreviewCardsList.scss";
import { PreviewCard } from "../PreviewCard/types";
import { useAppSelector } from "../../hooks/hooks";

const PreviewCardsList = () => {
    const movies = useAppSelector<PreviewCard[]>(state => state.movies.trendingMovies)
    return (
        <ul className='previews-list'>
            {movies.map(preview => {
                return <PreviewCard preview={preview} key={preview.id}/>
            })}
        </ul>
    );
};

export default PreviewCardsList;
