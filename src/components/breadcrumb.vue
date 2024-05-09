<template>
    <el-breadcrumb :separator-icon="ArrowRight" v-if="globalState.breadcrumbState">
        <!-- 固定一个首页面包屑 -->
        <el-breadcrumb-item to="/" v-if="breadTitle !== '首页'">
            <div class="breadcrumb-list">
                <el-icon  v-if="globalState.breadcrumbIconState">
                    <HomeFilled />
                </el-icon>
                <span>首页</span>
            </div>
        </el-breadcrumb-item>
        <template v-for="(item, index) in breadList">
            <el-breadcrumb-item
                v-if="item.name"
                :key="index"
                :to="item.path"
            >
            <div class="breadcrumb-list">
                <el-icon v-if="item.meta.icon && globalState.breadcrumbIconState">
                    <component :is="item.meta.icon"  />
                </el-icon>
                <span>
                    {{item.meta.title }}
                </span>
            </div>
        </el-breadcrumb-item>
        </template>
    </el-breadcrumb>

</template>

<script setup lang="ts" name='breadcrumb'>
    import { ArrowRight } from '@element-plus/icons-vue'
    import { ref , watch, onMounted} from 'vue'
    import { useRoute } from 'vue-router';
    import { useStore } from 'vuex';

    const route = useRoute();
    const store = useStore();
    const globalState = store.state.globalState;
    // 面包屑
    const breadList = ref([] as any[]);
    const breadTitle = ref()
    let getMatched=()=>{
        // console.log(route.matched); //打印路径数组
        breadList.value = route.matched.filter(item => item.meta && item.meta.title);
        breadTitle.value = breadList.value[0].meta.title;
    }   
    onMounted(() => {
        getMatched()
    })
    watch(() => route.path, (newValue, oldValue) => { //监听路由路径是否发生变化，之后更改面包屑
        // breadList.value = route.matched.filter(item => item.meta && item.meta.title);
        breadList.value = route.matched.filter(item => item.meta && item.meta.title);
        breadTitle.value = breadList.value[0].meta.title;
    })

</script>
<style lang="scss" scoped>
    .breadcrumb-list{
        font-size: 16px;
        display: flex;
        align-items: center;
        justify-content:center;
        .el-icon{
            margin-right: 8px;
        }
    }
</style>