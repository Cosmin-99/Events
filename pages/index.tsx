import { NextPage } from "next";
import { EventList } from "../components/events/event-list/event-list";
import { getFeaturedEvents } from "../utils/utils";

const HomePage: NextPage = () => {
    const featuredEvents = getFeaturedEvents();

    return (
        <div>
            <EventList events={featuredEvents} />
        </div>
    )
}

export default HomePage