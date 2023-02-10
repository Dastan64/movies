import React, { useEffect } from 'react'
import './App.scss'

import Header from "../Header/Header";
import PreviewCardsList from "../PreviewCardsList/PreviewCardsList";

import { useAppDispatch } from "../../hooks/hooks";
import { fetchData } from "../../features/movies/moviesSlice";

const App = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchData())
    }, [])

    return (
        <div className="app">
            <div className="wrapper">
                <Header/>
                <main className='main'>
                    <PreviewCardsList/>
                </main>
            </div>
        </div>
    )
}

export default App
