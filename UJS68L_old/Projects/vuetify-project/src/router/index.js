import Vue from 'vue'
import VueRouter from 'vue-router'
import Insert from '../views/Insert.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Insert',
    component: Insert
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import(/* webpackChunkName: "about" */ '../views/Search.vue')
  },
  {
    path:'/searchtable',
    name:'Table',
    component: () => import(/* webpackChunkName: "about" */ '../views/Table.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
