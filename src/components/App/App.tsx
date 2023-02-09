import React, { useEffect } from 'react'
import './App.scss'
import Header from "../Header/Header";

const App = () => {

    useEffect(() => {
        fetch(`${import.meta.env.VITE_REACT_APP_BASE_URL}/trending/movie/week?api_key=${import.meta.env.VITE_REACT_APP_API_KEY}`).then(response => response.json()).then(data => console.log(data));
    }, [])
    return (
        <div className="app">
            <div className="wrapper">
                <Header/>
            </div>
        </div>
    )
}

export default App
