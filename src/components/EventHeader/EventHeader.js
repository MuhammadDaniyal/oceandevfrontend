import React from 'react'
import '../EventHeader/EventHeader.css'

const EventHeader = () => {
    return (
        <>
            <div className='container' style={{marginTop:"10rem"}}>
                <div className="row event-topper-div">
                    <div className=" d-flex flex-column justify-content-center align-items-center col-10 col-md-12 mx-auto">
                        <h2 className='Event-topper-h2'>Event Calendar</h2>
                        <p className='event-topper-para'>The Tech Events featured in this list take place throughout the year and cover a wide range of different industries.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EventHeader