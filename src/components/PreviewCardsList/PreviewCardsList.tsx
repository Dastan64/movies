import React from 'react';
import "./PreviewCardsList.scss";
import PreviewCard from "../PreviewCard/PreviewCard";
import { PreviewCardsListProps } from "./types";

const PreviewCardsList = ({ movies }: PreviewCardsListProps) => {
    return (
        <ul className='previews-list'>
            {movies.map(preview => {
                return <PreviewCard preview={preview} key={preview.id}/>
            })}
        </ul>
    );
};

export default PreviewCardsList;
