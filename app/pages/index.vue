<template>
  <UContainer as="main" class="pt-5 pb-20 flex flex-col gap-6 md:gap-12">
    <h1 class="font-playfair text-gradient leading-normal font-bold text-2xl md:text-[56px] mx-auto text-center max-w-[22ch]">
      Discover Our Paradise Worlds, Travel Anywhere Now!
    </h1>

    <HomeBookingForm />
    <HomePopularDestinations />
  </UContainer>
</template>

<style scoped>
.text-gradient {
  background: linear-gradient(93deg, #183867 28.05%, #EAA121 44.33%);
  background-clip: text;
  color: transparent;
}
</style>
