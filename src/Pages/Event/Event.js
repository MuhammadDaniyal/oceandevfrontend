import React, { useEffect, useState } from 'react'
import Layout from "../../Layout"
import '../Event/Event.css'
import Eventcards from './Eventcards';
import EventHeader from '../../components/EventHeader/EventHeader'
import '../../components/EventToggleComponent/EventComponent.css'

const Event = () => {

    const [events, setevents] = useState([]);
    const [filterevent, setFilterevent] = useState([])

    const getuser = async () => {

        try {
            const url = `http://localhost:8080/event/list`

            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const json = await response.json();
            setevents(json.events)
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getuser();
    }, [])

    const filterEvents = (myEvent) => {
        const updatedEvents = events.filter((elem) => {
            return elem.status === myEvent;

        });
        setFilterevent(updatedEvents);
    }


    return (
        <Layout>
            <EventHeader />
            <div className='container'>
                <div className='row d-flex justify-content-center'>
                    <div className='col-10 col-lg-4 col-md-4'>
                        <div className='event-nav'>
                            <h2 onClick={() => filterEvents("Past")} className='event-nav-h2'>Previous</h2>
                            <h2 onClick={() => filterEvents("Ongoing")} className='event-nav-h2'>Ongoing</h2>
                            <h2 onClick={() => filterEvents("Upcoming")} className='event-nav-h2'>Upcoming</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container' style={{ padding: '5rem 0rem' }}>
                <div className="row event-page-row mx-auto">
                    {
                        filterevent.length !== 0 ? (

                            filterevent.map((item, index) => {
                                return <Eventcards item={item} key={index} />
                            })
                        ) : (
                            events.map((item, index) => {
                                return <Eventcards item={item} key={index} />
                            })
                        )
                    }
                </div>
            </div>
        </Layout>
    )
}

export default Event