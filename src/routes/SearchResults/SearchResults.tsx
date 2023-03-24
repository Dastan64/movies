import React from 'react';
import "./SearchResults.scss";
import { useAppSelector } from "../../hooks/hooks";
import PreviewCard from "../../components/PreviewCard/PreviewCard";

const SearchResults = () => {
    const status = useAppSelector(state => state.searched.status);
    const results = useAppSelector(state => state.searched.results);

    return (
        <section className="results">
            <div className='results__grid'>
                {results.length > 0 && results.map(movie => (
                    <PreviewCard preview={movie}/>
                ))}
            </div>
            {status === 'done' && results.length === 0 &&
                <>
                    <h2 className='results__title'>Nothing was found</h2>
                    <p className='results__text'>Try to enter the name of the movie properly</p>
                    <p className='results__text'>Maybe you are looking for something that is not yet in the catalog</p>
                </>
            }
        </section>
    );
};

export default SearchResults;
