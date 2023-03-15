import React from 'react'
import Header from '../../components/elements/Header'
import Carousel from '../../components/blocks/Carousel'
import WhyUs from './components/WhyUs'
import CountUp from './components/CountUp'
import VideoSection from './components/VideoSection'
import Blogs from './components/Blogs'
import Footer from '../../components/elements/Footer'

const Home = () => {
    return (
        <>
            <Header component={<Carousel />} />
            <WhyUs />
            <CountUp />
            <VideoSection />
            <Blogs />
            <Footer />
        </>
    )
}

export default Home