import { useRouter } from "next/router";
import { EventList } from "../../components/events/event-list/event-list";
import { getFilteredEvents } from "../../utils/utils";

const FilteredEventsPage = () => {

    const { query } = useRouter();

    const filterData = query.slug;
    
    if (!filterData) {
        return <p className="center">Loading...</p>
    }

    const filteredYear = +filterData[0];
    const filteredMonth = +filterData[1];

    if (isNaN(filteredMonth) || isNaN(filteredYear)) {
        return (
            <p>Invalid filter. Please adjust your values</p>
        )
    }

    const events = getFilteredEvents({
        year: filteredYear,
        month: filteredMonth
    });

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