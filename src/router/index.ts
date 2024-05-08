import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"/",
      name:"indexView",
      component:()=>import('@/views/index/indexView.vue'),
      children:[
          {
            path: '/',
            name: 'home',
            component: ()=>import('@/views/home/homeView.vue'),
            meta:{
              title:'首页',
              icon:'HomeFilled'
            }
          },
          {
            path:'/user',
            name: 'user',
            component:() => import('@/views/user/userView.vue'),
            meta:{
              title:'用户管理',
              icon:'UserFilled'
            }
          },
          {  
            path: '/other',
            name: 'other',
            component: () => import('@/views/other/otherView.vue'),
            meta:{
              title:"其他",
              icon:'Tools'
            },
            redirect:{name:'config'},
            children:[
              {
                path:'config',
                name: 'config',
                component:() => import('@/views/other/configView.vue'),
                meta:{
                  title:'配置'
                }
              },
              {
                path:'settings',
                name: 'settings',
                component:() => import('@/views/other/settingsView.vue'),
                meta:{
                  title:'设置'
                }
              },
            ]
          },
          {
            path:'/goods',
            name:'goods',
            component:()=> import('@/views/goods/goods.vue'),
            meta:{
              title:'商品列表',
              icon:'Goods'
            },
          }
      ]
    }
  ]
})

export default router
