<script setup lang="ts">
const placeholderData = [
  {
    location: 'Manggarai Barat',
    title: 'Flores Road Trip 3D2N',
    image: '/popular-destinations/flores-road.png',
    duration: '3 Days',
    price: '$375',
  },
  {
    location: 'Bogor',
    title: 'Forrester Glamping Co Bogor',
    image: '/popular-destinations/forrester-glamping.png',
    duration: '1 Days',
    price: '$375',
  },
  {
    location: 'Jakarta',
    title: 'Paket Tiket Pesawat Jakarta Bali',
    image: '/popular-destinations/paket-tiket.png',
    duration: '',
    price: '$375',
  },
  {
    location: 'Kota Semarang',
    title: 'Desa Wisata Kandri',
    image: '/popular-destinations/disa-wisata.png',
    duration: '14 Days',
    price: '$375',
  },
]
</script>

<template>
  <section>
    <h2 class="text-xl md:text-4xl font-bold text-secondary">
      Popular Destinations
    </h2>

    <p class="mt-2 text-secondary">
      Vacations to make your experience enjoyable in Indonesia!
    </p>

    <ul class="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <li v-for="(item, index) in placeholderData" :key="index" class="p-4 border border-white rounded-lg bg-[#F2F4F7] flex flex-col space-y-4 hover:bg-[#F2F1ED] hover:border-[#F0A41F] transition-colors">
        <!-- Image -->
        <NuxtImg :src="item.image" format="webp" />

        <!-- Location -->
        <div class="flex items-center gap-1 mb-2">
          <UIcon name="ic:baseline-location-on" class="text-primary shrink-0" />
          <p class="text-[10px] text-[#8F8F8F]">
            {{ item.location }}
          </p>
        </div>

        <!-- Title -->
        <p class="text-secondary font-bold mb-1">
          {{ item.title }}
        </p>

        <!-- Duration -->
        <p v-if="item.duration" class="text-sm text-[#636363] ">
          {{ item.duration }}
        </p>

        <!-- Price -->
        <p class="text-primary font-bold text-sm mt-auto">
          {{ item.price }}
        </p>
      </li>
    </ul>
  </section>
</template>
