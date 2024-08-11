<script setup lang="tsx">
import Button from 'primevue/button';

</script>

<style scoped>

.bottom-navigation-container{
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 12px 12px 12px 12px;
    background: rgba(13, 0, 93, 1);
}

.custom-btm-pill{
    position: relative;
}





/* class="window-controls-container left-section" */

</style>

<template>
    
    <footer>
       
        <div class="bottom-navigation-container">
            <div class="bottom-nav">
                <router-link :to="{ name: 'home' }">
                    <button  aria-label="Filter" 
                    class=" text-white  pt-1 pb-1 ml-2 mr-2 rounded-[20px] border-transparent hover:bg-[#FFFFFF33]  focus:outline-none focus:bg-[#FFFFFF33] focus:ring-[#FFFFFF33] focus:ring-opacity-50 p-3 transition-all duration-300"  size="small" >
                    <img src="../../assets/icons/BaseBottomBar/bottom-nav-home.svg" class="iconSize" />    
                </button>
                    
                
                </router-link>
     
                <router-link :to="{ name: 'transcribe' }">
                    <button  aria-label="Filter" 
                    class=" text-white  pt-1 pb-1 ml-2 mr-2 rounded-[20px] border-transparent hover:bg-[#FFFFFF33]  focus:outline-none focus:bg-[#FFFFFF33] focus:ring-[#FFFFFF33] focus:ring-opacity-50 p-3 transition-all duration-300" size="small" >
                    <img src="../../assets/icons/BaseBottomBar/bottom-nav-transcription.svg" class="iconSize" />
                    </button>
                </router-link>

                <router-link :to="{ name: 'discussion' }">
                    <button  aria-label="Filter" 
                    class=" text-white  pt-1 pb-1 ml-2 mr-2 rounded-[20px] border-transparent hover:bg-[#FFFFFF33]  focus:outline-none focus:bg-[#FFFFFF33] focus:ring-[#FFFFFF33] focus:ring-opacity-50 p-3 transition-all duration-300" size="small" >
                    <img src="../../assets/icons/BaseBottomBar/bottom-nav-chat.svg" class="iconSize" style="width: 42px;" />
                    </button>
                </router-link>

                <router-link :to="{ name: 'backup' }">
                    <button  aria-label="Filter" 
                    class=" text-white  pt-1 pb-1 ml-2 mr-2 rounded-[20px] border-transparent hover:bg-[#FFFFFF33]  focus:outline-none focus:bg-[#FFFFFF33] focus:ring-[#FFFFFF33] focus:ring-opacity-50 p-3 transition-all duration-300" size="small" >
                    <img src="../../assets/icons/BaseBottomBar/bottom-nav-chart.svg" class="iconSize" />
                    </button>

                </router-link>
     
              </div>
        </div>        
    </footer>
   
</template>