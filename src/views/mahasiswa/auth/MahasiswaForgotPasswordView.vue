<script setup>
import MahasiswaAuthLayout from '@/layouts/mahasiswa/MahasiswaAuthLayout.vue'

import Card from 'primevue/card'

import InputText from 'primevue/inputtext'

import Button from 'primevue/button'
</script>

<template>
  <MahasiswaAuthLayout>
    <!-- LEFT SECTION -->

    <section class="hidden lg:flex flex-col justify-between bg-[#CFE1FF] p-14">
      <div class="flex flex-col gap-8">
        <!-- LOGO -->

        <div>
          <img class="h-14 w-auto" src="/src/assets/images/Logo Lands.png" alt="Logo" />
        </div>

        <!-- BADGE -->

        <div>
          <div
            class="inline-flex items-center gap-2 rounded-full bg-blue-100 px-5 py-2 text-blue-700"
          >
            <i class="pi pi-lock text-lg"></i>

            <span class="font-medium"> Reset Password </span>
          </div>
        </div>

        <!-- HERO -->

        <div class="space-y-3">
          <h2 class="text-3xl font-medium text-slate-900">Lupa Password?</h2>

          <h1 class="text-6xl font-bold text-blue-700">Reset Akses!</h1>

          <p class="max-w-md text-gray-600">
            Masukkan email kampus Anda untuk menerima tautan reset password dan mendapatkan kembali
            akses ke sistem magang.
          </p>
        </div>

        <!-- INFO CARD -->

        <div class="max-w-xl rounded-3xl bg-white p-6 shadow-md">
          <div class="flex items-start gap-4">
            <div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
              <i class="pi pi-envelope text-2xl text-blue-700"></i>
            </div>

            <div>
              <h1 class="text-lg font-semibold text-slate-800">Verifikasi Email</h1>

              <p class="mt-1 text-sm leading-6 text-gray-500">
                Sistem akan mengirimkan tautan reset password ke email kampus yang terdaftar pada
                akun Anda.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- SECURITY -->

      <div class="mt-8 flex items-center gap-4 rounded-2xl bg-blue-100 px-4 py-3">
        <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-white">
          <i class="pi pi-shield text-2xl text-blue-700"></i>
        </div>

        <div>
          <h1 class="font-semibold text-slate-800">Keamanan Akun</h1>

          <p class="text-sm text-gray-500">
            Proses reset password dilindungi untuk menjaga keamanan akun mahasiswa.
          </p>
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
                  <i class="pi pi-lock text-blue-700" style="font-size: 2.5rem"></i>
                </div>
              </div>

              <!-- TITLE -->

              <div class="mt-5 text-center">
                <h1 class="text-3xl font-bold text-slate-900">
                  Lupa

                  <span class="text-blue-700"> Password </span>
                </h1>

                <p class="mt-2 text-gray-400">
                  Masukkan email kampus Anda untuk menerima tautan reset password.
                </p>
              </div>

              <!-- FORM -->

              <form>
                <div class="mt-10 space-y-6">
                  <!-- EMAIL -->

                  <div>
                    <label class="mb-2 block font-medium text-slate-800"> Email Kampus </label>

                    <InputText class="w-full rounded-xl" placeholder="nama@amikom.ac.id" />
                  </div>

                  <!-- BUTTON -->

                  <Button
                    label="Kirim Link Reset Password"
                    size="large"
                    raised
                    class="w-full !rounded-xl !bg-blue-700 !border-blue-700 !py-3 !text-base !font-semibold !text-white hover:!bg-blue-800 hover:!border-blue-800"
                  />

                  <!-- BACK -->

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
            <h1 class="font-semibold">Mengalami kendala?</h1>

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
