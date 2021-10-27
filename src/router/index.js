import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }, {
    path: '/luna-nova',
    name: 'Luna Nova',
    component: () => import(/* webpackChunkName: "about" */ '../views/LunaNova.vue')
  }, {
    path: '/luna-nova/chapter-1',
    name: 'Luna Nova Chapter 1',
    component: () => import(/* webpackChunkName: "about" */ '../views/LunaNova/Chapter1.vue')
  }
]

const router = createRouter({
  mode: 'history',
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router