import Vue from 'vue'
import VueRouter from 'vue-router'
import Signin from '../views/Signin.vue'
import NotFound from '../views/NotFound.vue'
import Twitter from '../views/Twitter.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/signin'
  },
  {
    path: '/signin',
    name: 'sign-in',
    component: Signin
  },
  {
    path: '/regist',
    name: 'regist',
    component: () => import('../views/Regist.vue')
  },
  {
    path: '/setting',
    name: 'setting',
    component: () => import('../views/Setting.vue')
  },
  {
    path: '/twitter',
    name: 'twitter',
    component: Twitter
  },
  {
    path: '*',
    name: 'not-fount',
    component: NotFound
  }
]

const router = new VueRouter({
  routes
})

export default router
