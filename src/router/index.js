import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About', 
    component: () => import('../views/About.vue')
  },
  {
    path: '/solar',
    name: 'Solar', 
    component: () => import('../views/Solar.vue')
  },
  /* {
    path: '/about',
    name: 'About', 
    component: () => import('../views/About.vue')
  },
  {
    path: '/about',
    name: 'About', 
    component: () => import('../views/About.vue')
  }, */
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
