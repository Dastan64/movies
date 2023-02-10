import React, { useEffect, useState } from 'react'
import './App.scss'
import Header from "../Header/Header";
import PreviewCard from "../PreviewCard/PreviewCard";
import { Data } from "./types";
import PreviewCardsList from "../PreviewCardsList/PreviewCardsList";

const App = () => {
    const [data, setData] = useState<Data>();
    useEffect(() => {
        fetch(`${import.meta.env.VITE_REACT_APP_BASE_URL}/trending/movie/week?api_key=${import.meta.env.VITE_REACT_APP_API_KEY}&language=ru`).then(response => response.json()).then(data => {
            console.log(data)
            setData(data);
        });
    }, [])
    return (
        <div className="app">
            <div className="wrapper">
                <Header/>
                <main className='main'>
                    {data?.results && <PreviewCardsList results={data?.results}/>}
                </main>
            </div>
        </div>
    )
}

export default App
