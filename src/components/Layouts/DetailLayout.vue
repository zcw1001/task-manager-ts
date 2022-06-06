<template>
  <MainLayout>
    <div class="relative pt-14 pb-8 font-bold text-center text-2xl">
    <span 
      class="absolute left-0 cursor-pointer"
      @click="$router.push({name: 'home'})"
    >←</span>
    <span>{{ props.title }}</span>
    </div>
    <slot></slot>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from './MainLayout.vue'

const props = defineProps<{
  title: string
}>()
</script>

<style scoped>

</style>