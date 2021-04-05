import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'
import Order from '../views/Order.vue'
import Car from '../views/Car.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Phones from '../views/Phones.vue'
import Apple from '../views/Apple.vue'

const routes = [
  {
    path: '',
    name: 'Index',
    component: Index
  },
  {
    path:'/index',
    component:Index
  },
  {
    path: '/order',
    name: 'Order',
    component:Order,
    // component: () => import(/* webpackChunkName: "about" */ '../views/Order.vue'),
  },
  {
    path:'/car',
    name:'Car',
    component:Car
  },
  {
    path:'/register',
    name:'Register',
    component:Register
  },
  {
    path:'/login',
    name:'Login',
    component:Login
  },
  {
    path:'/Phones',
    name:'Phones',
    component:Phones,
  },
  {
    path:'/apple',
    name:'Apple',
    component:Apple,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
