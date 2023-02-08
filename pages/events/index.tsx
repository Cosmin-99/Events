import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Router, { useRouter } from "next/router";
import { EventList } from "../../components/events/event-list/event-list";
import EventsSearch from "../../components/events/event-search/events-search";
import { getAllEvents } from "../../services/events";
import { Event } from "../../utils/utils";

export const getStaticProps: GetStaticProps<{ events: Event[] }> = async () => {
    const allEvents = await getAllEvents();

    return {
        props: {
            events: allEvents,
        },
        revalidate: 60,
    }
}

const AllEventsPage = ({ events }: InferGetStaticPropsType<typeof getStaticProps>) => {
    const router = useRouter()
    
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