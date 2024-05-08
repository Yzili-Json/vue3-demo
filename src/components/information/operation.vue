<template>
    <el-icon :size="20" @click="drawer = true"><Operation /></el-icon>
    <el-drawer v-model="drawer" title="项目配置" class="menu-drawer" size="20%" :with-header="true">
        <!--  -->
    </el-drawer>
</template>

<script setup lang="ts" name='operation'>
    import { ref } from 'vue';
    const drawer = ref(false);
</script>
<style lang="scss" scoped>

</style>