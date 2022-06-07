<template>
  <div class="widthNoPadding h-20 absolute bottom-0 z-10 flex items-center justify-center">
    <div 
      class="w-32 p-2 rounded-full text-center cursor-pointer bg-stone-900 text-white font-bold transition-all hover:opacity-75"
      @click="$router.push({name: 'add_task'})"
    >
      添加任务
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.widthNoPadding {
  width: calc(100% - 80px);
}
@media only screen and (max-width: 640px) {
  .widthNoPadding {
    width: calc(100% - 40px);
  }
}
</style>