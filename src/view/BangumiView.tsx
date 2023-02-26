import { Film } from "lucide-react";
import { useEffect, useState } from "react";
import request from "umi-request";
import config from "../../config";
import Title from "../components/Title";

export default function BangumiView() {
    const { BilibiliUid } = config
    const [bangumis, setBangumis] = useState<BangumiCardProps[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<Error>()

    let page = 1
    useEffect(() => {
        request(`/bili/x/space/bangumi/follow/list?type=1&pn=${page}&ps=15&vmid=${BilibiliUid}`)
            .then((res) => {
                if (res && res.code == 0) {
                    setBangumis(res.data.list)
                    return
                } else {
                    setError(res.message)
                }
            }).catch((err) => {
                setError(err)
            }).finally(() => {
                setLoading(false)
            })
    }, [])
    return (
        <>
            <Title icon={<Film size={30} />} href={`https://space.bilibili.com/${BilibiliUid}`} >Bangumi</Title>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {
                    bangumis.map((bangumi, index) => (
                        <BangumiCard key={index} {...bangumi} />
                    ))
                }
                {
                    loading ? <Skeletons></Skeletons> : error ? <div >{error.message}</div> : !bangumis.length ? <Skeletons></Skeletons> : null
                }
            </div>
        </>
    )
}

interface BangumiCardProps {
    title: string
    cover: string
    url: string
}


function BangumiCard(props: BangumiCardProps) {
    return (
        <a href={props.url} title={props.title}>
            <img
                src={props.cover}
                alt={props.title}
                className="mb-2 rounded-xl hover:ring-4 hover:ring-slate-400 transition-all"
                referrerPolicy="no-referrer" />
            <h2 className="break-all flex items-center mb-3"> {props.title} </h2>
        </a>
    )
}

function Skeletons() {
    return (
        <>
            <Skeleton></Skeleton>
            <Skeleton></Skeleton>
            <Skeleton></Skeleton>
        </>
    )
}

function Skeleton() {
    return (
        <div className="animate-pulse">
            <div className="h-52 md:h-80 w-full bg-gray-200 rounded-xl dark:bg-gray-700 mb-4"></div>
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-1/2 mb-4"></div>
        </div>
    )
}