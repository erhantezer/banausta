import React from 'react'
import Accordion from '../components/Accordion'
import Header from '../components/Header'
import SearchForm from '../components/SearchForm'
import Middle from '../components/Middle'

const Home = () => {
    return (
        <>
            <Header/>
            <SearchForm/>
            <Middle/>
            <Accordion/>
        </>
    )
}

export default Home