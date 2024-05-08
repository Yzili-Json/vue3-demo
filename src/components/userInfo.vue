<template>
<div class="user-info">
    <div class="info">
        <information></information>
    </div>
    <div class="user">
        <div class="name">{{ userName }}</div>
        <div class="img"></div>
    </div>
</div>
</template>

<script setup lang="ts" name='userInfo'>
    import information from './information/information.vue';
    import { computed } from 'vue'
    import { useStore } from 'vuex'
    const store = useStore()
    const userName = computed(()=> store.state.name)
</script>
<style lang="scss" scoped>
    .user-info{
        display: flex;
        justify-content: center;
        align-items: center;
        .user{
            min-width: 120px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-left: 10px;
            .name{
                text-align: center;
                color: #000;
                font-weight: bold;
            }
            .img{
                width: 50px;
                height: 50px;
                border: 1px solid #ccc;
                border-radius: 50%;
                cursor: pointer;
                margin-left: 12px;
            }
        }
    }
</style>