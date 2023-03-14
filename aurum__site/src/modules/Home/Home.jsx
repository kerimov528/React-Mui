import React from 'react'
import Header from '../../components/elements/Header'
import Carousel from '../../components/blocks/Carousel'
import FirstSection from './components/FirstSection'

const Home = () => {
    return (
        <>
            <Header component={<Carousel />} />
            <FirstSection />
        </>
    )
}

export default Home