/*import { Link } from "react-router-dom"

const EVENTS = [
    {id: 'e1', title: 'Event 1'},
    {id: 'e2', title: 'Event 2'},
    {id: 'e3', title: 'Event 3'},
    {id: 'e4', title: 'Event 4'},
    {id: 'e5', title: 'Event 5'},
]

export default function EventsPage() {
    return (
        <>
            <h1>EventsPage</h1>
            <ul>
                {EVENTS.map(event => 
                 <li key={event.id}>
                    <Link to={`/events/${event.id}`}>{event.title}</Link>
                 </li>
                )}

            </ul>
            
        </>
    )
}*/


import { Suspense } from 'react';
import EventsList from '../components/EventsList';
import { useLoaderData, json, defer, Await } from 'react-router-dom';

function EventsPage() {
  const {events} = useLoaderData();
  
//   if(data.isError) {
//     return <p>{data.message}</p>
//   }
  return (
    <Suspense 
      fallback={<p style={{textAlign: 'center'}}>Loading...</p>}>
      <Await resolve={events}>
      {(loadedEvents) => <EventsList events={loadedEvents}/> }
      </Await>
    </Suspense>
  );
}

async function loadEvents() {
  const response = await fetch('http://localhost:8080/events');
  const resData = await response.json();

    if (!response.ok) {
      //return {isError: true, message: "Failed to load data"}
    //   throw new Response (JSON.stringify({message: "Failed to load data"}), {status:500});
    throw json({message: "Failed to load data" }, {status: 500})
    } 
    return resData.events;
}

export function loader() {
    return defer({
      events: loadEvents()
    });
}

export default EventsPage;