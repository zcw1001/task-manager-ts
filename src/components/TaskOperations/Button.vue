<template>
  <button 
    class="w-full h-10 rounded-full text-gray-100 text-center text-sm transition-all hover:opacity-75"
    :class="{ 'bg-stone-900': props.type == 'normal', 'bg-red-500': props.type == 'important' }"
    @click="() => clicked()"
  >{{ props.name }}</button>
</template>

<script setup lang="ts">
const props = defineProps<{
  name: string,
  type: string,
  clicked: Function
}>()
</script>

<style scoped>
</style>