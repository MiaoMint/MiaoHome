import Card from "../components/Card"
import config from "../../config";
import { Github, Book, Youtube, Twitter } from "lucide-react";
import { useEffect, useState } from "react";
import request from "umi-request";
import { marked } from "marked";
import Skeleton from "../components/Skeleton";
import Animation from "../components/Animation";

export default function HomeView() {
  const { Name, Desc, HomeMD, GithubUsername, Avatar } = config;
  const [introduce, setIntroduce] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    if (!HomeMD) {
      return
    }
    request.get(
      HomeMD === "Github" ?
        `https://raw.githubusercontent.com/${GithubUsername}/${GithubUsername}/main/readme.md`
        : HomeMD
    ).then((res) => {
      setIntroduce(marked.parse(res))
    }).catch((err) => {
      setIntroduce(err)
    }).finally(() => {
      setLoading(false)
    })
  }, [])

  return (
    <Animation id="home">
      <div className="flex flex-col justify-between items-center mb-10 p-4">
        <img src={Avatar} title={Name} className="h-32 w-32 rounded-full ring-2 ring-slate-400 mb-3" />
        <div className="text-center mt-4 md:mt-0  flex flex-col w-3/4 md:w-1/2">
          <h1 className="text-2xl font-semibold mb-2">{Name}</h1>
          <p className="text-gray-500 ">{Desc}</p>
          <div className="mt-2 flex justify-center ">
            {
              getSocialLinks().map((link, index) => (
                <IconLink key={index} href={link.href} icon={link.icon} />
              ))
            }
          </div>
        </div>
      </div>
      {
        HomeMD ?
          loading ?
            <Skeleton></Skeleton>
            :
            < Card
              className="prose prose-slate max-w-none"
              dangerouslySetInnerHTML={{ __html: introduce }} />
          : null
      }
    </Animation>
  )
}

function getSocialLinks(): { href: string, icon: JSX.Element }[] {
  const { GithubUsername, BlogUrl, YoutubeUrl, TwitterUrl } = config
  const result = []
  if (GithubUsername) {
    result.push({
      href: `https://github.com/${GithubUsername}`,
      icon: <Github />,
    })
  }

  if (BlogUrl) {
    result.push({
      href: BlogUrl,
      icon: <Book />,
    })
  }

  if (YoutubeUrl) {
    result.push({
      href: YoutubeUrl,
      icon: <Youtube />,
    })
  }

  if (TwitterUrl) {
    result.push({
      href: TwitterUrl,
      icon: <Twitter />,
    })
  }

  return result;
}

function IconLink({ href, icon }: { href: string, icon: JSX.Element }) {
  return (
    <a
      className="m-1 md-0 p-1 border rounded-lg bg-slate-200 hover:bg-slate-300"
      href={href} target="_blank" rel="noreferrer">
      {icon}
    </a>
  )
}

