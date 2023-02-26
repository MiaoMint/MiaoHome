import { Route, Routes, Link, useLocation, Outlet } from "react-router-dom";
import { Home, Github, Book, Film } from "lucide-react";
import BangumiView from "./view/BangumiView";
import BlogView from "./view/BlogView";
import GithubView from "./view/GithubView";
import HomeView from "./view/HomeView";

export default function App() {
  return (
    <>
      <div className="p-3 md:w-3/5 m-auto pt-40 pb-40">
        <Routes>
          <Route path="/" element={<HomeView />}></Route>
          <Route path="/github" element={<GithubView />}></Route>
          <Route path="/blog" element={<BlogView />}></Route>
          <Route path="/bangumi" element={<BangumiView />}></Route>
        </Routes>
      </div>
      <Nav />
    </>
  )
}


function Nav() {
  const links = [
    { to: "/", text: "Home", icon: Home },
    { to: "/github", text: "Github", icon: Github },
    { to: "/blog", text: "Blog", icon: Book },
    { to: "/bangumi", text: "Bangumi", icon: Film },
  ]
  const location = useLocation()
  return (
    <div className="fixed shadow-sm bottom-0 left-0 right-0 md:bottom-5 md:left-1/2 md:right-auto md:-translate-x-1/2 h-24 border md:rounded-3xl rounded-none bg-white bg-opacity-70 backdrop-blur-xl">
      <ul className="flex justify-center items-center">
        {links.map((link, index) => (
          <li key={index}
            className={
              `h-20 w-20 m-2 rounded-2xl hover:bg-slate-200 transition-all ${location.pathname === link.to ? "bg-slate-200" : ""}`}>
            <Link to={link.to} className="flex h-full flex-col justify-center items-center transition-all overflow-hidden">
              <link.icon className="mb-2" />
              <span>{link.text}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}