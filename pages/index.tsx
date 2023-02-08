import { GetStaticProps, InferGetStaticPropsType } from "next";
import { EventList } from "../components/events/event-list/event-list";
import { getFeaturedEvents } from "../services/events";
import { Event } from "../utils/utils";

export const getStaticProps: GetStaticProps<{ events: Event[] }> = async () => {

    const featuredEvents = await getFeaturedEvents();

    return {
        props: {
            events: featuredEvents,
        },
        revalidate: 1800,
    }
}

const HomePage = ({ events }: InferGetStaticPropsType<typeof getStaticProps>) => {

    return (
        <div>
            <EventList events={events} />
        </div>
    )
}

export default HomePage