<template>
    <el-icon :size="20" @click="lockNew"><Lock /></el-icon>
</template>

<script setup lang="ts" name='lockView'>
    import { ref } from 'vue'
    import { useStore } from 'vuex'
    import { ElMessage, ElMessageBox } from 'element-plus'
    const store = useStore()
    const lockNew = ()=>{
        ElMessageBox.prompt('请输入锁屏密码', '', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            inputPattern:/\S+/,
            inputErrorMessage: '锁屏密码不能为空',
        })
        .then(({ value }) => {
            let form = {
                isLcokView:true,
                lockPassword:value,
            }
            document.documentElement.requestFullscreen().then(() => {
                store.commit('getLockForm',form)
            });
        })
        .catch(() => {
            ElMessage({
                type: 'info',
                message: '取消锁屏',
            })
        })
    }
</script>
<style lang="scss" scoped>
</style>