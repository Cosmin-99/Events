import Link from "next/link";
import styles from "./button.module.scss";

export function Button(props: {
    children: JSX.Element[]
    link: string
}) {
    const { link, children } = props;
    return (
        <Link href={link} className={styles.btn}>{children}</Link>
    )
}