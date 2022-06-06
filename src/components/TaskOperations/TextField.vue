<template>
  <div class="py-4 border-b border-stone-300 space-y-3">
    <div class=" text-stone-500">
      <label for="text">{{ props.label }}</label>
    </div>
    <input 
      class="w-full outline-none font-bold" 
      type="text" 
      autocomplete="false" 
      v-model="text"
      required 
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  label: string,
  text: string
}>()
const emit = defineEmits(['update:text'])
const text = computed({
  get() {
    return props.text
  },
  set(value) {
    emit('update:text', value)
  }
})
</script>

<style scoped>

</style>