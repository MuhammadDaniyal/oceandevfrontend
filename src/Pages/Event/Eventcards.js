import React from 'react'

const Eventcards = ({ item }) => {
    return (
        <>
            <div className="col-10 col-md-3 mx-auto">
                <div class="card eventcard1">
                    <div className='imgcontainer'>
                        <img className='img-fluid' style={{ width: '100%' }} src={item?.img} alt="" />
                        <span class="badge text-bg-success px-4 py-2 badgestyle">{item?.status}</span>
                    </div>
                    <div class="card-body">
                        <div className="row">
                            <div className="col-4 borderstyle" >
                                <h5 class="datestyle text-center"><h5>Sept</h5>04</h5>
                            </div>
                            <div className="col-8 d-flex justify-content-center align-items-center borderstyle1">
                                <h5 class="card-title titlestyle text-start">{item?.title}</h5>
                            </div>
                        </div>
                        <p class="card-text description">{item?.description}</p>
                        {/* <NavLink to="/" className="latest-event-link">Read More</NavLink> */}
                    </div>
                </div>
            </div>

        </>
    )
}

export default Eventcards
