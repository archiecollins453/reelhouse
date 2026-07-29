import { createRouter, createWebHistory } from 'vue-router'
import DiscoverView from '@/views/DiscoverView.vue'
import MovieView from '@/views/MovieView.vue'
import ComingSoonView from '@/views/ComingSoonView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: DiscoverView
  },
  {
    path: '/movie/:id',
    name: 'movie-detail',
    component: MovieView
  },
  {
    path: '/coming-soon',
    name: 'coming-soon',
    component: ComingSoonView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
