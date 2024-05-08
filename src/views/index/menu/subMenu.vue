<template>
    <template v-for="(item,index) in menuList" :key="index">
        <el-sub-menu :index="item.path" v-if="item.children && item.children.length > 0">
            <template #title>
                <el-icon v-if="item.meta.icon">
                    <component :is="item.meta.icon"></component>
                </el-icon>
                <span>{{ item.meta.title }}</span>
            </template>
            <el-menu-item :index="item.path+'/'+children.path" v-for="(children,Index) in item.children" :key="Index">{{ children.meta.title }}</el-menu-item>
        </el-sub-menu>
        <el-menu-item :index="item.path" v-else>
            <el-icon v-if="item.meta.icon">
                <component :is="item.meta.icon"></component>
            </el-icon>
            <template #title>{{item.meta.title}}</template>
        </el-menu-item>
    </template>
</template>

<script setup lang="ts" name='subMenu'>
import { useRouter } from "vue-router"
import { ref } from 'vue'
const router = useRouter();
const menuList = ref()
menuList.value = router.options.routes[0].children;

</script>
<style lang="scss" scoped>
</style>