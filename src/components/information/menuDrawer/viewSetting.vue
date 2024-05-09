<template>
    <div class="menu-drawer">
        <div class="menu-title">
            <div class="title-box">
                <el-icon class="icon"><Tools /></el-icon>
                <span class="title">界面设置</span>
            </div>
        </div>
        <div class="drawer-control">
            <span>
                面包屑
            </span>
            <div>
                <el-switch
                    v-model="globalState.breadcrumbState"
                    @change="globalStateChange('breadcrumbState',globalState.breadcrumbState)"
                    class="ml-2"
                    style="--el-switch-on-color: var(--el-color-primary); --el-switch-off-color: var(--el-border-color)"
                />
            </div>
        </div>
        <div class="drawer-control">
            <span>
                面包屑图标
            </span>
            <div>
                <el-switch
                    v-model="globalState.breadcrumbIconState"
                    @change="globalStateChange('breadcrumbIconState',globalState.breadcrumbIconState)"
                    class="ml-2"
                    style="--el-switch-on-color: var(--el-color-primary); --el-switch-off-color: var(--el-border-color)"
                />
            </div>
        </div>
        <div class="drawer-control">
            <span>
                标签栏
            </span>
            <div>
                <el-switch
                    v-model="globalState.tagState"
                    @change="globalStateChange('tagState',globalState.tagState)"
                    class="ml-2"
                    style="--el-switch-on-color: var(--el-color-primary); --el-switch-off-color: var(--el-border-color)"
                />
            </div>
        </div>
        <div class="drawer-control">
            <span>
                标签栏图标
            </span>
            <div>
                <el-switch
                    v-model="globalState.tagIconState"
                    @change="globalStateChange('tagIconState',globalState.tagIconState)"
                    class="ml-2"
                    style="--el-switch-on-color: var(--el-color-primary); --el-switch-off-color: var(--el-border-color)"
                />
            </div>
        </div>
        <div class="drawer-control">
            <span>
                页脚
            </span>
            <div>
                <el-switch
                    v-model="globalState.footerState"
                    @change="globalStateChange('footerState',globalState.footerState)"
                    class="ml-2"
                    style="--el-switch-on-color: var(--el-color-primary); --el-switch-off-color: var(--el-border-color)"
                />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts" name='viewSetting'>
    import { ref } from 'vue'
    import { useStore } from 'vuex';
    const store = useStore();
    const globalState = store.state.globalState;
    const globalStateChange = ( key:string, value:boolean)=>{
        store.commit('getGlobalState',{key:key,value:value})
    }
</script>
<style lang="scss" scoped>
</style>