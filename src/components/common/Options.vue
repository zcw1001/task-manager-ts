<template>
  <div class="grid grid-cols-3">
    <div 
      class="text-center p-2 rounded-full cursor-pointer hover:bg-stone-900 hover:text-white"
      :class="i == selected ? ['bg-stone-900', 'text-white'] : []"
      v-for="(option, i) in props.options"
      @click="selected = i"
    >
      {{ option }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

// Data
const props = defineProps<{
  options: string[],
  default: number,
  clicked?: Function
}>()
const selected = ref(props.default)

// Methods
watch(selected, newValue => {
  if (props.clicked) {
    props.clicked(newValue)
  }
})
</script>

<style scoped>

</style>