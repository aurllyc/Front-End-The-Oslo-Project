const dosenRoutes = [
  {
    path: '/dosen/login',

    name: 'dosen-login',

    component: () => import('@/views/dosen/auth/DosenLoginView.vue'),
  },

  {
    path: '/dosen/dashboard',

    name: 'dosen-dashboard',

    component: () => import('@/views/dosen/dashboard/DosenDashboardView.vue'),
  },
]

export default dosenRoutes
