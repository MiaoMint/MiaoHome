import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GithubView from '../views/GithubView.vue'
import BlogView from "../views/BlogView.vue"
import BangumiView from "../views/BangumiView.vue"

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/blog',
      name: 'blog',
      component: BlogView

    },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/github',
      name: 'github',
      component: GithubView
    },
    {
      path: '/bangumi',
      name: 'bangumi',
      component: BangumiView
    }
  ]
})

export default router
