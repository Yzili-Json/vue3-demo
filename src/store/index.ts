import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate'

export default createStore ({
        // vueX缓存，可选择localStorage || sessionStorage
        plugins:[createPersistedState({
                storage:window.sessionStorage
        })],
        state:{
                name:'我叫白小飞', 
                themeColor:'',
                // 菜单栏状态
                isCollapse:false,
                // 锁屏状态
                lockForm:{
                        isLcokView:false,
                        lockPassword:'',
                },
                themeConfig:{
                        
                },
                // 面包屑菜单
                tagList:[
                        { name: '首页', type: 'primary',icon:'HomeFilled',path:'/'}   
                ],

                // goods 菜单
                goodsMenuList:[
                        { text:'服装',icon:'Box',path:'clothes'},
                        { text:'电器',icon:'Magnet',path:'electric'},
                        { text:'家居',icon:'Magnet',path:'house'},
                ]
        },
        mutations:{
                getThemeColor(state,newVal){
                        state.themeColor = newVal;
                },
                getIsCollapse(state,newVal){
                        state.isCollapse = newVal;
                },
                getLockForm(state,newVal){
                        state.lockForm = newVal
                },
                getTagList(state,newVal){
                        state.tagList = newVal
                }
        }
})