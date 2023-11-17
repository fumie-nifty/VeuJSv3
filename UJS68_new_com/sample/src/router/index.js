import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/directive1',
      name: 'directive1',
      component: () => import('/src/views/chap3/Directive1View.vue')
    },
    {
      path: '/directive1_ans',
      name: 'directive1_ans',
      component: () => import('/src/views/chap3/Directive1AnsView.vue')
    },
    {
      path: '/v-if_v-show',
      name: 'v-if_v-show',
      component: () => import('/src/views/chap3/IfShowView.vue')
    }
  ]

})

export default router
