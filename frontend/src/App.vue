<script setup lang="ts">
    import NavHeader from "./components/NavHeader.vue";
</script>

<template>
    <div class="app">
        <NavHeader />
        <router-view></router-view>
    </div>
</template>

<style scoped lang="scss">
    .app {
        min-height: 100vh;
        background-color: #f7fafc;
    }
</style>
