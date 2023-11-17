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
      path: '/if_show',
      name: 'if_show',
      component: () => import('/src/views/chap3/IfShowView.vue')
    },
    {
      path: '/bind',
      name: 'bind',
      component: () => import('/src/views/chap3/BindView.vue')
    },
    {
      path: '/bind_reference',
      name: 'bind_reference',
      component: () => import('/src/views/chap3/BindReferenceView.vue')
    },
    {
      path: '/for',
      name: 'for',
      component: () => import('/src/views/chap3/ForView.vue')
    },
    {
      path: '/if_else',
      name: 'if_else',
      component: () => import('/src/views/chap3/IfElseView.vue')
    },
    {
      path: '/model',
      name: 'model',
      component: () => import('/src/views/chap3/ModelView.vue')
    },
    {
      path: '/mustache',
      name: 'mustache',
      component: () => import('/src/views/chap3/MustacheView.vue')
    },
    {
      path: '/directive2',
      name: 'directive2',
      component: () => import('/src/views/chap3/Directive2View.vue')
    },
    {
      path: '/directive2_ans',
      name: 'directive2_ans',
      component: () => import('/src/views/chap3/Directive2AnsView.vue')
    }
 ]

})

export default router
