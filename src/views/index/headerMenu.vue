<template>
<div class="header-menu-box">
    <div class="header-menu-left">
        <div>
            <el-icon :size="24" class="menu-left-fold" @click="collapseNew"><Fold /></el-icon>
            <!-- 面包屑 -->
            <breadcrumb></breadcrumb>
        </div>
    </div>
    <div class="header-mern-right">
        <userInfo></userInfo>
    </div>

    
</div>
</template>

<script setup lang="ts" name='headerMenu'>
    import breadcrumb from '@/components/breadcrumb.vue';
    import userInfo from '@/components/userInfo.vue';
    import { ref } from 'vue';
    import { useStore } from 'vuex';
    const store = useStore()
    
    // 更改菜单栏状态
    const collapseNew = ()=>{
        store.commit('getIsCollapse',!store.state.isCollapse)
    }

</script>
<style lang="scss" scoped>
    .header-menu-box{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        width: 100%;
        font-size: 16px;
    .header-menu-left{
        cursor: pointer;
        .menu-left-fold{
            margin-right: 30px;
        }
        & > div {
            display: flex;
            align-items: center;
            justify-content:center;
        }
    }
}

</style>