import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/chap2/introduction',
      name: 'introduction',
      component: () => import('@/views/chap2/IntroductionView.vue')
    },
    {
      path: '/directive1',
      name: 'directive1',
      component: () => import('@/views/chap3/Directive1View.vue')
    },
    {
      path: '/directive1_ans',
      name: 'directive1_ans',
      component: () => import('@/views/chap3/Directive1AnsView.vue')
    },
    {
      path: '/if_show',
      name: 'if_show',
      component: () => import('@/views/chap3/IfShowView.vue')
    },
    {
      path: '/bind',
      name: 'bind',
      component: () => import('@/views/chap3/BindView.vue')
    },
    {
      path: '/bind_reference',
      name: 'bind_reference',
      component: () => import('@/views/chap3/BindReferenceView.vue')
    },
    {
      path: '/for',
      name: 'for',
      component: () => import('@/views/chap3/ForView.vue')
    },
    {
      path: '/if_else',
      name: 'if_else',
      component: () => import('@/views/chap3/IfElseView.vue')
    },
    {
      path: '/model',
      name: 'model',
      component: () => import('@/views/chap3/ModelView.vue')
    },
    {
      path: '/mustache',
      name: 'mustache',
      component: () => import('@/views/chap3/MustacheView.vue')
    },
    {
      path: '/directive2',
      name: 'directive2',
      component: () => import('@/views/chap3/Directive2View.vue')
    },
    {
      path: '/directive2_ans',
      name: 'directive2_ans',
      component: () => import('@/views/chap3/Directive2AnsView.vue')
    },
    {
      path: '/chap4/event',
      name: 'chap4_event',
      component: () => import('@/views/chap4/EventView.vue')
    },
    {
      path: '/chap4/ref',
      name: 'chap4_ref',
      component: () => import('@/views/chap4/RefView.vue')
    },
    {
      path: '/chap4/reactive',
      name: 'chap4_reactive',
      component: () => import('@/views/chap4/ReactiveView.vue')
    },
    {
      path: '/chap4/watch',
      name: 'chap4_watch',
      component: () => import('@/views/chap4/WatchView.vue')
    },
    {
      path: '/chap4/computed',
      name: 'chap4_computed',
      component: () => import('@/views/chap4/ComputedView.vue')
    },
    {
      path: '/chap4/insert_employee',
      name: 'insert_employee',
      component: () => import('@/views/chap4/InsertEmployeeView.vue')
    },
    {
      path: '/chap5/find_employee',
      name: 'find_employee',
      component: () => import('@/views/chap5/FindEmployeeView.vue')
    },
    {
      path: '/chap5/all_employee',
      name: 'all_employee',
      component: () => import('@/views/chap5/AllEmployeeView.vue')
    },
    {
      path: '/chap6/find_employee_component',
      name: 'find_employee_component',
      component: () => import('@/views/chap6/FindEmployeeComponentView.vue')
    },
    {
      path: '/chap6/component',
      name: 'component',
      component: () => import('@/views/chap6/ComponentView.vue')
    },
    {
      path: '/chap7/simple',
      component: () => import('@/views/chap7/simple/SimpleRutingView.vue'),
      children: [
        {
          path: 'nest',
          component: () => import('@/views/chap7/simple/SimpeNestView.vue')
        },
        {
          path: 'sendParam',
          component: () => import('@/views/chap7/simple/SendParamView.vue'),
        },
        {
          path: 'receiveParam/:id',
          name:"receiveParam",
          component: () => import('@/views/chap7/simple/ReceiveParamView.vue'),
          props: true
        }
      ]

    },
   {
      path: '/chap7',
      name: 'ruting',
      component: () => import('@/views/chap7/RutingView.vue'),
      children: [
        {
          path: 'all_Employee',
          component: () => import('@/views/chap7/AllEmployeeView.vue')
        },
        {
          path: 'find_employee/:id',
          name:"find_employee_param",
          component: () => import('@/views/chap7/FindEmployeeView.vue'),
          props: true
        },
        {
          path: 'find_employee_component',
          component: () => import('@/views/chap7/FindEmployeeComponentView.vue')
        }
      ]
    }
 ]

})

export default router
