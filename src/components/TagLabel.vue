<template>
    <div class="tag-left">
        <div class="tabs-menu">
            <el-tabs
                v-model="tagIndex"
                type="card"
                class="demo-tabs"
                @tab-click="tagClick" @tab-remove="tagClose"
            >
                <el-tab-pane v-for="item in tags" :key="item.name" :name="item.path" :closable="item.name != '首页'">
                    <template #label>
                        <el-button size="default" :type="item.type">
                            <el-icon v-if="item.icon" class="tag-icon">
                                <component :is="item.icon" />
                            </el-icon>
                            <span>
                                {{ item.name }} 
                            </span>
                        </el-button>
                    </template>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
    <div class="tag-right">
        <el-dropdown split-button size="default" type="primary" @click="allClose" @command="handleCommand">
                全部关闭
            <template #dropdown>
                <el-dropdown-menu >
                    <el-dropdown-item command="1">关闭其他</el-dropdown-item>
                    <el-dropdown-item command="2">关闭右侧</el-dropdown-item>
                    <el-dropdown-item command="3">关闭左侧</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>
</template>

<script setup lang="ts" name='TagLabel'>
    import { ref , onMounted , watch} from 'vue'
    import { useRoute,useRouter } from 'vue-router'
    import { useStore } from 'vuex'
    const route = useRoute();
    const router = useRouter();
    const store = useStore();
    interface TagsItem {
        name: string
        type: string
        icon: string
        path: string
    }
    const tagIndex = ref('/');
    const tags = ref<TagsItem[]>([
        // { name: '首页', type: 'primary',icon:'HomeFilled',path:'/' },
    ])
    tags.value = store.state.tagList;
    const breadList = ref([] as any[]);
    let getMatched = ()=>{
        breadList.value = route.matched.filter(item => item.meta && item.meta.title);
        breadList.value.forEach((list:any) => {
            let index = tags.value.findIndex(item => item.name == list.meta.title)
            if(index == -1){
                if(list.children.length == 0  && list.meta.title != '首页'){
                    tags.value.push(
                        { name: list.meta.title, type:'',icon:list.meta.icon,path:list.path}
                    )
                }
            }
        });
        let index = tags.value.findIndex(item => item.path == route.path);
        tags.value.forEach((tag:any)=>{
            tag.type = '';
        })
        tags.value[index].type = 'primary';
        tagIndex.value = route.path;
    }
    onMounted(()=>{
        getMatched();
    })
    watch(()=>route.path,(newValue,oldValue)=>{
        breadList.value = route.matched.filter(item => item.meta && item.meta.title);
        breadList.value.forEach((list:any) => {
            let index = tags.value.findIndex(item => item.name == list.meta.title)
            if(index == -1){
                if(list.children.length == 0  && list.meta.title != '首页'){
                    tags.value.push(
                        { name: list.meta.title, type:'',icon:list.meta.icon,path:list.path}
                    )
                }
            }
        });
        let index = tags.value.findIndex(item => item.path == route.path);
        tags.value.forEach((tag:any)=>{
            tag.type = '';
        })
        tags.value[index].type = 'primary';
        tagIndex.value = route.path;
    })
    watch(()=>tags.value,(newValue)=>{
        store.commit('getTagList',newValue)
    },
    {deep:true}
    )
    const tagClose = (name:any)=>{
        let index = tags.value.findIndex(item => item.path == name);
        if(tags.value[index].path == route.path){
            let pathIndex = index - 1 < 0 ? 0 : index - 1;
            router.push(tags.value[pathIndex].path)
        }
        tags.value.splice(index,1);
    }
    
    const tagClick = (tabItem:any) =>{
        const fullPath = tabItem.props.name;
	    router.push(fullPath);
    }
    // 全部关闭
    const allClose = ()=>{
        tags.value = [];
        tags.value.push(
            { name: '首页', type: 'primary',icon:'HomeFilled',path:'/'},
        )
        router.push('/')
    }
    const handleCommand = (command:string)=>{
        // console.log(command) 1 其他，2右侧，3左侧
        let index = tags.value.findIndex(item => item.path == tagIndex.value)
        if(command == '1'){
            tags.value = tags.value.filter(item => item.path == tagIndex.value);
            if(tagIndex.value !== '/'){
                tags.value.unshift(
                    { name: '首页', type: 'primary',icon:'HomeFilled',path:'/'},
                )
            }
        }else if(command == '2'){
            let j = 0;
            for(let i = 0; i < tags.value.length;i++){
                if( i > index){
                    j ++
                }
            }
            tags.value.splice(index + 1 , j)
        }else if(command == '3'){
            if(index == 0){

            }else{
                tags.value.splice(1 , index - 1);
            } 
        }
    }
</script>
<style lang="scss">
.tag-left{
    width: calc(100% - 140px);
    // overflow-x: auto;
    height: 100%;
    display: flex;
    align-items: center;
    flex-wrap:nowrap;
    .tabs-menu{
        width: 100%;
        position: relative;
    }
    .demo-tabs{
        .el-tabs__header{
            margin:0px;
            border-bottom: none;
            .el-tabs__nav{
                border: none;
            }
            .el-tabs__item{
                padding: 0px;
                border: none;
            }
        }
        
    }
    .el-tabs--top.el-tabs--card>.el-tabs__header .el-tabs__item:nth-child(2){
        padding-left: 6px;
    }
    .el-tabs--card>.el-tabs__header .el-tabs__item.is-active.is-closable{
        padding-left: 6px;
    }
}
.tag-right{
    width: 120px;
}

</style>