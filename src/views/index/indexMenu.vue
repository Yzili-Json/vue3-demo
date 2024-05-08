<template>
    <div class="h100 w100">
        <el-menu
            background-color="#545c64"
            class="h100"
            :default-active="defaultActive"
            :collapse="isCollapse"
            text-color="#fff"
            :router = "true"
            :unique-opened="true"
            @open="handleOpen"
            @close="handleClose"
        >   
            <subMenu ></subMenu>
        </el-menu>
    </div>
</template>

<script setup lang="ts" name='indexMenu'>
    import subMenu from './menu/subMenu.vue';
    import { useStore } from "vuex"
    import { useRouter,useRoute } from 'vue-router';
    import { watch,ref,onMounted,onUnmounted,computed} from "vue";
    const router = useRouter();
    const route = useRoute();

    const store = useStore();

    const defaultActive = ref()
    // 获取当前路由对象
    const currentRoute = router.currentRoute.value;
    defaultActive.value = currentRoute.path;

    const handleOpen = ((key:string,keyPath:string[])=>{
        // console.log(key,keyPath)
    });
    const handleClose = ((key:string,keyPath:string[])=>{
        // console.log(key,keyPath)
    });
    watch(() => route.path, (newValue, oldValue) => { //监听路由路径是否发生变化，之后更改defaultActive
        defaultActive.value = newValue;
    })


    // 媒体查询更改菜单宽度
    const isCollapse = computed (()=> store.state.isCollapse)
    // 更改父组件宽度
    const indexEmit = defineEmits(['viewSize'])
    function handleResize(){
        // isCollapse = window.innerWidth < 768;
        store.commit('getIsCollapse',window.innerWidth < 768)
    }

    onMounted(()=>{
        handleResize(); //初始化检查
        window.addEventListener('resize',handleResize)
    })
    onUnmounted(()=>{
        window.removeEventListener('resize',handleResize)
    })

</script>
<style lang="scss" scoped>
</style>