<script setup>
import { ref } from 'vue'

import Menu from 'primevue/menu'

defineEmits(['toggleSidebar'])

const menu = ref()

const items = ref([
  {
    label: 'Akun',

    items: [
      {
        label: 'Profil Saya',

        icon: 'pi pi-user',
      },

      {
        label: 'Pengaturan',

        icon: 'pi pi-cog',
      },
    ],
  },

  {
    label: 'Sesi',

    items: [
      {
        label: 'Keluar',

        icon: 'pi pi-sign-out',
      },
    ],
  },
])

const toggleProfileMenu = (event) => {
  menu.value.toggle(event)
}
</script>

<template>
  <header class="sticky top-0 z-20 border-b border-slate-200 bg-white px-4 py-5 sm:px-6 lg:px-8">
    <div class="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
      <!-- LEFT -->

      <div class="flex items-center gap-4">
        <!-- MOBILE MENU -->

        <button
          @click="$emit('toggleSidebar')"
          class="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#EDF3FF] text-blue-600 lg:hidden"
        >
          <i class="pi pi-bars"></i>
        </button>

        <!-- GREETING -->

        <div>
          <h1 class="text-lg font-bold text-slate-800">Halo, Ilham 👋</h1>

          <p class="mt-1 text-sm text-slate-400">Selamat datang di dashboard magangmu.</p>
        </div>
      </div>

      <!-- RIGHT -->

      <div class="flex flex-col gap-4 sm:flex-row sm:items-center">
        <!-- SEARCH -->

        <div class="relative w-full sm:w-[320px]">
          <i class="pi pi-search absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"></i>

          <input
            type="text"
            placeholder="Cari menu atau lowongan..."
            class="h-11 w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] pl-11 pr-4 text-sm outline-none"
          />
        </div>

        <!-- NOTIFICATION -->

        <button
          class="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-[#EDF3FF] text-blue-600"
        >
          <i class="pi pi-bell"></i>

          <span
            class="absolute right-1 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] text-white"
          >
            3
          </span>
        </button>

        <!-- PROFILE -->

        <div class="relative">
          <button
            @click="toggleProfileMenu"
            class="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-3 py-2 transition hover:bg-slate-100"
          >
            <img src="https://i.pravatar.cc/100" class="h-11 w-11 rounded-full object-cover" />

            <div class="hidden sm:block">
              <h1 class="text-sm font-semibold text-slate-800">Ilham Nahar</h1>

              <p class="text-xs text-slate-400">Mahasiswa</p>
            </div>

            <i class="pi pi-angle-down text-slate-500"></i>
          </button>

          <!-- DROPDOWN MENU -->

          <Menu ref="menu" :model="items" popup class="mt-3 w-60 rounded-2xl" />
        </div>
      </div>
    </div>
  </header>
</template>
