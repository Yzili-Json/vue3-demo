<template>
    <div class="w100 h100">
        <el-row :gutter="20" class="h100">
            <el-col :span="2">
                <goods-menu @menuClick="menuClick"></goods-menu>
            </el-col>
            <el-col :span="20" class="list">
                <goods-list :goodsListArray="goodsListArray"></goods-list>
            </el-col>
            <el-col :span="2">
                <goods-shopping></goods-shopping>
            </el-col>
        </el-row>
    </div>
</template>

<script setup lang="ts" name='goods'>
    import goodsMenu from './menu/goodsMenu.vue';
    import goodsList from './list/goodsList.vue';
    import goodsShopping from './shopping/goodsShopping.vue';
    import { ref,reactive } from 'vue'
    // 定义一个列表
    
    const goodsArray:{[key:string] : any} =({
        clothes:[
            {
                src:'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',srcList:['https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg'],title:'欲买桂花同载酒，终不似少年游。醉里挑灯看剑，梦回吹角连营。',price:'29.99',sales:'10086'
            },
            {
                src:'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',srcList:['https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg'],title:'君子固穷，穷且志坚。不坠青云之志。',price:'20.00',sales:'1086'
            },
            {
                src:'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',srcList:['https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg'],title:'八百里分麾下炙，五十弦分塞外声。',price:'129.05',sales:'106'
            },
            {
                src:'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',srcList:['https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg'],title:'五花马，千金裘，呼儿将出换美酒，与尔同销万古愁',price:'29.99',sales:'10086'
            },
            {
                src:'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',srcList:['https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg'],title:'欲买桂花同载酒，终不似少年游',price:'20.00',sales:'1086'
            },
            {
                src:'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',srcList:['https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg'],title:'欲买桂花同载酒，终不似少年游',price:'129.05',sales:'106'
            },
            {
                src:'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',srcList:['https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg'],title:'欲买桂花同载酒，终不似少年游',price:'29.99',sales:'10086'
            },
            {
                src:'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',srcList:['https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg'],title:'欲买桂花同载酒，终不似少年游',price:'20.00',sales:'1086'
            },
            {
                src:'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',srcList:['https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg'],title:'欲买桂花同载酒，终不似少年游',price:'129.05',sales:'106'
            },
            {
                src:'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',srcList:['https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg'],title:'欲买桂花同载酒，终不似少年游',price:'29.99',sales:'10086'
            },
            {
                src:'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',srcList:['https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg'],title:'欲买桂花同载酒，终不似少年游',price:'20.00',sales:'1086'
            },
            {
                src:'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',srcList:['https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg'],title:'欲买桂花同载酒，终不似少年游',price:'129.05',sales:'106'
            },
            {
                src:'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',srcList:['https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg'],title:'欲买桂花同载酒，终不似少年游',price:'29.99',sales:'10086'
            },
            {
                src:'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',srcList:['https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg'],title:'欲买桂花同载酒，终不似少年游',price:'20.00',sales:'1086'
            },
            {
                src:'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',srcList:['https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg'],title:'欲买桂花同载酒，终不似少年游',price:'129.05',sales:'106'
            },
            
        ],
        electric:[
            {
                src:'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',srcList:['https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg'],title:'欲买桂花同载酒，终不似少年游',price:'229.99',sales:'10086'
            },
            {
                src:'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',srcList:['https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg'],title:'欲买桂花同载酒，终不似少年游',price:'289.00',sales:'1006'
            },

        ],
        house:[
            {
                src:'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',srcList:['https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg'],title:'欲买桂花同载酒，终不似少年游',price:'291.99',sales:'210086'
            },
        ]
    })
    const goodsListArray = ref([]);
    const menuClick = (event: string | number)=>{
        goodsListArray.value = goodsArray[event];
    }
</script>
<style lang="scss" scoped>
.list{
    max-height:740px;
    overflow:auto;
}
</style>