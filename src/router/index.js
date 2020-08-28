import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Order from '../views/Order.vue'
import Register from '../views/Register.vue'
import Shop from '../views/Shop.vue'
import Details from '../views/Details.vue'
import History from '../views/History.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter: (to, from, next) => {
      let isAuthenticated = localStorage.access_token
      if (isAuthenticated) next({ name: 'Home' })
      else next()
    }
  },
  {
    path: '/products',
    name: 'Shop',
    component: Shop
  },
  {
    path: '/products/:id',
    name: 'Details',
    component: Details
  },
  {
    path: '/order',
    name: 'Order',
    component: Order,
    beforeEnter: (to, from, next) => {
      let isAuthenticated = localStorage.access_token
      if (!isAuthenticated) next({ name: 'Login' })
      else next()
    }
  },
  {
    path: '/order-history',
    name: 'History',
    component: History
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
