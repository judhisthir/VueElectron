<script setup lang="ts">
import Drawer from 'primevue/drawer';
import { ref } from "vue";
const visibleTop = ref(false);

const toggleDrawer = () => {
    visibleTop.value = !visibleTop.value;
    console.log('Button clicked!');
};
</script>

<style scoped>

   .drawer-btn-style{
    font-size: 2px; width: 32px; height: 32px; color: red;
   }</style>

<template>
    <div class="card">
        <!-- <Button icon="" text rounded aria-label="Filter" @click="toggleDrawer" class="text-[2px] w-[32px] h-[32px] text-[red]"/> -->
        <button>
            <img src="../../assets/icons/BaseTopBar/dropdown.svg"  @click="toggleDrawer" class=" w-[20px] h-[20px] mt-2" />
        </button>
        <Drawer  v-model:visible="visibleTop" header="Top Drawer" position="top" class="h-auto mt-[54px] rounded-br-[16px] rounded-bl-[16px]" >
        </Drawer>
    </div>
</template>
