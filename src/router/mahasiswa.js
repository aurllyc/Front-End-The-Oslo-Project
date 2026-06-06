const mahasiswaRoutes = [
  //  AUTH Routes
  {
    path: '/mahasiswa/login',

    name: 'mahasiswa-login',

    component: () => import('@/views/mahasiswa/auth/MahasiswaLoginView.vue'),
  },

  {
    path: '/mahasiswa/register',

    name: 'mahasiswa-register',

    component: () => import('@/views/mahasiswa/auth/MahasiswaRegisterView.vue'),
  },

  //  Forgot Password Route
  {
    path: '/mahasiswa/forgot-password',
    name: 'mahasiswa-forgot-password',
    component: () => import('@/views/mahasiswa/auth/MahasiswaForgotPasswordView.vue'),
  },

  // Reset Password Route
  {
    path: '/mahasiswa/reset-password',
    name: 'mahasiswa-reset-password',
    component: () => import('@/views/mahasiswa/auth/MahasiswaResetPasswordView.vue'),
  },

  // Verify Email Route
  {
    path: '/mahasiswa/verify-email',
    name: 'mahasiswa-verify-email',
    component: () => import('@/views/mahasiswa/auth/MahasiswaVerifyEmailView.vue'),
  },

  //  DASHBOARD Route
  {
    path: '/mahasiswa',

    component: () => import('@/layouts/mahasiswa/MahasiswaDashboardLayout.vue'),

    children: [
      {
        path: 'dashboard',

        name: 'mahasiswa-dashboard',

        component: () => import('@/views/mahasiswa/dashboard/MahasiswaDashboardView.vue'),
      },
    ],
  },
]

export default mahasiswaRoutes
