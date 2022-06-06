<script setup lang="ts">
</script>

<template>
  <div class="bg-slate-50 background-image">
    <Suspense>
      <router-view :key="$route.fullPath"></router-view>
      <template #fallback>
        Loading...
      </template>
    </Suspense>
  </div>
</template>

<style>
.background-image {
  background-image: url('');
  background-size: cover;
}
body, html {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
  'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
  'Noto Color Emoji';
}
</style>
