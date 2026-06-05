<script setup>
import { useRoute } from 'vue-router'

defineProps({
  isSidebarOpen: Boolean,
})

defineEmits(['closeSidebar'])

const route = useRoute()

const menus = [
  {
    label: 'Dashboard',
    icon: 'pi pi-home',
    route: '/mahasiswa/dashboard',
  },

  {
    label: 'Pengajuan Magang',
    icon: 'pi pi-file-edit',
    route: '/mahasiswa/pengajuan',
  },
  {
    label: 'Lowongan Magang',
    icon: 'pi pi-file-edit',
    route: '/mahasiswa/lowongan',
  },
  {
    label: 'Log Book',
    icon: 'pi pi-book',
    route: '/mahasiswa/logbook',
  },
  {
    label: 'Laporan Magang',
    icon: 'pi pi-book',
    route: '/mahasiswa/laporan',
  },
  {
    label: 'Nilai & Evaluasi',
    icon: 'pi pi-book',
    route: '/mahasiswa/nilai',
  },
]
</script>

<template>
  <!-- OVERLAY -->

  <Transition
    enter-active-class="transition-opacity duration-300"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity duration-300"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="isSidebarOpen"
      @click="$emit('closeSidebar')"
      class="fixed inset-0 z-30 bg-black/40 lg:hidden"
    ></div>
  </Transition>

  <!-- SIDEBAR -->

  <aside
    class="fixed left-0 top-0 z-40 flex h-screen w-[260px] flex-col justify-between border-r border-slate-200 bg-white p-6 transition-transform duration-300"
    :class="isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'"
  >
    <!-- TOP -->

    <div>
      <!-- LOGO -->

      <div class="flex items-center gap-3">
        <img src="@/assets/images/logo.png" class="h-12 w-12" />

        <div>
          <h1 class="font-bold text-slate-800">THE OSLO</h1>

          <p class="text-xs tracking-[4px] text-slate-400">PROJECT</p>
        </div>
      </div>

      <!-- MENU -->

      <nav class="mt-10 space-y-2">
        <RouterLink
          v-for="menu in menus"
          :key="menu.label"
          :to="menu.route"
          class="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition"
          :class="
            route.path === menu.route
              ? 'bg-blue-700 text-white'
              : 'text-slate-500 hover:bg-slate-100'
          "
        >
          <i :class="menu.icon"></i>

          <span>
            {{ menu.label }}
          </span>
        </RouterLink>
      </nav>
    </div>

    <!-- HELP -->

    <div class="rounded-[2rem] bg-[#EDF3FF] p-5">
      <h1 class="font-bold text-slate-800">Butuh Bantuan?</h1>

      <p class="mt-2 text-sm text-slate-500">Hubungi admin prodi jika mengalami kendala.</p>

      <button class="mt-5 w-full rounded-2xl bg-blue-700 py-3 text-white">Hubungi Admin</button>
    </div>
  </aside>
</template>
