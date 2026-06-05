<script setup>
import MahasiswaAuthLayout from '@/layouts/mahasiswa/MahasiswaAuthLayout.vue'

import Card from 'primevue/card'
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
          <i class="pi pi-envelope"></i>

          <span class="font-medium"> Verifikasi Email </span>
        </div>

        <!-- HERO -->
        <div class="space-y-4">
          <h2 class="text-3xl font-medium text-slate-900">Aktivasi Akun,</h2>

          <h1 class="text-6xl font-bold leading-tight text-blue-700">Verifikasi Email!</h1>

          <p class="max-w-lg leading-7 text-gray-600">
            Verifikasi email diperlukan untuk mengaktifkan akun mahasiswa dan mengakses seluruh
            fitur sistem magang The Oslo Project.
          </p>
        </div>

        <!-- INFO CARDS -->

        <div class="grid grid-cols-2 gap-5">
          <!-- CARD -->

          <div class="rounded-3xl bg-white p-5 shadow-md">
            <div class="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
              <i class="pi pi-envelope text-2xl text-blue-700"></i>
            </div>

            <h1 class="text-3xl font-bold text-slate-900">Email</h1>

            <p class="mt-1 text-sm text-gray-500">Verifikasi akun mahasiswa</p>
          </div>

          <!-- CARD -->

          <div class="rounded-3xl bg-white p-5 shadow-md">
            <div class="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100">
              <i class="pi pi-check-circle text-2xl text-green-600"></i>
            </div>

            <h1 class="text-3xl font-bold text-slate-900">Aman</h1>

            <p class="mt-1 text-sm text-gray-500">Validasi email terenkripsi</p>
          </div>
        </div>

        <!-- SECURITY -->
        <div class="flex items-center gap-4 rounded-2xl bg-blue-100 px-5 py-4">
          <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-white">
            <i class="pi pi-shield text-2xl text-blue-700"></i>
          </div>

          <div>
            <h1 class="font-semibold text-slate-800">Verifikasi Aman</h1>

            <p class="text-sm text-gray-500">
              Tautan verifikasi hanya berlaku untuk email terdaftar.
            </p>
          </div>
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
                <div class="flex h-24 w-24 items-center justify-center rounded-full bg-blue-100">
                  <i class="pi pi-envelope text-blue-700" style="font-size: 3rem"></i>
                </div>
              </div>

              <!-- TITLE -->

              <div class="mt-6 text-center">
                <h1 class="text-4xl font-bold text-slate-900">
                  Verifikasi

                  <span class="text-blue-700"> Email </span>
                </h1>

                <p class="mt-4 leading-7 text-gray-400">
                  Kami telah mengirim tautan verifikasi ke email kampus Anda.
                </p>
              </div>

              <!-- EMAIL INFO -->

              <div class="mt-8 rounded-2xl border border-blue-100 bg-blue-50 px-5 py-4 text-center">
                <p class="text-sm text-gray-500">Email verifikasi dikirim ke:</p>

                <h1 class="mt-1 font-semibold text-blue-700">mahasiswa@amikom.ac.id</h1>
              </div>

              <!-- ACTION -->

              <div class="mt-8 space-y-4">
                <!-- BUTTON -->

                <Button
                  label="Kirim Ulang Verifikasi"
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
            </div>
          </template>
        </Card>

        <!-- HELP -->

        <div class="mt-6 flex items-center gap-4 rounded-2xl bg-blue-100 p-4">
          <i class="pi pi-headphones text-3xl"></i>

          <div>
            <h1 class="font-semibold">Belum menerima email?</h1>

            <p class="text-sm text-gray-500">
              Periksa folder spam atau hubungi

              <a href="#" class="font-medium text-blue-700 hover:text-blue-500 hover:underline">
                admin Program Studi
              </a>

              jika mengalami kendala verifikasi.
            </p>
          </div>
        </div>

        <!-- FOOTER -->

        <div class="mt-10 text-center text-sm text-gray-400">
          The Oslo Project - Sistem Informasi Magang 2026
        </div>
      </div>
    </section>
  </MahasiswaAuthLayout>
</template>
