import { HTMLProps } from "react";
import Card from "./Card";

export default function Skeleton(props: HTMLProps<HTMLDivElement>) {
    return (
        <Card {...props} className={`${props.className}`} >
            <div className="animate-pulse">
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-64 mb-4"></div>
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-28 mb-4"></div>
            </div>
        </Card>
    )
}