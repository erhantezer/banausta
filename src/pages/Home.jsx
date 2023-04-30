import React from 'react'
import Accordion from '../components/Accordion'
import Header from '../components/Header'
import SearchForm from '../components/SearchForm'

const Home = () => {
    return (
        <>
            <Header/>
            <SearchForm/>
            <Accordion/>
        </>
    )
}

export default Home