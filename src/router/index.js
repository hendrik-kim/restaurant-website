// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: 'home',
        name: 'HomeAlias',
        component: () => import('@/views/Home.vue'),
      },
    ],
  },
  {
    path: '/contact',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Contact',
        component: () => import('@/views/Contact.vue'),
      },
    ],
  },
  {
    path: '/order',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Menu',
        component: () => import('@/views/Menu.vue'),
      },
    ],
  },
  {
    path: '/gallery',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Gallery',
        component: () => import('@/views/Gallery.vue'),
      },
    ],
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
