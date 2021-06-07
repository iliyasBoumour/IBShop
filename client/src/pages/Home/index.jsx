import React, { useEffect } from 'react'
import Header from "../../components/Header";
import NewArrival from "../../components/NewArrival";

const Home = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return (
        <>
            <Header/>
            <NewArrival/>
        </>
    )
}

export default Home
