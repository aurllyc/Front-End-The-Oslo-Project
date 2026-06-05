import api from '@/api/axios'

export const loginMahasiswa = (payload) => {
  return api.post('/mahasiswa/login', payload)
}

export const registerMahasiswa = (payload) => {
  return api.post('/mahasiswa/register', payload)
}
