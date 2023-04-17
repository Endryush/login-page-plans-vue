import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/LoginView.vue'
import Signup from '@/views/SignupView.vue'
import Home from '@/views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path:'/:catchAll(.*)',
    redirect: '/login'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
