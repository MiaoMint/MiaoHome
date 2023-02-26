import { HTMLProps } from "react";

export default function Card(props: HTMLProps<HTMLDivElement>) {
    return (
        <div
            {...props}
            className={`border bg-white rounded-2xl p-6 hover:ring-2 hover:ring-slate-400 ${props.className}`}>
            {props.children}
        </div>
    )
}