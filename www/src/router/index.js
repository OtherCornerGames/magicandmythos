import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Login from '@/components/Login'
import Register from '@/components/Register'
import AdminDashboard from '@/components/AdminDashboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/admin',
      name: 'AdminDashboard',
      component: AdminDashboard
    }
  ]
})
