import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,

    token: null,

    role: null,

    isAuthenticated: false,
  }),

  actions: {
    login(data) {
      this.user = data.user

      this.token = data.token

      this.role = data.role

      this.isAuthenticated = true
    },

    logout() {
      this.user = null

      this.token = null

      this.role = null

      this.isAuthenticated = false
    },
  },
})
