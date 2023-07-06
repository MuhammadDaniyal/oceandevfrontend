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
                                <h5 class="card-title latest-event-h5">Fintech Summit</h5>
                                <p class="card-text latest-event-p">Exploring the convergence of finance and technology, showcasing the latest innovations in the fintech industry.</p>
                                <NavLink to="/" className="latest-event-link">Read More</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-10 col-md-3 event-card-col aligncenter">
                        <div class="card eventcard">
                            <FcPositiveDynamic size="60px" color='purple' />
                            <div class="card-body latest-event-card-body">
                                <h5 class="card-title latest-event-h5">Design Thinking</h5>
                                <p class="card-text latest-event-p">A hands-on workshop introducing design thinking principles and methodologies for problem-solving and innovation.</p>
                                <NavLink to="/" className="latest-event-link">Read More</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-10 col-md-3 event-card-col aligncenter">
                        <div class="card eventcard">
                            <FcBiohazard size="60px" color='purple' />
                            <div class="card-body latest-event-card-body">
                                <h5 class="card-title latest-event-h5">Future of Health</h5>
                                <p class="card-text latest-event-p">Addressing pressing environmental challenges, sustainable practices, and strategies for a greener future.</p>
                                <NavLink to="/" className="latest-event-link">Read More</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-10 col-md-3 event-card-col aligncenter">
                        <div class="card eventcard">
                            <FcAutomotive size="60px" color='purple' />
                            <div class="card-body latest-event-card-body">
                                <h5 class="card-title latest-event-h5">NFT Summit</h5>
                                <p class="card-text latest-event-p">A comprehensive summit delving into the potential of blockchain technology across various industries i.e, supply chain management.</p>
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
