import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('./containers/DefaultContainer'),
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: () => import('./views/Dashboard')
        }
      ]
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('./views/Login')
    }
  ]
})
