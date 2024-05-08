<template>
    <div class="w100 h100 goods-menu">
        <el-menu
            :default-active="active"
            class="goods-menu-list"
        >
            <el-menu-item  v-for="(item,index) in menuList" :key="index" :index="item.path" @click="goodsMenuClick(item.path)">
                <el-icon v-if="item.icon">
                    <component :is="item.icon"  />
                </el-icon>
                <template #title>{{ item.text }}</template>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script setup lang="ts" name='goodsMenu'>
    import { ref,reactive,onMounted } from 'vue';
    import { useStore } from 'vuex';
    const  store = useStore();
    const menuList = reactive(store.state.goodsMenuList);
    const active = ref(menuList[0].path);
        // 获取父组件方法defineEmits
    const parentMethod = defineEmits(['menuClick']);
    const goodsMenuClick = (path:string)=>{
        parentMethod('menuClick', path)
    }
    onMounted(()=>{
        goodsMenuClick(menuList[0].path)
    })

</script>
<style lang="scss" scoped>
    .goods-menu{
        display: flex;
        flex-direction: column;
        align-content:flex-start;
        .goods-menu-list{
            height: 100%;
        }
    }
</style>