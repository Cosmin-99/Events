import Link from "next/link";
import styles from "./button.module.scss";

export function Button(props: {
    children: string | JSX.Element | JSX.Element[]
    link?: string
    onClick?: () => void
}) {
    const { link, children, onClick } = props;

    if (link) {
        return (
            <Link href={link} className={styles.btn}>{children}</Link>
        )
    }

    return (
        <button className={styles.btn} onClick={onClick}>{children}</button>
    )
}