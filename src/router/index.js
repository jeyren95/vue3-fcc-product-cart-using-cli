import { createRouter, createWebHistory } from 'vue-router'
// using these .vue files allow us to put our html, css, javascript in the same file
// all these are parsed and bundled by the tools that vue cli sets up for us
import Home from '../views/Home.vue'
import Products from '../views/Products.vue'
import PastOrders from '../views/PastOrders.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/past-orders',
    name: 'Past Orders',
    component: PastOrders
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
