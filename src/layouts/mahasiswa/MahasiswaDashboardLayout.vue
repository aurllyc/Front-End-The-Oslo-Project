<script setup>
import { ref } from 'vue'

import MahasiswaNavbar from '@/components/mahasiswa/navbar/MahasiswaNavbar.vue'

import MahasiswaSidebar from '@/components/mahasiswa/sidebar/MahasiswaSidebar.vue'

const isSidebarOpen = ref(false)

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}
</script>

<template>
  <div class="min-h-screen bg-[#F4F4F4]">
    <!-- SIDEBAR -->

    <MahasiswaSidebar :isSidebarOpen="isSidebarOpen" @closeSidebar="isSidebarOpen = false" />

    <!-- CONTENT -->

    <main class="min-h-screen lg:ml-[260px]">
      <!-- NAVBAR -->

      <MahasiswaNavbar @toggleSidebar="toggleSidebar" />

      <!-- PAGE -->

      <div class="p-4 sm:p-6 lg:p-8">
        <RouterView />
      </div>
    </main>
  </div>
</template>
