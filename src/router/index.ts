import { useAuthStore } from '@/store/auth';
import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/login',
    component: () => import ('@/views/LoginPage.vue')
  },
  {
    path: '/home',
    component: () => import ('@/views/HomePage.vue')
  },
  {
    path: '/post',
    component: () => import ('@/views/page/PostPage.vue')
  },
  {
    path: '/post/:id',
    component: () => import ('@/views/page/DetailPostPage.vue')
  },
  {
    path: '/test',
    component: () => import ('@/views/TestPage.vue')
  },
  {
    path: '/simple-calculator',
    component: () => import ('@/views/SimpleCalculatorPage.vue')
  },
  {
    path: '/folder/:id',
    component: () => import ('@/views/FolderPage.vue')
  },
  {
    path: '/logout',
    component: () => import ('@/views/LogoutPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if(to.path === '/login'){
    next()
  }else{
    if(checkLogin()){
      next()
    }
  }
})

const checkLogin = ():boolean => {
  if(!localStorage.getItem('user')){
    router.push('/login')
    return false
  }
  return true
}

export default router