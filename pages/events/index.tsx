import { NextPage } from "next";
import Router, { useRouter } from "next/router";
import { EventList } from "../../components/events/event-list/event-list";
import EventsSearch from "../../components/events/event-search/events-search";
import { getAllEvents } from "../../utils/utils";

const AllEventsPage: NextPage = () => {
    const router = useRouter()
    
    const events = getAllEvents();
    
    const findEvents = (year?: string, month?: string) => {
        const fullPath = `/events/${year}/${month}`;

        router.push(fullPath);
    }

    return (
        <div>
            <EventsSearch onSearch={findEvents} />
            <EventList events={events} />
        </div>
    )
}

export default AllEventsPage;