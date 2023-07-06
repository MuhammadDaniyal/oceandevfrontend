import React from 'react'
import Layout from "../../Layout"
import { NavLink } from 'react-router-dom';
import '../Event/Event.css'

const Event = () => {
    return (
        <Layout>
            <div className='container' style={{ height: "100vh", marginTop:"9rem" }}>
                <div className="row">
                    <div className="col">
                        <div class="card eventcard1">
                            <div className='imgcontainer'>
                                <img className='img-fluid' src="https://c4.wallpaperflare.com/wallpaper/945/487/732/ai-art-astronaut-spacesuit-space-science-fiction-hd-wallpaper-preview.jpg" alt="" />
                                <span class="badge text-bg-success px-4 py-2 badgestyle">Ongoing</span>
                            </div>
                            <div class="card-body">
                                <div className="row">
                                    <div className="col-4 borderstyle" >
                                        <h5 class="datestyle text-center"><h5>Sept</h5>04</h5>    
                                    </div>
                                    <div className="col-8 d-flex justify-content-center align-items-center borderstyle1">
                                        <h5 class="card-title titlestyle text-start">Autonomous Vehicle Seminar</h5>    
                                    </div>
                                </div>
                                <p class="card-text description">Revolutionizing transportation: Autonomous vehicles take the wheel, paving the way for a new era of mobility.</p>
                                {/* <NavLink to="/" className="latest-event-link">Read More</NavLink> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Event