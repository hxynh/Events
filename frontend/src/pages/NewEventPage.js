import { json, redirect } from "react-router-dom";
import EventForm from "../components/EventForm";

export default function NewEventPage() {
    return <EventForm method='POST'/>
}

export async function action ({request, params}) {
    const method = request.method;
    const data = await request.formData();
    const id = method === 'PATCH' ? params.id : '';
    const url = 'https://events-one-pi.vercel.app/events' + (method === 'PATCH' ? '/'+id : '');

    const enteredValue = {
        title: data.get('title'),
        image: data.get('image'),
        date: data.get('date'),
        description: data.get('description')
    } 
    
    const response = await fetch(url, {
        method: method,
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(enteredValue)
    });

    if(response.status === 422) {
        return response;
    }

    if(!response.ok) {
        throw json({message: 'Could not save event'}, {status: 500})
    }

    return redirect('/events');
}