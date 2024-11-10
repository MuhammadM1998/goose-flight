<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
const navLinks = computed(() => [{ label: t('nav.home'), to: localePath('/') }, { label: t('nav.promo') }, { label: t('nav.my-bookings') }])
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
      <UButton :label="$t('nav.sign-in')" class="hidden md:block" />
    </div>
  </UContainer>
</template>
