import { NextPage } from "next";
import { useRouter } from "next/router";
import { Fragment } from "react";
import EventContent from "../../components/events/event-detail/event-content/event-content";
import EventLogistics from "../../components/events/event-detail/event-logistic/event-logistics";
import EventSummary from "../../components/events/event-detail/event-summary/event-summary";
import { getEventById } from "../../utils/utils";

const EventDetailPage: NextPage = () => {

    const { query } = useRouter();
    const eventId = query.eventId as string;
    const event = getEventById(eventId);

    if (!event) {
        <p>No event found !!!</p>
    }

    return (
        <Fragment>
            <EventSummary title={event?.title} />
            <EventLogistics date={event?.date} address={event?.location} image={event?.image} imageAlt={event?.title} />
            <EventContent>
                <p>{event?.description}</p>
            </EventContent>
        </Fragment>
    )
}

export default EventDetailPage;