/**
 * All Rights Reserved, Copyright(c) Fujitsu Learning Media Limited
 * 
 * ファイル名：index.js
 */
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
    {//Chap3
      path: '/chap3',
      children: [
        {
          path: 'directive1',
          name: 'directive1',
          component: () => import('@/views/chap3/Directive1View.vue')
        },
        {
          path: 'directive1_ans',
          name: 'directive1_ans',
          component: () => import('@/views/chap3/Directive1AnsView.vue')
        },
        {
          path: 'if_show',
          name: 'if_show',
          component: () => import('@/views/chap3/IfShowView.vue')
        },
        {
          path: 'bind',
          name: 'bind',
          component: () => import('@/views/chap3/BindView.vue')
        },
        {
          path: 'bind_reference',
          name: 'bind_reference',
          component: () => import('@/views/chap3/BindReferenceView.vue')
        },
        {
          path: 'for',
          name: 'for',
          component: () => import('@/views/chap3/ForView.vue')
        },
        {
          path: 'if_else',
          name: 'if_else',
          component: () => import('@/views/chap3/IfElseView.vue')
        },
        {
          path: 'model',
          name: 'model',
          component: () => import('@/views/chap3/ModelView.vue')
        },
        {
          path: 'mustache',
          name: 'mustache',
          component: () => import('@/views/chap3/MustacheView.vue')
        },
        {
          path: 'directive2',
          name: 'directive2',
          component: () => import('@/views/chap3/Directive2View.vue')
        },
        {
          path: 'directive2_ans',
          name: 'directive2_ans',
          component: () => import('@/views/chap3/Directive2AnsView.vue')
        }
      ]
    },
    {//Chap4
      path: '/chap4',
      children: [
        {
          path: 'event',
          name: 'chap4_event',
          component: () => import('@/views/chap4/EventView.vue')
        },
        {
          path: 'ref',
          name: 'chap4_ref',
          component: () => import('@/views/chap4/RefView.vue')
        },
        {
          path: 'reactive',
          name: 'chap4_reactive',
          component: () => import('@/views/chap4/ReactiveView.vue')
        },
        {
          path: 'watch',
          name: 'chap4_watch',
          component: () => import('@/views/chap4/WatchView.vue')
        },
        {
          path: 'computed',
          name: 'chap4_computed',
          component: () => import('@/views/chap4/ComputedView.vue')
        },
        {
          path: 'insert_employee',
          name: 'insert_employee',
          component: () => import('@/views/chap4/InsertEmployeeView.vue')
        },
        {
          path: 'insert_employee_ans',
          name: 'insert_employee_ans',
          component: () => import('@/views/chap4/InsertEmployeeAnsView.vue')
        }
      ]
    },
    {//Chap5
      path: '/chap5',
      children: [
        {
          path: 'find_employee',
          name: 'find_employee',
          component: () => import('@/views/chap5/FindEmployeeView.vue')
        },
        {
          path: 'all_employee',
          name: 'all_employee',
          component: () => import('@/views/chap5/AllEmployeeView.vue')
        },
        {
          path: 'all_employee_ans',
          name: 'all_employee_ans',
          component: () => import('@/views/chap5/AllEmployeeAnsView.vue')
        }
      ]
    },
    {//Chap6
      path: '/chap6',
      children: [
        {
          path: 'find_employee_component',
          name: 'find_employee_component',
          component: () => import('@/views/chap6/FindEmployeeComponentView.vue')
        },
        {
          path: 'component',
          name: 'component',
          component: () => import('@/views/chap6/ComponentView.vue')
        }
      ]
    },
    {//Chap7
      path: '/chap7',
      children: [
        {
          path: 'pinia',
          component: () => import('@/views/chap7/pinia/PiniaView.vue')
        },
        {
          path: 'insert_employee',
          component: () => import('@/views/chap7/insert_employee/InsertEmployeeView.vue')
        },
        {
          path: 'confirm_employee',
          component: () => import('@/views/chap7/insert_employee/ConfirmEmployeeView.vue')
        }
      ]
    },
    {//Chap7/simple_route
      path: '/chap7/simple_route',
      component: () => import('@/views/chap7/simple_route/SimpleRutingView.vue'),
      children: [
        {
          path: 'nest',
          component: () => import('@/views/chap7/simple_route/SimpeNestView.vue')
        },
        {
          path: 'sendParam',
          component: () => import('@/views/chap7/simple_route/SendParamView.vue'),
        },
        {
          path: 'receiveParam/:id',
          name: "receiveParam",
          component: () => import('@/views/chap7/simple_route/ReceiveParamView.vue'),
          props: true
        }
      ]
    },
    {//Chap7 route
      path: '/chap7/route',
      name: 'ruting',
      component: () => import('@/views/chap7/route/RutingView.vue'),
      children: [
        {
          path: 'all_Employee',
          component: () => import('@/views/chap7/route/AllEmployeeView.vue')
        },
        {
          path: 'find_employee/:id',
          name: "find_employee_param",
          component: () => import('@/views/chap7/route/FindEmployeeView.vue'),
          props: true
        },
        {
          path: 'find_employee_component',
          component: () => import('@/views/chap7/route/FindEmployeeComponentView.vue')
        }
      ]
    }
  ]

})

export default router
