<template>
<div class="w100 h100 main-view">
    <!-- 显示导航页 -->
    <div class="breadcrumb-box">
        <TagLabel></TagLabel>
    </div>
    <div class="main-router-box animation">
        <router-view v-slot="{ Component }">
            <transition :name="transitionName"  appear>
                    <component :is="Component" />
            </transition>
        </router-view>
    </div>
    <el-footer class="el-footer">@2024 Json Ye</el-footer>
</div>
</template>

<script setup lang="ts" name='mainView'>
import TagLabel from '@/components/TagLabel.vue';
import { ref } from 'vue'
import { useRouter,useRoute } from 'vue-router';
import { get } from '../../utils/api'

let router = useRouter();
let route = useRoute();

let transitionName =ref();
router.beforeEach((to:any,from:any)=>{
    if(to.meta.title != from.meta.title){
        transitionName.value = 'slide-right'
    }
})


</script>
<style lang="scss" scoped>
    .breadcrumb-box{
        padding: 10px;
        // border-bottom: var(--el-border);
        background: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .main-router-box{
        height: calc(100% - 120px);
        overflow: auto;
    }
    .el-footer{
        display: flex;
        justify-content: center;
        align-items: center;
        background: #fff;
    }
    .main-view{
        overflow-x: hidden;
    }
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