import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.page.vue';

Vue.use(VueRouter)

const routes = [
  {
    path:'',
    name:'home-page',
    component: Home
  },
  {
    path: '/posts',
    name: 'posts-page',
    component:() => import('../views/Posts.page.vue')
  },
  {
    path: '/todos',
    name: 'todos-page',
    component: () => import('../views/Todos.page.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
