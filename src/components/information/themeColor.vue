<template>
    <el-color-picker v-model="defaultTheme"  :predefine="predefineColors" @change="changeThemeColor"/>
</template>

<script setup lang="ts" name='themeColor'>
    import { ref } from 'vue';
    import { useStore } from 'vuex';
    const store = useStore()
    const el = document.documentElement
    // 获取 css 变量
    const defaultTheme = ref(getComputedStyle(el).getPropertyValue(`--el-color-primary`)) 
    // 主题颜色修改
    import { useChangeColor } from '@/utils/theme'
    const { getLightColor,getDarkColor} = useChangeColor();
    // 切换主题色
    function changeThemeColor(color:string) {
        document.documentElement.style.setProperty('--el-color-primary', color);
        document.documentElement.style.setProperty('--el-color-primary-dark-2', `${getDarkColor(color,0.1)}`)
        for(let i = 1; i <= 9;i++){
            document.documentElement.style.setProperty(`--el-color-primary-${i}`,`${getLightColor(color, i / 10)}`)
        }
        // 缓存主题色
        store.commit('getThemeColor',color)
    }
    const predefineColors = ref([
        '#ff4500',
        '#ff8c00',
        '#ffd700',
        '#90ee90',
        '#00ced1',
        '#1e90ff',
        '#c71585',
        '#c7158577',
    ])
</script>
<style lang="scss" scoped>
</style>