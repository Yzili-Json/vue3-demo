<template>
    <div>
        <el-icon :size="20" @click="drawer = true"><Operation /></el-icon>
        <el-drawer v-model="drawer" title="布局设置" class="menu-drawer" size="300" :with-header="true">
            <!--  -->
            <div class="drawer-box">
                <!-- 界面设置 -->
                <view-setting></view-setting>
            </div>
        </el-drawer>
    </div>
</template>

<script setup lang="ts" name='operation'>
    import viewSetting from './menuDrawer/viewSetting.vue'
    import { ref } from 'vue';
    const drawer = ref(false);
</script>
<style lang="scss" scoped>
    :deep(.el-drawer__header){
        margin-bottom: 0px;
        border-bottom: 1px solid var(--el-border-color);
        padding-bottom: 15px;
        span{
            color: var(--el-text-color-primary) !important;
        }
    }
    .menu-drawer{
        .drawer-box{
            display: flex;
            flex-direction:column;
        }
    }
</style>