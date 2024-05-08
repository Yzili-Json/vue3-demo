<template>
    <el-icon :size="20" @click="toggleFullScreen"><FullScreen /></el-icon>
</template>

<script setup lang="ts" name='fullScreen'>
    import { ref } from 'vue'
    const isFullScreen = ref(false)
    const toggleFullScreen = ()=>{
        if (!document.fullscreenElement && !isFullScreen.value) {
            // 进入全屏
            document.documentElement.requestFullscreen().then(() => {
                isFullScreen.value = true;
            });
        } else {
            // 退出全屏
            if (document.exitFullscreen) {
                document.exitFullscreen().then(() => {
                    isFullScreen.value = false;
                });
            }
        }
    }
</script>
<style lang="scss" scoped>
</style>