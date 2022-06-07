<template>
    <div class="main-layout h-screen relative px-10 overflow-hidden bg-white">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.main-layout {
  width: 400px;
  margin: 0 auto;
}
@media only screen and (max-width: 640px) {
  .main-layout {
    width: 100%;
    padding: 0 20px;
  }
}
</style>