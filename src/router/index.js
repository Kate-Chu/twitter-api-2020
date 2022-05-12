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
  // 後台
  {
    path: '/admin',
    name: 'admin',
    // component: () => import('../views/Signin.vue')
    component: Signin
  },
  {
    path: '/twitter',
    name: 'twitter',
    component: Twitter
  },
  {
    path: '/users/:id/tweets',
    name: 'user-tweets',  
    component: () => import('../views/User.vue'),
    children:[
      {
        path:'',
        component: () => import('../views/UserTweets.vue')
      },
      {
        path: 'replies',
        component: () => import('../views/UserReply.vue')
      },
      {
        path: 'likes',
        component: () => import('../views/UserLike.vue')
      },

    ]
  },
  {
    path: '/users/:id/follow',
    name: 'user-follow',
    component: () => import('../views/UserFollow.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/UserFollower.vue')
      },
      {
        path: 'following',
        component: () => import('../views/UserFollowing.vue')
      }  
    ]
  },
  {
    path:'/users/:id',
    redirect:'/users/:id/tweets'
  },
  {
    path: '/admin/tweets',
    name: 'admin-tweets',
    component: () => import('../views/AdminTweetsList.vue')
  },
  {
    path: '/admin/users',
    name: 'admin-users',
    component: () => import('../views/AdminUsers.vue')
  },
  // NotFound
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
