import React from 'react'
import Layout from "../../Layout"
import Carousel from '../../components/Carousel/Carousel'
import Latestevents from '../../components/LatestEvent/Latestevents'

const Home = () => {
    return (
        <Layout>
            <Carousel/>
            <Latestevents/>
        </Layout>
    )
}

export default Home