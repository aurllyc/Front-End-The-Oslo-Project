<script setup>
const stats = [
  {
    title: 'Hari Aktif',
    value: '72',
    desc: 'Sejak 1 Feb 2025',
    icon: 'pi pi-calendar',
    color: 'text-blue-600',
    bg: 'bg-blue-100',
  },

  {
    title: 'Log Book Tervalidasi',
    value: '18 / 28',
    desc: 'Log Book',
    icon: 'pi pi-check-circle',
    color: 'text-green-500',
    bg: 'bg-green-100',
  },

  {
    title: 'Sesi Bimbingan',
    value: '4',
    desc: 'Sesi Terjadwal',
    icon: 'pi pi-users',
    color: 'text-purple-500',
    bg: 'bg-purple-100',
  },
]

const notifications = [
  {
    title: 'Log book minggu ke-8 divalidasi',
    time: '2 jam yang lalu',
  },

  {
    title: 'Sesi bimbingan dijadwalkan',
    time: '5 jam yang lalu',
  },

  {
    title: 'Mitra memberikan feedback baru',
    time: '1 hari yang lalu',
  },
]
</script>

<template>
  <div class="space-y-6">
    <!-- TOP GRID -->
    <div class="grid grid-cols-1 gap-5 xl:grid-cols-4">
      <!-- STATUS -->

      <div
        class="rounded-[2rem] bg-gradient-to-r from-blue-900 to-blue-700 p-7 text-white xl:col-span-1"
      >
        <div class="flex items-start justify-between">
          <div>
            <div class="flex items-center gap-3">
              <h1 class="text-xl font-bold">Status Magang</h1>

              <span class="rounded-full bg-green-500/20 px-3 py-1 text-xs text-green-300">
                Aktif
              </span>
            </div>

            <p class="mt-3 text-sm text-blue-100">PT. Solusi Digital Indonesia</p>
          </div>

          <i class="pi pi-briefcase text-3xl"></i>
        </div>

        <!-- PROGRESS -->

        <div class="mt-10">
          <div class="flex items-center justify-between">
            <p class="text-sm text-blue-100">Progress keseluruhan</p>

            <h1 class="text-5xl font-bold">65%</h1>
          </div>

          <div class="mt-4 h-2 overflow-hidden rounded-full bg-white/20">
            <div class="h-full w-[65%] rounded-full bg-green-400"></div>
          </div>

          <p class="mt-4 text-sm text-blue-100">Periode: 1 Feb 2025 - 30 Jul 2025</p>
        </div>
      </div>

      <!-- STATS -->

      <div v-for="stat in stats" :key="stat.title" class="rounded-[2rem] bg-white p-7 shadow-sm">
        <div class="flex items-start justify-between">
          <div>
            <h1 class="font-semibold text-slate-700">
              {{ stat.title }}
            </h1>

            <h1 class="mt-6 text-5xl font-bold text-slate-900">
              {{ stat.value }}
            </h1>

            <p class="mt-3 text-sm text-slate-400">
              {{ stat.desc }}
            </p>
          </div>

          <div class="flex h-14 w-14 items-center justify-center rounded-2xl" :class="stat.bg">
            <i :class="[stat.icon, stat.color, 'text-2xl']"></i>
          </div>
        </div>
      </div>
    </div>

    <!-- PROGRESS + NOTIFICATION -->

    <div class="grid grid-cols-1 gap-6 xl:grid-cols-3">
      <!-- TIMELINE -->

      <div class="rounded-[2rem] bg-white p-7 shadow-sm xl:col-span-2">
        <div class="flex items-center justify-between">
          <h1 class="text-xl font-bold text-slate-800">Progress Magang</h1>
        </div>

        <div class="mt-10 flex flex-wrap items-center justify-between gap-6">
          <div
            v-for="step in [
              'Pengajuan',
              'Disetujui Prodi',
              'Diterima Mitra',
              'Magang Aktif',
              'Penilaian',
              'Selesai',
            ]"
            :key="step"
            class="flex flex-col items-center gap-3"
          >
            <div
              class="flex h-12 w-12 items-center justify-center rounded-full border-4 border-blue-600 bg-blue-600 text-white"
            >
              <i class="pi pi-check"></i>
            </div>

            <p class="text-center text-sm font-medium text-slate-700">
              {{ step }}
            </p>
          </div>
        </div>
      </div>

      <!-- NOTIFICATIONS -->

      <div class="rounded-[2rem] bg-white p-7 shadow-sm">
        <div class="flex items-center justify-between">
          <h1 class="text-xl font-bold text-slate-800">Notifikasi Terbaru</h1>

          <button class="text-sm text-blue-700">Lihat semua</button>
        </div>

        <div class="mt-8 space-y-5">
          <div v-for="notification in notifications" :key="notification.title" class="flex gap-4">
            <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100">
              <i class="pi pi-check-circle text-green-500"></i>
            </div>

            <div>
              <h1 class="font-medium text-slate-700">
                {{ notification.title }}
              </h1>

              <p class="mt-1 text-sm text-slate-400">
                {{ notification.time }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
