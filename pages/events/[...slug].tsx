import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import { EventList } from "../../components/events/event-list/event-list";
import { getFilteredEvents } from "../../services/events";
import { Event } from "../../utils/utils";

export const getServerSideProps: GetServerSideProps<{ events: Event[] }> = async (context) => {

    const { params } = context;

    const filterData = params?.slug as string[];

    const filteredYear = +filterData[0];
    const filteredMonth = +filterData[1];

    if (isNaN(filteredMonth) || isNaN(filteredYear)) {
        return {
            notFound: true,
        }
    }

    const events = await getFilteredEvents({
        year: filteredYear,
        month: filteredMonth
    });

    return {
        props: {
            events,
        }
    }

}

const FilteredEventsPage = ({ events }: InferGetServerSidePropsType<typeof getServerSideProps>) => {

    if (!events || events.length === 0) {
        return (
            <p>No events founded...</p>
        )
    }

    return (
        <div>
            <EventList events={events} />
        </div>
    )
}

export default FilteredEventsPage;