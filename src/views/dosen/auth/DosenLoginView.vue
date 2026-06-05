<script setup>
import DosenAuthLayout from '@/layouts/dosen/DosenAuthLayout.vue'
import Card from 'primevue/card'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import Button from 'primevue/button'
import Checkbox from 'primevue/checkbox'
</script>

<template>
  <DosenAuthLayout>
    <!-- LEFT SECTION -->
    <section class="hidden lg:flex flex-col justify-between bg-purple-50 p-14">
      <div class="flex flex-col gap-6 justify-between">
        <!-- LOGO -->
        <div>
          <img class="w-auto h-14" src="/src/assets/images/Logo Lands.png" alt="Logo" />
        </div>

        <!-- BADGE -->
        <div>
          <div
            class="inline-flex items-center gap-2 rounded-full bg-purple-100 px-5 py-2 text-purple-700"
          >
            <i class="pi pi-graduation-cap" style="font-size: 1.2rem"></i>
            <span class="font-medium">Portal Dosen Pembimbing</span>
          </div>
        </div>

        <!-- HERO -->
        <div class="flex flex-col gap-1 justify-between">
          <h2 class="text-3xl font-medium text-gray-900">Selamat Datang,</h2>

          <h1 class="text-6xl font-bold text-purple-700">Dosen Pembimbing!</h1>

          <p class="max-w-md text-md text-gray-500">
            Kelola pengajuan magang, isi log book, pantau progres, dan selesaikan proses magang
            dalam satu sistem.
          </p>
        </div>

        <!-- STATS -->
        <div class="grid grid-cols-2 gap-2.5 max-w-xl gap-3">
          <Card class="rounded-2xl shadow-md">
            <template #content>
              <div class="flex items-center gap-4">
                <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100">
                  <i class="pi pi-calendar text-2xl text-purple-600"></i>
                </div>

                <div>
                  <p class="text-sm text-gray-600">Pengajuan Aktif</p>

                  <h1 class="text-2xl font-bold">1</h1>

                  <p class="text-xs text-gray-500">Sedang diproses</p>
                </div>
              </div>
            </template>
          </Card>

          <Card class="rounded-2xl shadow-md">
            <template #content>
              <div class="flex items-center gap-4">
                <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100">
                  <i class="pi pi-book text-2xl text-indigo-600"></i>
                </div>

                <div>
                  <p class="text-sm text-gray-600">Log Book</p>

                  <h1 class="text-2xl font-bold">18</h1>

                  <p class="text-xs text-gray-500">Dari 28 pengajuan</p>
                </div>
              </div>
            </template>
          </Card>

          <Card class="rounded-2xl shadow-md">
            <template #content>
              <div class="flex items-center gap-4">
                <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100">
                  <i class="pi pi-check-circle text-2xl text-green-500"></i>
                </div>

                <div>
                  <p class="text-sm text-gray-600">Proses Magang</p>

                  <h1 class="text-2xl font-bold">28</h1>

                  <p class="text-xs text-gray-500">Pengajuan</p>
                </div>
              </div>
            </template>
          </Card>

          <Card class="rounded-2xl shadow-md">
            <template #content>
              <div class="flex items-center gap-4">
                <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100">
                  <i class="pi pi-briefcase text-2xl text-orange-500"></i>
                </div>

                <div>
                  <p class="text-sm text-gray-600">Sesi Bimbingan</p>

                  <h1 class="text-2xl font-bold">2</h1>

                  <p class="text-xs text-gray-500">Dosen Pembimbing</p>
                </div>
              </div>
            </template>
          </Card>
        </div>
      </div>

      <!-- SECURITY -->
      <div class="mt-6 flex items-center gap-4 rounded-2xl bg-purple-100 px-4 py-3">
        <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-white">
          <i class="pi pi-shield text-2xl text-purple-700"></i>
        </div>

        <div>
          <h1 class="font-semibold text-gray-800">Akses Aman</h1>

          <p class="text-sm text-gray-500">
            Sistem ini dilindungi dan hanya dapat diakses oleh dosen Pembimbing terdaftar.
          </p>
        </div>
      </div>
    </section>

    <!-- RIGHT SECTION -->
    <section class="flex items-center justify-center p-8">
      <div class="w-full max-w-xl">
        <!-- LOGIN CARD -->
        <Card class="rounded-4xl shadow-xl">
          <template #content>
            <div class="px-6 py-4">
              <!-- ICON -->
              <div class="flex justify-center">
                <div class="flex h-20 w-20 items-center justify-center rounded-full bg-purple-100">
                  <i class="pi pi-graduation-cap text-purple-700" style="font-size: 2.5rem"></i>
                </div>
              </div>

              <!-- TITLE -->
              <div class="mt-4 text-center">
                <h1 class="text-2xl font-bold">
                  Masuk sebagai
                  <span class="text-purple-700">Dosen Pembimbing</span>
                </h1>

                <p class="text-gray-400">Gunakan akun kampus Anda untuk melanjutkan.</p>
              </div>

              <!-- FORM -->
              <form>
                <div class="mt-10 space-y-6">
                  <div>
                    <label class="mb-2 block font-medium"> NIM / Email </label>

                    <InputText class="w-full" placeholder="Masukan NIM atau email kampus" />
                  </div>

                  <div>
                    <label class="mb-2 block font-medium"> Password </label>

                    <Password
                      class="w-full"
                      inputClass="w-full"
                      :feedback="false"
                      toggleMask
                      placeholder="Masukan password"
                    />
                  </div>

                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2">
                      <Checkbox binary />

                      <span>Ingat saya</span>
                    </div>

                    <a href="#" class="font-medium text-purple-700 hover:text-purple-500">
                      Lupa Password?
                    </a>
                  </div>

                  <Button
                    label="Masuk"
                    size="large"
                    raised
                    class="w-full !bg-purple-700 !border-purple-700 hover:!bg-purple-800 hover:!border-purple-800 !text-white"
                  />

                  <!-- DIVIDER -->
                  <!-- <div class="flex items-center gap-4">
                  <div class="h-px flex-1 bg-gray-300"></div>

                  <span class="text-gray-400">atau</span>

                  <div class="h-px flex-1 bg-gray-300"></div>
                </div>

                <Button
                  label="Masuk dengan Google"
                  outlined
                  severity="secondary"
                  class="w-full"
                  size="large"
                /> -->
                </div>
              </form>
            </div>
          </template>
        </Card>

        <!-- HELP -->
        <div class="mt-6 flex items-center gap-4 rounded-2xl bg-purple-100 p-4">
          <i class="pi pi-headphones text-3xl"></i>

          <div>
            <h1 class="font-semibold">Butuh bantuan akses?</h1>

            <p class="text-sm text-gray-500">
              Hubungi
              <a href="#" class="font-medium text-purple-700 hover:text-purple-500 hover:underline"
                >admin Program Studi</a
              >
              jika mengalami kendala akses.
            </p>
          </div>
        </div>

        <!-- FOOTER -->
        <div class="mt-10 text-center text-sm text-gray-400">
          The Oslo Project - Sistem Informasi Magang 2026
        </div>
      </div>
    </section>
  </DosenAuthLayout>
</template>
