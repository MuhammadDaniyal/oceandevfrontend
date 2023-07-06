import React, { useEffect, useState } from 'react'
import Layout from "../../Layout"
import '../Event/Event.css'
import Eventcards from './Eventcards';
import EventHeader from  '../../components/EventHeader/EventHeader'
import '../../components/EventToggleComponent/EventComponent.css'

const Event = () => {

    const [events,setevents] = useState([]);

    const getuser = async ()=>{

        try{
          const url = `http://localhost:8080/event/list`
    
          const response = await fetch(url, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          });
          const json = await response.json();
          setevents(json.events)
            console.log(json)
        }
        catch(error){
          console.log(error)
        }
      }

    useEffect(()=>{
        getuser();
    })

    const filterEvents = (myEvent) => {
        const updatedEvents = events.filter((elem) => {
            return elem.status === myEvent;

        });
        setevents(updatedEvents);
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
            <div className='container' style={{ height: "100vh", marginTop:"9rem" }}>
                <div className="row">
                {events.map((item,index)=>{
                    return <Eventcards item={item} key={index}/>
                })}
                </div>
            </div>
        </Layout>
    )
}

export default Event