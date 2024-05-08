<template>
    <div class="logo-view-box">
        <el-image :src="url" class="h100 w100" />
    </div>
</template>

<script setup lang="ts" name='logoView'>
    const url= 'https://element-plus.org/images/element-plus-logo.svg';
    
</script>
<style lang="scss" scoped>
.logo-view-box{
    height: 28px;
}
</style>