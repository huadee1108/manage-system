import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Login from './views/Login'
import noFind from './views/404'

Vue.use(Router)
const router = new Router({
  mode: 'history',
  routes: [
    { path: '*', name: '/404', component: noFind },
    { path: '/login', name: 'login', component: Login },
    { path: '/', redirect: '/index' },
    {
      path: '/index',
      name: 'index',
      component: Index
    }
  ]
})

// 添加路由守卫
router.beforeEach((to, from, next) => {
  const isLogin = !!localStorage.token
  if (to.path === '/login') {
    next()
  } else {
    isLogin ? next() : next('/login')
  }
})

export default router
