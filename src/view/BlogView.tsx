import Title from "../components/Title";
import { Book } from "lucide-react";
import config from "../../config";
import request from "umi-request";
import { extractFromXml } from '@extractus/feed-extractor'
import { useEffect, useState } from "react";
import Card from "../components/Card";
import Skeleton from "../components/Skeleton";
import Animation from "../components/Animation";



export default function BlogView() {
    const { BlogUrl, BlogRSS } = config
    const [blogs, setBlogs] = useState<BlogProps[]>([])
    const [error, setError] = useState<Error>()

    useEffect(() => {
        request.get(BlogRSS).then((res) => {
            setBlogs((extractFromXml(res) as any).entries)
        }).catch((err) => {
            setError(err)
        })
    }, [])

    return (
        <Animation id="blog">
            <Title icon={<Book size={30} />} href={BlogUrl} >Blog</Title>
            {
                blogs.map((blog, index) => (
                    <BlogCard key={index} {...blog} />
                ))
            }
            {
                error ? <div >{error.message}</div> : !blogs.length ?
                    new Array(4).fill(1).map((_, i) => (
                        <Skeleton key={i} className="mb-3"></Skeleton>
                    ))
                    : null
            }
        </Animation >
    )
}

interface BlogProps {
    title: string
    link: string
    published: string
    description: string
}

function BlogCard(props: BlogProps) {
    return (
        <Card className="mb-3 md:hover:scale-105 transition-all">
            <a href={props.link} target="_blank" title={props.title}>
                <h2 className="text-lg font-bold break-all flex items-center mb-3"> {props.title} </h2>
                <p className="text-gray-500 text-sm mb-3"> {props.description} </p>
                <p className="text-gray-500 text-sm mb-3"> {props.published.substring(0, 10)} </p>
            </a>
        </Card>
    )
}