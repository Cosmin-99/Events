import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { Fragment } from "react";
import EventContent from "../../components/events/event-detail/event-content/event-content";
import EventLogistics from "../../components/events/event-detail/event-logistic/event-logistics";
import EventSummary from "../../components/events/event-detail/event-summary/event-summary";
import { Comments } from "../../components/input/comments/comments";
import { getEventById, getFeaturedEvents } from "../../services/events";
import { Event } from "../../utils/utils";

export const getStaticProps: GetStaticProps<{ event?: Event }> = async (context) => {
    const eventId = context?.params?.eventId as string;
    const event = await getEventById(eventId);

    return {
        props: {
            event,
        },
        revalidate: 1800,
    }
}

export const getStaticPaths: GetStaticPaths<{ eventId: string }> = async () => {
    const events = await getFeaturedEvents();

    const dynamicPaths = events.map((event) => ({
        params: { eventId: event.id },
    }));

    return {
        paths: dynamicPaths,
        fallback: "blocking",
    }
}

const EventDetailPage = ({ event }: InferGetStaticPropsType<typeof getStaticProps>) => {

    if (!event) {
        <p className="center">Loading ...</p>
    }

    return (
        <Fragment>
            <EventSummary title={event?.title} />
            <EventLogistics date={event?.date} address={event?.location} image={event?.image} imageAlt={event?.title} />
            <EventContent>
                <p>{event?.description}</p>
            </EventContent>
            <Comments eventId={event?.id} />
        </Fragment>
    )
}

export default EventDetailPage;