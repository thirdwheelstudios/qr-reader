import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"

const Home = () => import("../views/HomeView.vue")
const NotFound = () => import("../views/NotFoundView.vue")

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
] as RouteRecordRaw[]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
