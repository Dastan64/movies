import React from 'react';
import "./PreviewCardsList.scss";
import { PreviewCardsListProps } from "./types";
import PreviewCard from "../PreviewCard/PreviewCard";

const PreviewCardsList = ({ results }: PreviewCardsListProps) => {
    return (
        <ul className='previews-list'>
            {results.map(preview => {
                return <PreviewCard preview={preview} key={preview.id}/>
            })}
        </ul>
    );
};

export default PreviewCardsList;
