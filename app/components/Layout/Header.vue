<script setup lang="ts">
const navLinks = ref([{ label: 'Home', to: '/' }, { label: 'Promo' }, { label: 'My Booking' }])
</script>

<template>
  <UContainer as="header" class="pt-8 pb-4 flex items-center justify-between">
    <LayoutMobileSlideover :items="navLinks" class="md:hidden" />

    <div class="grow md:grow-0">
      <AppLogo class="mx-auto md:mx-0" />
    </div>

    <UNavigationMenu :items="navLinks" highlight class="w-fit hidden md:flex" />

    <div class="flex items-center gap-2">
      <AppLocaleSwitcher />
      <UButton label="Sign In" class="hidden md:block" />
    </div>
  </UContainer>
</template>
