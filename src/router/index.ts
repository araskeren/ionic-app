import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/home'
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
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router