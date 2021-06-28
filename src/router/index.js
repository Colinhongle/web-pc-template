/*
 * @Author: wgj
 * @Date: 2021-05-31 11:05:08
 * @LastEditTime: 2021-06-28 15:29:23
 * @LastEditors: wgj
 * @Description: 
 */
// import Vue from 'vue'
// import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

// Vue.use(VueRouter)

// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   },
//   {
//     path: '/about',
//     name: 'About',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
// ]

// const router = new VueRouter({
//   routes
// })

// export default router

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import demoRouter from './modules/demoRouter'

/**
 * constantRoutes
 * 不需要权限验证的
 */
export const constantRoutes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    meta: {
      title: '首页',
      roles: ['admin'] // or you can only set roles in sub nav
    }
  },
  demoRouter
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import('../views/About.vue')
  // }
]

/**
 * asyncRoutes
 * 需要权限验证的
 */
export const asyncRoutes = [

]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
