import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const Scan = () => import('../views/ScanView.vue')
const History = () => import('../views/HistoryView.vue')
const About = () => import('../views/AboutView.vue')
const PrivacyPolicy = () => import('../views/PrivacyPolicyView.vue')
const NotFound = () => import('../views/NotFoundView.vue')

const routes = [
  {
    path: '/',
    name: 'scan',
    component: Scan,
  },
  {
    path: '/history',
    name: 'history',
    component: History,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/privacy-policy',
    name: 'privacy-policy',
    component: PrivacyPolicy,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
  },
] as RouteRecordRaw[]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
