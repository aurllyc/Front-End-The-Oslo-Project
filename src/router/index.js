import { createRouter, createWebHistory } from 'vue-router'

import MahasiswaLoginView from '@/views/mahasiswa/auth/MahasiswaLoginView.vue'
import MahasiswaDashboardView from '@/views/mahasiswa/dashboard/MahasiswaDashboardView.vue'

const routes = [
  {
    path: '/',
    redirect: '/mahasiswa/auth/login',
  },

  {
    path: '/mahasiswa/auth/login',
    name: 'mahasiswa-login',
    component: MahasiswaLoginView,
  },

  {
    path: '/mahasiswa/dashboard',
    name: 'mahasiswa-dashboard',
    component: MahasiswaDashboardView,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
