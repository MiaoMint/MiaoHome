import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import BlogViewVue from '@/views/BlogView.vue'
import GithubViewVue from '@/views/GithubView.vue'
import BangumiViewVue from '@/views/BangumiView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/github',
      name: 'GithubView',
      component: GithubViewVue
    },
    {
      path: '/blog',
      name: 'BlogView',
      component: BlogViewVue
    },
    {
      path: '/bangumi',
      name: 'BangumiView',
      component: BangumiViewVue
    }
  ]
})

export default router
