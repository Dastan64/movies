import React, { ChangeEvent, FormEvent, useState } from 'react';
import "./SearchPanel.scss";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/hooks";
import { searchMovies } from "../../features/movies-searched/searchedMoviesSlice";

const SearchPanel = () => {
    const [value, setValue] = useState('');
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(searchMovies(value));
        navigate(`/results?query=${value}`);

    }

    return (
        <div className='search'>
            <form action="" className="search__form" onSubmit={handleSubmit}>
                <input className='search__input' type="text" placeholder={'Avatar: The Way of Water'}
                       onChange={handleChange}/>
                <button type={"submit"} className='search__btn'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} width={20}
                         height={20}
                         stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
                    </svg>
                </button>
            </form>
        </div>
    );
};

export default SearchPanel;
