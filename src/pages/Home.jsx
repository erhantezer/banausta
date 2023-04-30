import React from 'react'
import Middle from '../components/Middle'
import Header from '../components/Header'
import SearchForm from '../components/SearchForm'

const Home = () => {
    return (
        <>
            <Header/>
            <SearchForm/>
            <Middle/>
        </>
    )
}

export default Home