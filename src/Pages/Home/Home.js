import React from 'react'
import Layout from "../../Layout"
import Carousel from '../../components/Carousel/Carousel'
import Latestevents from '../../components/LatestEvent/Latestevents'
import Sponser from '../../components/Sponser/Sponser'

const Home = () => {
    return (
        <Layout>
            <Carousel />
            <Latestevents />
            <Sponser />
        </Layout>
    )
}

export default Home