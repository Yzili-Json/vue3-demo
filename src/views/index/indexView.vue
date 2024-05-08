<template>
    <div class="common-layout">
        <el-container class="container-box">
            <el-header class="el-header-box">
                <header-view></header-view>
            </el-header>
            <el-container>
                <el-aside :width="!isCollapse ? '200px' :'65px'">
                    <index-menu></index-menu>
                </el-aside>
                <el-main>
                    <main-view></main-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script setup lang="ts" name='indexView'>
    import headerView from './headerView.vue';
    import indexMenu from './indexMenu.vue';
    import mainView from './mainView.vue';
    import { useStore } from 'vuex';
    import { ref,computed } from 'vue';
    const store = useStore()
    const isCollapse = computed (()=> store.state.isCollapse)

</script>
<style lang="scss" scoped>
.common-layout{
    height:100vh;
    .container-box{
        height:100%;
    }
}
.el-header-box{
    border-bottom: var(--el-border)
}
.el-main{
    background-color: #e6e6e6;
    padding: 0px;
}
</style>