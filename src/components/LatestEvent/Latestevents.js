import React from 'react'
import '../LatestEvent/Latestevents.css'
import Countdownbox from './Countdownbox'
import { BsFillMicFill } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import { FcPositiveDynamic, FcBiohazard, FcAutomotive } from "react-icons/fc";

const Latestevents = () => {
    return (
        <>
            <div className='container aligncenter flex-column'>
                <div className="row row-upper w-100">
                    <div className="col">
                        <h1 className='myheading fw-bold'>Latest Events</h1>
                        <p className='fs-4 my-4' style={{ textAlign: "justify" }}>Explore the cutting-edge world of RCai with the latest updates on groundbreaking advancements, innovative applications, and transformative breakthroughs. Discover the future of artificial intelligence and robotics on our website.</p>
                    </div>
                    <div className="col">
                        <Countdownbox />
                    </div>
                </div>
                <div className="row row-lower my-4 w-100">
                    <div className=" col-10 col-md-3 event-card-col aligncenter">
                        <div class="card eventcard">
                            <BsFillMicFill size="60px" color='purple' />
                            <div class="card-body latest-event-card-body">
                                <h5 class="card-title latest-event-h5">Event 1</h5>
                                <p class="card-text latest-event-p">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <NavLink to="/" className="latest-event-link">Read More</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-10 col-md-3 event-card-col aligncenter">
                        <div class="card eventcard">
                            <FcPositiveDynamic size="60px" color='purple' />
                            <div class="card-body latest-event-card-body">
                                <h5 class="card-title latest-event-h5">Event 1</h5>
                                <p class="card-text latest-event-p">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <NavLink to="/" className="latest-event-link">Read More</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-10 col-md-3 event-card-col aligncenter">
                        <div class="card eventcard">
                            <FcBiohazard size="60px" color='purple' />
                            <div class="card-body latest-event-card-body">
                                <h5 class="card-title latest-event-h5">Event 1</h5>
                                <p class="card-text latest-event-p">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <NavLink to="/" className="latest-event-link">Read More</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-10 col-md-3 event-card-col aligncenter">
                        <div class="card eventcard">
                            <FcAutomotive size="60px" color='purple' />
                            <div class="card-body latest-event-card-body">
                                <h5 class="card-title latest-event-h5">Event 1</h5>
                                <p class="card-text latest-event-p">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <NavLink to="/" className="latest-event-link">Read More</NavLink>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Latestevents
