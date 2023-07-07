import React from 'react'

const Countdownbox = () => {
    return (
        <>
            <div className="row count-down-row">
                <div className="col-3  count-down-col p-0">
                    <div className='countdownbox '>
                        <h1 className='text-light fs-1 fw-bold'>07</h1>
                        <p className='countdown-p'>Day</p>
                    </div>
                </div>
                <div className="col-3 count-down-col p-0">
                    <div className='countdownbox '>
                        <h1 className='text-light fs-1 fw-bold'>03</h1>
                        <p className='countdown-p'>Hour</p>
                    </div>
                </div>
                <div className="col-3 count-down-col p-0">
                    <div className='countdownbox '>
                        <h1 className='text-light fs-1 fw-bold'>54</h1>
                        <p className='countdown-p'>Min</p>
                    </div>
                </div>
                <div className="col-3 count-down-col p-0">
                    <div className='countdownbox aligncenter'>
                        <h1 className='text-light fs-1 fw-bold'>21</h1>
                        <p className='countdown-p'>Sec</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Countdownbox
