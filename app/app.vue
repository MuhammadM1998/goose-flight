<script setup lang="ts">
const i18nHead = useLocaleHead()
useHead({
  htmlAttrs: () => i18nHead.value.htmlAttrs,
  link: () => [...(i18nHead.value.link || [])],
  meta: () => [...(i18nHead.value.meta || [])],
})
</script>

<template>
  <UApp>
    <NuxtRouteAnnouncer />
    <LayoutHeader />
    <NuxtPage />
    <LayoutFooter />
  </UApp>
</template>
