import React from 'react'
import '../LatestEvent/Latestevents.css'
import Countdownbox from './Countdownbox'
import { BsFillMicFill } from "react-icons/bs";
import { FcPositiveDynamic, FcBiohazard, FcAutomotive } from "react-icons/fc";

const Latestevents = () => {
  return (
    <>
    <div className='container aligncenter flex-column'>
        <div className="row aligncenter">
            <div className="col">
                <h1 className='myheading fw-bold'>Latest Events</h1>
                <p className='fs-4 my-4'>Explore the cutting-edge world of RCai with the latest updates on groundbreaking advancements, innovative applications, and transformative breakthroughs. Discover the future of artificial intelligence and robotics on our website.</p>
            </div>
            <div className="col">
                <Countdownbox/>
            </div>
        </div>
        <div className="row my-4 w-100">
            <div className="col aligncenter">
                <div class="card eventcard" style={{width: "23rem"}}>
                    <div className='aligncenter p-4'>
                        <BsFillMicFill size="100px" color='purple'/>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Event 1</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/" class="btn btn-outline-danger">Check it</a>
                    </div>
                </div>
            </div>
            <div className="col aligncenter">
                <div class="card eventcard" style={{width: "23rem"}}>
                    <div className='aligncenter p-4'>
                        <FcPositiveDynamic size="100px" />
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Event 1</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/" class="btn btn-outline-danger">Check it</a>
                    </div>
                </div>

            </div>
            <div className="col aligncenter">
                <div class="card eventcard" style={{width: "23rem"}}>
                    <div className='aligncenter p-4'>
                        <FcBiohazard size="100px" />
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Event 1</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/" class="btn btn-outline-danger">Check it</a>
                    </div>
                </div>
            </div>
            <div className="col aligncenter">
                <div class="card eventcard" style={{width: "23rem"}}>
                    <div className='aligncenter p-4'>
                        <FcAutomotive size="100px" />
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Event 1</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/" class="btn btn-outline-danger">Check it</a>
                    </div>
                </div>
            </div>
        </div>

    </div>
    </>
  )
}

export default Latestevents
