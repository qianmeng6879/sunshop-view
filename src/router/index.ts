import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/RegisterView.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/ShopCart.vue')
  },
  {
    path: '/user',
    name: 'userCenter',
    component: () => import('../views/UserCenter/UserCenter.vue'),
    children: [
      {
        path: 'center',
        name: 'userHome',
        component: () => import('@/views/UserCenter/UserCenterHome.vue')
      },
      {
        path: 'address',
        name: 'userAddress',
        component: () => import('@/views/UserCenter/UserCenterAddress.vue')
      },
      {
        path: 'order',
        name: 'userOrder',
        component: () => import('@/views/UserCenter/UserCenterOrder.vue')
      },
      {
        path: 'favorite',
        name: 'userFavorite',
        component: () => import('@/views/UserCenter/UserCenterFavorite.vue')
      },
      {
        path: 'recharge',
        name: 'userRecharge',
        component: () => import('@/views/UserCenter/UserCenterRecharge.vue')
      },
    ]
  },
  {
    path: '/product/:id',
    name: 'productDetail',
    component: () => import('@/views/ProductDetail.vue')
  },
  {
    path: '/order/create/:id',
    name: 'createOrder',
    component: () => import('@/views/CreateOrder.vue')
  },
  {
    path: '/order/detail/:id',
    name: 'orderDetail',
    component: () => import('@/views/OrderDetail.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('@/views/admin/Admin.vue')
  },
  {
    path: '/:cathchAll(.*)',
    name: '404',
    component: () => import('@/views/404.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
