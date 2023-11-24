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
