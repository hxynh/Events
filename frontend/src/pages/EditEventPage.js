import EventForm from "../components/EventForm";
import { useRouteLoaderData } from "react-router-dom";

export default function EditEventPage() {
    const data = useRouteLoaderData("event-details").event;

    return <EventForm method='PATCH' event={data}/>
}