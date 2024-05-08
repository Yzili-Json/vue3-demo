<template>
<div class="w100 h100 main-view">
    <div class="animation h100">
        <router-view v-slot="{ Component }">
            <transition :name="transitionName"  appear>
                    <component :is="Component" />
            </transition>
        </router-view>
    </div>
    
</div>
</template>

<script setup lang="ts" name='otherView'>
    import { ref } from 'vue'
    import { useRouter } from 'vue-router'
    let transitionName = ref();
    const router = useRouter();
    router.beforeEach((to:any,from:any) =>{
        if(to.meta.title != from.meta.title){
            transitionName.value = 'slide-right'
    }   
    })
</script>
<style lang="scss" scoped>
    .animation {
        display: flex;
        width: 200%;
        & > div {
            width: 50%;
            padding: 5px 10px;
        }
        .slide-left-enter-active,
        .slide-left-leave-active,
        .slide-right-enter-active,
        .slide-right-leave-active {
            transition: transform 0.5s;
        }
        .slide-right-enter-from {
            transform: translateX(0);
        }
        .slide-right-enter-to {
            transform: translateX(-100%);
        }
        .slide-right-leave-from {
            transform: translateX(0);
        }
        .slide-right-leave-to {
            transform: translateX(-100%);
        }
        .slide-left-enter-from {
            transform: translateX(-200%);
        }
        .slide-left-enter-to {
            transform: translateX(-100%);
        }
        .slide-left-leave-from {
            transform: translateX(0);
        }
        .slide-left-leave-to {
            transform: translateX(100%);
        }
    }
</style>