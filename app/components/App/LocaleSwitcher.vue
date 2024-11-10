<script setup lang="ts">
const locales = [{ label: 'العربية', locale: 'ar' }, { label: 'English', locale: 'en' }]

const { locale, setLocale } = useI18n()
const selectedLocale = ref(locale.value)
</script>

<template>
  <UInputMenu v-model="selectedLocale" placeholder="Select status" :items="locales" value-key="locale" class="w-[100px]" @change=" setLocale(selectedLocale)" />
</template>
