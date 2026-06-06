<script setup>
import MahasiswaAuthLayout from '@/layouts/mahasiswa/MahasiswaAuthLayout.vue'

import Card from 'primevue/card'
import Password from 'primevue/password'
import Button from 'primevue/button'
</script>

<template>
  <MahasiswaAuthLayout>
    <!-- LEFT SECTION -->

    <section class="hidden lg:flex flex-col justify-between bg-[#CFE1FF] p-14">
      <div class="space-y-10">
        <!-- LOGO -->

        <img src="/src/assets/images/Logo Lands.png" alt="Logo Oslo" class="h-14 w-auto" />

        <!-- BADGE -->

        <div
          class="inline-flex items-center gap-2 rounded-full bg-blue-100 px-5 py-2 text-blue-700"
        >
          <i class="pi pi-lock"></i>

          <span class="font-medium"> Reset Password Mahasiswa </span>
        </div>

        <!-- HERO -->

        <div class="space-y-4">
          <h2 class="text-3xl font-medium text-slate-900">Buat Password Baru,</h2>

          <h1 class="text-6xl font-bold leading-tight text-blue-700">Akses Kembali!</h1>

          <p class="max-w-lg text-gray-600 leading-7">
            Masukkan password baru untuk mengaktifkan kembali akses akun mahasiswa pada sistem
            magang The Oslo Project.
          </p>
        </div>

        <!-- INFO -->

        <div class="grid grid-cols-2 gap-5">
          <!-- CARD -->

          <div class="rounded-3xl bg-white p-5 shadow-md">
            <div class="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
              <i class="pi pi-shield text-2xl text-blue-700"></i>
            </div>

            <h1 class="text-3xl font-bold text-slate-900">100%</h1>

            <p class="mt-1 text-sm text-gray-500">Keamanan akun terenkripsi</p>
          </div>

          <!-- CARD -->

          <div class="rounded-3xl bg-white p-5 shadow-md">
            <div class="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100">
              <i class="pi pi-check-circle text-2xl text-green-600"></i>
            </div>

            <h1 class="text-3xl font-bold text-slate-900">Aman</h1>

            <p class="mt-1 text-sm text-gray-500">Reset password tervalidasi sistem</p>
          </div>
        </div>
      </div>

      <!-- FOOTER SECURITY -->

      <div class="flex items-center gap-4 rounded-2xl bg-blue-100 px-5 py-4">
        <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-white">
          <i class="pi pi-lock text-2xl text-blue-700"></i>
        </div>

        <div>
          <h1 class="font-semibold text-slate-800">Sistem Keamanan Aktif</h1>

          <p class="text-sm text-gray-500">Password baru akan langsung terenkripsi oleh sistem.</p>
        </div>
      </div>
    </section>

    <!-- RIGHT SECTION -->

    <section class="flex items-center justify-center p-8">
      <div class="w-full max-w-lg">
        <!-- CARD -->

        <Card class="rounded-[2rem] shadow-xl">
          <template #content>
            <div class="px-6 py-4">
              <!-- ICON -->

              <div class="flex justify-center">
                <div class="flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
                  <i class="pi pi-key text-blue-700" style="font-size: 2.5rem"></i>
                </div>
              </div>

              <!-- TITLE -->

              <div class="mt-6 text-center">
                <h1 class="text-4xl font-bold text-slate-900">
                  Reset

                  <span class="text-blue-700"> Password </span>
                </h1>

                <p class="mt-3 text-gray-400 leading-7">
                  Masukkan password baru untuk melanjutkan akses ke dashboard mahasiswa.
                </p>
              </div>

              <!-- FORM -->

              <form>
                <div class="mt-10 space-y-6">
                  <!-- PASSWORD -->

                  <div>
                    <label class="mb-2 block font-medium text-slate-800"> Password Baru </label>

                    <Password
                      class="w-full"
                      inputClass="
                        w-full
                        rounded-xl
                      "
                      :feedback="false"
                      toggleMask
                      placeholder="Masukkan password baru"
                    />
                  </div>

                  <!-- KONFIRMASI -->

                  <div>
                    <label class="mb-2 block font-medium text-slate-800">
                      Konfirmasi Password
                    </label>

                    <Password
                      class="w-full"
                      inputClass="
                        w-full
                        rounded-xl
                      "
                      :feedback="false"
                      toggleMask
                      placeholder="Konfirmasi password baru"
                    />
                  </div>

                  <!-- BUTTON -->

                  <Button
                    label="Simpan Password Baru"
                    size="large"
                    raised
                    class="w-full !rounded-xl !bg-blue-700 !border-blue-700 !py-3 !text-base !font-semibold !text-white hover:!bg-blue-800 hover:!border-blue-800"
                  />

                  <!-- LOGIN -->

                  <div class="flex items-center justify-center">
                    <span class="text-sm text-gray-500">
                      Kembali ke

                      <a
                        href="/mahasiswa/login"
                        class="font-medium text-blue-700 hover:text-blue-500 hover:underline"
                      >
                        halaman login
                      </a>
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </template>
        </Card>

        <!-- HELP -->

        <div class="mt-6 flex items-center gap-4 rounded-2xl bg-blue-100 p-4">
          <i class="pi pi-headphones text-3xl"></i>

          <div>
            <h1 class="font-semibold">Butuh bantuan akses?</h1>

            <p class="text-sm text-gray-500">
              Hubungi

              <a href="#" class="font-medium text-blue-700 hover:text-blue-500 hover:underline">
                admin Program Studi
              </a>

              jika mengalami kendala reset password.
            </p>
          </div>
        </div>

        <!-- FOOTER -->

        <div class="mt-10 text-center text-sm text-gray-400">
          The Oslo Project - Sistem Magang Mahasiswa 2026
        </div>
      </div>
    </section>
  </MahasiswaAuthLayout>
</template>
