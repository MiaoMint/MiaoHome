import { HTMLProps } from "react";

interface TitleProps extends HTMLProps<HTMLDivElement> {
    icon: JSX.Element
    href: string
}

export default function Title(props: TitleProps) {
    return (
        <div {...props} className={`${props.className} flex items-center mb-8 ml-4`}>
            <a href={props.href} className="mr-2" target="_blank">
                {props.icon}
            </a>
            <h1 className="text-3xl">{props.children}</h1>
        </div>
    )
}