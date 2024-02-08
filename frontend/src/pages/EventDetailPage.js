import { json, redirect, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

export default function EventDetailPage() {
    const data = useRouteLoaderData("event-details").event;
    return <EventItem event={data}/>
}

export async function loader({request, params}){
    const id = params.id;

    const response = await fetch('http://localhost:8080/events/'+id);

    if(!response.ok) {
        throw json({message: 'Failed to fetch data for selected event'}, {status: 500});
    }
    return response;
}

export async function action ({request, params}) {
    const id = params.id;
    
    const response = await fetch('http://localhost:8080/events/'+id, {method: request.method});

    if(!response.ok) {
        throw json({message: "Failed to delete event"}, {status: 500})
    }
    return redirect('/events');
}