<template>
  <div class="py-4 border-b border-stone-300 space-y-3">
    <div class=" text-stone-500">
      <label for="text">{{ props.label }}</label>
    </div>
    <Options 
      :options="props.options" 
      :default="props.default" 
      :clicked="props.clicked"
    />
  </div>
</template>

<script setup lang="ts">
import Options from '../common/Options.vue'
const props = defineProps<{
  label: string,
  options: string[],
  default: number,
  clicked?: Function
}>()
</script>

<style scoped>

</style>