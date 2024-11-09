<script setup lang="ts">
defineProps<{ items: Array<{ label: string }> }>()
</script>

<template>
  <USlideover title="Goose Flight" close-icon="ic:sharp-close">
    <button class="bg-[#DBECFD] text-primary p-2 rounded inline-flex md:hidden">
      <UIcon name="radix-icons:hamburger-menu" />
    </button>

    <template #body>
      <UNavigationMenu :items orientation="vertical" />
    </template>
  </USlideover>
</template>
