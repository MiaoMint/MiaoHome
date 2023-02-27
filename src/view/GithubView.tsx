import config from "../../config"
import { Github, Star, GitBranch, ExternalLink } from "lucide-react";
import Card from "../components/Card";
import { HTMLProps, useEffect, useState } from "react";
import request from "umi-request";
import Title from "../components/Title";
import Skeleton from "../components/Skeleton";
import Animation from "../components/Animation";

export default function GithubView() {
  const { GithubUsername } = config
  const [repos, setRepos] = useState<Array<GithubCardProps>>()
  const [error, setError] = useState<Error>()
  useEffect(() => {
    request.get(`https://api.github.com/users/${GithubUsername}/repos?sort=updated`)
      .then((res: GithubCardProps[]) => {
        setRepos(res)
      }).catch((err) => {
        setError(err)
      })
  }, [])

  return (
    <Animation id="github">
      <Title icon={<Github size={30} />} href={`https://github.com/${GithubUsername}`} >Github</Title>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {
          error ? <div >{error.message}</div> : repos ?
            repos.map((repo, index) => (
              <GithubCard {...repo} key={index} />
            ))
            :
            new Array(8).fill(1).map((_, i) => (
              <Skeleton key={i}></Skeleton>
            ))
        }
      </div>
    </Animation>
  )
}


interface GithubCardProps extends HTMLProps<HTMLDivElement> {
  name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  fork: boolean;
  homepage: string;
  language: string;
}


function GithubCard(props: GithubCardProps) {
  const language = String(props.language).toLowerCase()
  return (
    <Card className=" relative bg-opacity-80 md:hover:scale-105 transition-all" >
      <div className="absolute bg-white -z-20 left-0 right-0 bottom-0 top-0 rounded-2xl">
        <div className="absolute right-3 bottom-3">
          <img src={`https://skillicons.dev/icons?i=${language}&theme=light`} className="ml-1 rounded " alt={language} />
        </div>
      </div>
      <div className="flex justify-between z-50">
        <div className="flex justify-between flex-col">
          <h2 className="text-lg font-bold break-all flex items-center mb-3">
            <a href={props.html_url} target="_blank" title={props.name}  >
              {props.name}
            </a>
          </h2>
          <p className="text-gray-500">{props.description}</p>
          <div className="flex items-center mt-2">
            <div className="flex items-center mr-4 text-slate-400">
              <Star className="mr-1" size={18} />
              <span>{props.stargazers_count}</span>
            </div>
            <div className="flex items-center text-slate-400">
              <GitBranch className="mr-1" size={18} />
              <span>{props.forks_count}</span>
            </div>
          </div>
        </div>
        <div className="flex justify-end items-start w-1/6">
          {
            props.homepage ? <a href={props.homepage} target="_blank" title={props.name} >
              <ExternalLink className="mr-1" size={18} />
            </a> : null
          }

        </div>
      </div>
    </Card>
  )
}


