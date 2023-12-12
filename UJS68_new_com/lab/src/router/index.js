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
      path: '/labs/lab3/question',
      component: () => import('@/views/labs/lab3/QuestionView.vue')
    },
    {
      path: '/labs/lab3op1/all_item',
      component: () => import('@/views/labs/lab3op1/AllItemView.vue')
    },
    {
      path: '/labs/lab4/insert_item',
      component: () => import('@/views/labs/lab4/InsertItemView.vue')
    },
    {
      path: '/labs/lab4op1/insert_item',
      component: () => import('@/views/labs/lab4op1/InsertItemView.vue')
    },
    {
      path: '/labs/lab4op2/insert_item_opt',
      component: () => import('@/views/labs/lab4op2/InsertItemOptView.vue')
    },
    {
      path: '/labs/lab5/search_item',
      component: () => import('@/views/labs/lab5/SearchItemView.vue')
    },
    {
      path: '/labs/lab5op1/all_item',
      component: () => import('@/views/labs/lab5op1/AllItemView.vue')
    },
    {
      path: '/labs/lab6/question',
      component: () => import('@/views/labs/lab6/QuestionView.vue')
    },
    {
      path: '/labs/lab6op1/search_item',
      component: () => import('@/views/labs/lab6op1/SearchItemView.vue')
    },
    {
      path: '/labs/lab7',
      component: () => import('@/views/labs/lab7/AppBaseView.vue'),
      children: [
        {
          path: 'question',
          component: () => import('@/views/labs/lab7/QuestionView.vue')
        },
        {
          path: 'insert_item',
          component: () => import('@/views/labs/lab7/InsertItemView.vue')
        },
        {
          path: 'search_item',
          component: () => import('@/views/labs/lab7/SearchItemView.vue')
        },
        {
          path: 'all_item',
          component: () => import('@/views/labs/lab7/AllItemView.vue')
        },
        {
          path: 'top',
          component: () => import('@/views/labs/lab7/TopView.vue')
        },
        {
          path: 'shopping_cart',
          component: () => import('@/views/labs/lab7/ShoppingCartView.vue')
        },
        {
          path: 'detail_item/:id',
          name: "detail_item_params_ans",
          component: () => import('@/views/labs/lab7/DetailItemView.vue'),
          props: true
        }
      ]
    },
    {
      path: '/answers/ans3/question',
      component: () => import('@/views/answers/ans3/QuestionView.vue')
    },
    {
      path: '/answers/ans3op1/all_item',
      component: () => import('@/views/answers/ans3op1/AllItemView.vue')
    },
    {
      path: '/answers/ans4/insert_item',
      component: () => import('@/views/answers/ans4/InsertItemView.vue')
    },
    {
      path: '/answers/ans4op1/insert_item',
      component: () => import('@/views/answers/ans4op1/InsertItemView.vue')
    },
    {
      path: '/answers/ans4op2/insert_item_opt',
      component: () => import('@/views/answers/ans4op2/InsertItemOptView.vue')
    },
    {
      path: '/answers/ans5/search_item',
      component: () => import('@/views/answers/ans5/SearchItemView.vue')
    },
    {
      path: '/answers/ans5op1/all_item',
      component: () => import('@/views/answers/ans5op1/AllItemView.vue')
    },
    {
      path: '/answers/ans6/question',
      component: () => import('@/views/answers/ans6/QuestionView.vue')
    },
    {
      path: '/answers/ans6op1/search_item',
      component: () => import('@/views/answers/ans6op1/SearchItemView.vue')
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
          path: 'detail_item/:id',
          name: "detail_item_params_ans",
          component: () => import('@/views/answers/ans7/DetailItemView.vue'),
          props: true
        }
      ]
    }
  ]
})

export default router
