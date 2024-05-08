<template>
<div>
    <h2>{{ msg }}</h2>
    <button @click="clickTest">更改性别</button>
</div>
</template>

<script setup lang="ts" name='TestSon'>
    defineProps<{
        msg:string,
    }>()
    import { ref,defineExpose ,onMounted} from "vue"
    let testName = ref('hello World');
    defineExpose({testName});
    // 接收父组件的方法
    const emit = defineEmits(['changeSex']);
    const clickTest = ()=>{
        emit('changeSex')
    }
    onMounted(()=>{
        
    })

</script>
<style lang="scss" scoped>
</style>