<template>
<div class="w100 h100 goods-shopping">
    <div class="list-box">
        <div class="cart-box" @click="drawer = true">
            <el-badge :value="0" class="item">
                <el-icon><ShoppingCart /></el-icon>
            </el-badge>
        </div>
    </div>
    <el-drawer
        v-model="drawer"
        title="I am the title"
    >
        <span>Hi, there!</span>
    </el-drawer>
</div>
</template>

<script setup lang="ts" name='goodsShopping'>
    import { ref } from 'vue'
    const  drawer = ref(false);


</script>
<style lang="scss" scoped>
    .goods-shopping{
        display: flex;
        flex-direction: column-reverse;
        .list-box{
            width: 100%;
            padding: 10px 0px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            .cart-box{
                width: 60px;
                height: 60px;
                border-radius: 50%;
                background-color: #fff;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 30px;
            }
        }
    }
</style>