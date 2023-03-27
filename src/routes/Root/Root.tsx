import React from 'react';
import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <>
            {/*<Header/>*/}
            <main className="main">
                <Outlet/>
            </main>
        </>
    );
};

export default Root;
