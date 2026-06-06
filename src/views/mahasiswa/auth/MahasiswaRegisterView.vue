<script setup>
import MahasiswaAuthLayout from '@/layouts/mahasiswa/MahasiswaAuthLayout.vue'
import Card from 'primevue/card'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import Button from 'primevue/button'
import Checkbox from 'primevue/checkbox'
</script>

<template>
  <MahasiswaAuthLayout>
    <!-- LEFT SECTION -->
    <section class="hidden lg:flex flex-col justify-between bg-[#CFE1FF] p-14">
      <div class="flex flex-col gap-6 justify-between">
        <!-- LOGO -->
        <div>
          <img class="w-auto h-14" src="/src/assets/images/Logo Lands.png" alt="Logo" />
        </div>

        <!-- BADGE -->
        <div>
          <div
            class="inline-flex items-center gap-2 rounded-full bg-blue-100 px-5 py-2 text-blue-700"
          >
            <i class="pi pi-graduation-cap" style="font-size: 1.2rem"></i>
            <span class="font-medium">Portal Mahasiswa</span>
          </div>
        </div>

        <!-- HERO -->
        <div class="flex flex-col gap-1 justify-between">
          <h2 class="text-3xl font-medium text-gray-900">Selamat Datang,</h2>

          <h1 class="text-6xl font-bold text-blue-700">Mahasiswa!</h1>

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

                  <p class="text-xs text-gray-500">Mahasiswa</p>
                </div>
              </div>
            </template>
          </Card>
        </div>
      </div>

      <!-- SECURITY -->
      <div class="mt-6 flex items-center gap-4 rounded-2xl bg-blue-100 px-4 py-3">
        <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-white">
          <i class="pi pi-shield text-2xl text-blue-700"></i>
        </div>

        <div>
          <h1 class="font-semibold text-gray-800">Akses Aman</h1>

          <p class="text-sm text-gray-500">
            Sistem ini dilindungi dan hanya dapat diakses oleh mahasiswa terdaftar.
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
                <div class="flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
                  <i class="pi pi-graduation-cap text-blue-700" style="font-size: 2.5rem"></i>
                </div>
              </div>

              <!-- TITLE -->
              <div class="mt-4 text-center">
                <h1 class="text-2xl font-bold">
                  Daftar sebagai
                  <span class="text-blue-700">Mahasiswa</span>
                </h1>

                <p class="text-gray-400">Lengkapi formulir di bawah ini untuk mendaftar.</p>
              </div>

              <!-- FORM -->
              <!-- FORM -->

              <form>
                <div class="mt-10 space-y-5">
                  <!-- ROW 1 -->

                  <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <!-- NAMA -->

                    <div>
                      <label class="mb-2 block font-medium text-slate-800"> Nama Lengkap </label>

                      <InputText
                        class="w-full rounded-xl"
                        placeholder="Masukkan nama lengkap Anda"
                      />
                    </div>

                    <!-- NIM -->

                    <div>
                      <label class="mb-2 block font-medium text-slate-800"> NIM </label>

                      <InputText class="w-full rounded-xl" placeholder="Masukkan NIM Anda" />
                    </div>
                  </div>

                  <!-- ROW 2 -->

                  <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <!-- EMAIL -->

                    <div>
                      <label class="mb-2 block font-medium text-slate-800"> Email Kampus </label>

                      <InputText class="w-full rounded-xl" placeholder="nama@amikom.ac.id" />
                    </div>

                    <!-- NO HP -->

                    <div>
                      <label class="mb-2 block font-medium text-slate-800"> No. HP </label>

                      <InputText class="w-full rounded-xl" placeholder="08xxxxxxxxxx" />
                    </div>
                  </div>

                  <!-- PROGRAM STUDI -->

                  <div>
                    <label class="mb-2 block font-medium text-slate-800"> Program Studi </label>

                    <select
                      class="h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-slate-700 outline-none transition focus:border-blue-500"
                    >
                      <option selected disabled>Pilih program studi Anda</option>

                      <option>S1 Informatika</option>

                      <option>S1 Sistem Informasi</option>

                      <option>S1 Teknologi Informasi</option>
                    </select>
                  </div>

                  <!-- PASSWORD -->

                  <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <!-- PASSWORD -->

                    <div>
                      <label class="mb-2 block font-medium text-slate-800"> Password </label>

                      <Password
                        class="w-full"
                        inputClass="
            w-full
            rounded-xl
          "
                        :feedback="false"
                        toggleMask
                        placeholder="Masukkan password"
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
                        placeholder="Konfirmasi password"
                      />
                    </div>
                  </div>

                  <!-- TERMS -->

                  <div class="flex items-start gap-3">
                    <Checkbox binary />

                    <p class="text-sm leading-6 text-gray-600">
                      Saya menyetujui

                      <span class="cursor-pointer font-medium text-blue-700 hover:underline">
                        syarat & ketentuan
                      </span>

                      dan

                      <span class="cursor-pointer font-medium text-blue-700 hover:underline">
                        kebijakan privasi
                      </span>
                    </p>
                  </div>

                  <!-- BUTTON -->

                  <Button
                    label="Daftar"
                    size="large"
                    raised
                    class="w-full !rounded-xl !bg-blue-700 !border-blue-700 !py-3 !text-base !font-semibold !text-white hover:!bg-blue-800 hover:!border-blue-800"
                  />

                  <!-- LOGIN -->

                  <div class="flex items-center justify-center">
                    <span class="text-sm text-gray-500">
                      Sudah punya akun?

                      <a
                        href="/mahasiswa/login"
                        class="font-medium text-blue-700 hover:text-blue-500 hover:underline"
                      >
                        Masuk sekarang
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
              <a href="#" class="font-medium text-blue-700 hover:text-blue-500 hover:underline"
                >admin Program Studi</a
              >
              jika mengalami kendala akses.
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
