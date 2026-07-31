import { createRouter, createWebHistory } from 'vue-router'
import CinemaView from '@/views/CinemaView.vue'
import MovieView from '@/views/MovieView.vue'
import ComingSoonViewLibrary from '@/views/ComingSoonViewLibrary.vue';
import ComingSoonViewDiscover from '@/views/ComingSoonViewDiscover.vue';
import ComingSoonViewTickets from '@/views/ComingSoonViewTickets.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: CinemaView
  },
  {
    path: '/movie/:id',
    name: 'movie-detail',
    component: MovieView
  },
  {
    path: '/coming-soon-discover',
    name: 'coming-soon-discover',
    component: ComingSoonViewDiscover
  },
  {
    path: '/coming-soon-library',
    name: 'coming-soon-library',
    component: ComingSoonViewLibrary
  },
  {
    path: '/coming-soon-tickets',
    name: 'coming-soon-tickets',
    component: ComingSoonViewTickets
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
    scrollBehavior() {
    return { top: 0 }
  },
})

export default router
