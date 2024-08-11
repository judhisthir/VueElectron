<script setup lang="ts">
import Button from 'primevue/button';
//   import 'primeicons/primeicons.css'

import BaseDrawer from './BaseDrawer.vue';
</script>

<style scoped>
.primary-bg-color {
    background: #0D005D;
}

.draggable {
    -webkit-app-region: drag;
}

.window-controls-container {
    display: flex;
}

.window-controls-container>* {
    margin-right: 4px;
}

.transcribe-text {
    font-size: 10.8px;
    line-height: 10.8px;
    margin-top: 2px;
}

.transcribe-user-badge-img {
    /* margin-top: 4px; */
    justify-content: center;
    padding: 0;
}

.iconSize {
    width: 18px;
    height: 18px
}

.btn-bars {
    font-size: 2px;
    width: 34px;
    height: 34px;
    padding: 0;
    background-color: #FFFFFF33;
    border: none;
}

.user-badge-text {
    color: white;
    margin-left: 5px;
    margin-top: 2px;
    font-size: small;
}

.btn-rht-style {
    font-size: 2px;
    width: 34px;
    height: 34px;
    padding: 0;
    background-color: #FFFFFF33;
    border: none;
}

.cbb {
    border-bottom: 1px solid var(--Neutrals-White-30, rgba(255, 255, 255, 0.30));
}
</style>

<template>
    <div class="fixed top-[0]">
        <header
            class="flex justify-between overflow-hidden w-screen pl-[12px] pt-[12px] pr-3 pb-2 bg-[rgba(13,_0,_93,_1)] draggable cbb ">
            <div class="window-controls-container left-section" style="-webkit-app-region: no-drag">
                <Button rounded aria-label="Filter" class="btn-bars">
                    <img src="../../assets/icons/BaseTopBar/barsIcon.svg" class="iconSize" />
                </Button>
                <div class="flex rounded-[40px] h-[34px]" style="background-color:#FFFFFF33;">
                    <!-- <div
                        class="flex items-center m-[4px] px-[8px] py-[4px] text-[white] min-w-[fit-content] w-[116px] bg-[rgba(181,_22,_76,_1)] border-[1px] border-[solid] border-[rgba(244,54,118,1)] rounded-[16px] text-[12px]">

                        <img src="../../assets/icons/BaseTopBar/transcribeIcon.svg" class="iconSize" />

                        <div class="transcribe-text">Transcribe Call</div>
                    </div> -->
                    <div class="flex bg-[#4853D5] items-center justify-between px-[8px]  m-[4px]  rounded-[40px]">

                        <div class="transcribe-user-badge-img"><img src="../../assets/icons/BaseTopBar/headerUsers.svg"
                                class="iconSize" /></div>
                        <div>
                            <p class="user-badge-text">2</p>
                        </div>
                    </div>
                    <div class="transcribe-drawer">
                        <BaseDrawer />
                    </div>
                </div>
            </div>

            <div class="window-controls-container right-section" style="-webkit-app-region: no-drag">
                <Button rounded aria-label="Filter" class="btn-rht-style" size="small">
                    <img src="../../assets/icons/BaseTopBar/headerTile.svg" class="iconSize" />
                </Button>
                <Button rounded aria-label="Filter" class="btn-rht-style" size="small">
                    <img src="../../assets/icons/BaseTopBar/headerMinimize.svg" class="iconSize" />
                </Button>
                <Button rounded aria-label="Filter" class="btn-rht-style" size="small">
                    <img src="../../assets/icons/BaseTopBar/headerClose.svg" class="iconSize" />
                </Button>
            </div>
        </header>


        <div class="primary-bg-color px-3 py-2 flex justify-content-between flex-wrap items-center gap-5">
            <div>
                <img src="../../assets/icons/BaseTopBar/active-profile.svg" />
            </div>
            <span>
                <span class="pl-[-8px] font-normal text-white">Joanna Jones •</span>
                <span class="font-light text text-white text-xs"> Case 1234567890</span>
            </span>
            <!-- <div class="pl-5">
                <button>
                    <img src="../../assets/icons/BaseTopBar/menu-dot.svg" />
                </button>
            </div> -->
        </div>



    </div>
</template>