<script setup lang="ts">
import BaseTopBar from '@/components/Base/BaseTopBar.vue';
import BaseBottomNavigation from '@/components/Base/BaseBottomNavigation.vue';
</script>

<style scoped>
.main-body {
    margin-top: 84px;
    margin-bottom: 54px;
    padding: 12px;
    min-height: 100%;
    background-color: #F1F1F8;
    overflow-y: scroll;
    height: 100%;
}
</style>

<template>
    <BaseTopBar />
    <div class="main-body">
        <router-view />
    </div>
    <BaseBottomNavigation />
</template>