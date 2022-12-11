import { Event } from "../../../utils/utils";
import { EventItem } from "../event-item/event-item";
import styles from "./event-list.module.scss";

export function EventList(props: {
    events: Event[]
}) {
    const { events } = props;
    return (
        <ul className={styles.list}>
            {events.map((event) =>
                <EventItem
                    key={event.id}
                    date={event.date}
                    location={event.location}
                    id={event.id} title={event.title}
                    image={event.image}
                />)}
        </ul>
    )
}