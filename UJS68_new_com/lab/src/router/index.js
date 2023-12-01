/**
 * All Rights Reserved, Copyright(c) Fujitsu Learning Media Limited
 * 
 * ファイル名：index.js
 */

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
      path: '/answers/ans3/question',
      component: () => import('@/views/answers/ans3/QuestionView.vue')
    },
    {
      path: '/answers/ans3/all_item',
      component: () => import('@/views/answers/ans3/AllItemView.vue')
    },
    {
      path: '/answers/ans4/insert_item_opt',
      component: () => import('@/views/answers/ans4/InsertItemOptView.vue')
    },
    {
      path: '/answers/ans4/insert_item',
      component: () => import('@/views/answers/ans4/InsertItemView.vue')
    },
    {
      path: '/answers/ans5/search_item',
      component: () => import('@/views/answers/ans5/SearchItemView.vue')
    },
    {
      path: '/answers/ans5/all_item',
      component: () => import('@/views/answers/ans5/AllItemView.vue')
    },
    {
      path: '/answers/ans7',
      component: () => import('@/views/answers/ans7/AppBaseView.vue'),
      children: [
        {
          path: 'question',
          component: () => import('@/views/answers/ans7/QuestionView.vue')
        },
        {
          path: 'insert_item',
          component: () => import('@/views/answers/ans7/InsertItemView.vue')
        },
        {
          path: 'search_item',
          component: () => import('@/views/answers/ans7/SearchItemView.vue')
        },
        {
          path: 'all_item',
          component: () => import('@/views/answers/ans7/AllItemView.vue')
        },
        {
          path: 'top',
          component: () => import('@/views/answers/ans7/TopView.vue')
        },
        {
          path: 'shopping_cart',
          component: () => import('@/views/answers/ans7/ShoppingCartView.vue')
        },
       {
          path: 'detail_item',
          component: () => import('@/views/answers/ans7/DetailItemView.vue')
        }
      ]
    }
  ]
})

export default router
