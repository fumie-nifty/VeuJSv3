import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/insertItem',
    name: 'InsertItem',
    component: () => import('../views/Insert.vue')
  },
  {
    path: '/shopitem',
    name: 'ShopItem',
    component: () => import('../views/ShopItem.vue')
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import('../views/Detail.vue')
  },
  {
    path: '/searchItem',
    name: 'SearchItem',
    component: () => import('../views/Search.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
