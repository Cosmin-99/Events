import { Fragment } from "react";
import { MainHeader } from "./main-header/main-header";

export function Layout(props: {
    children: JSX.Element
}) {
    return (
        <Fragment>
            <MainHeader />
            <main>{props.children}</main>
        </Fragment>
    )
}