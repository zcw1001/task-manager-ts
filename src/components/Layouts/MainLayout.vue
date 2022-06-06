<template>
    <div class="main-layout h-screen relative px-10 bg-white">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.main-layout {
    width: 400px;
    margin: 0 auto;
    overflow: hidden;
}

</style>