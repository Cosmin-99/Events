import { Button } from "../../button/button"
import { AddressIcon } from "../../icons/address-icon";
import { ArrowRightIcon } from "../../icons/arrow-right-icon";
import { DateIcon } from "../../icons/date-icon";
import styles from "./event-item.module.scss";

export function EventItem(props: {
    title: string
    image: string
    date: string
    location: string
    id: string
}) {
    const { title, image, date, location, id } = props;

    const readableDate = new Date(date).toLocaleDateString('en-US', {
        day: "numeric",
        month: "long",
        year: "numeric"
    });

    const formattedAddress = location.replace(", ", "\n");

    const explorePath = `/events/${id}`

    return (
        <li className={styles.item}>
            <img src={'/' + image} alt={title} />
            <div className={styles.content}>
                <div className={styles.summary}>
                    <h2>{title}</h2>
                    <div className={styles.date}>
                        <DateIcon />
                        <time>{readableDate}</time>
                    </div>
                    <div className={styles.address}>
                        <AddressIcon />
                        <address>{formattedAddress}</address>
                    </div>
                </div>
                <div className={styles.actions}>
                    <Button link={explorePath}>
                        <span>Explore Event</span>
                        <span className={styles.icon}>
                            <ArrowRightIcon />
                        </span>
                    </Button>
                </div>
            </div>
        </li>
    )
}