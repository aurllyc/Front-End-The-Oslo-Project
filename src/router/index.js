import { createRouter, createWebHistory } from 'vue-router'

import mahasiswaRoutes from './mahasiswa'

import dosenRoutes from './dosen'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',

      redirect: '/mahasiswa/login',
    },

    ...mahasiswaRoutes,

    ...dosenRoutes,
  ],
})

export default router
