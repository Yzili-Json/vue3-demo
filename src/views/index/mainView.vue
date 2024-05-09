<template>
<div class="w100 h100 main-view">
    <!-- 显示导航页 -->
    <div class="breadcrumb-box" v-if="globalState.tagState">
        <TagLabel></TagLabel>
    </div>
    <div class="main-router-box animation">
        <router-view v-slot="{ Component }">
            <transition :name="transitionName"  appear>
                    <component :is="Component" />
            </transition>
        </router-view>
    </div>
    <el-footer class="el-footer" v-if="globalState.footerState">
        <div class="footer-box">
            @2024 Json Ye
        </div>
    </el-footer>
</div>
</template>

<script setup lang="ts" name='mainView'>
import TagLabel from '@/components/TagLabel.vue';
import { ref } from 'vue'
import { useRouter,useRoute } from 'vue-router';
import { get } from '../../utils/api'
import { useStore } from 'vuex'
let router = useRouter();
let route = useRoute();
const store = useStore();
const globalState = store.state.globalState
let transitionName =ref();
router.beforeEach((to:any,from:any)=>{
    if(to.meta.title != from.meta.title){
        transitionName.value = 'slide-right'
    }
})


</script>
<style lang="scss" scoped>
    .breadcrumb-box{
        padding: 0px 10px;
        // border-bottom: var(--el-border);
        background: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .main-router-box{
        // height: calc(100% - 70px);
        flex: 1;
        overflow: auto;
    }
    .el-footer{
        display: flex;
        justify-content: center;
        align-items: center;
        background: #fff;
        height: auto;
        .footer-box{
            height: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
    .main-view{
        overflow-x: hidden;
        display: flex;
        flex-direction: column;
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