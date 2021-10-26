import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Teleport from '../views/Teleport.vue'
import Emit from '../views/Emit.vue'
import StoreDemo from '../views/StoreDemo.vue'
// import DataLoad from '../views/DataLoad.vue'
import DataLoadWithSearch from '../views/DataLoadWithSearch.vue'
import Utils from '../components/Utils.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/teleport',
    name: 'teleport',
    component: Teleport
  },
  {
    path: '/dataload',
    name: 'dataload',
    // component: DataLoad
    component: DataLoadWithSearch
  },
  {
    path: '/utils',
    name: 'utils',
    component: Utils
  },
  {
    path: '/store',
    name: 'store',
    component: StoreDemo
  },
  {
    path: '/emit',
    name: 'emit',
    component: Emit
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
