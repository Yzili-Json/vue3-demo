<template>
    <!-- xs	<768px		—
    sm	≥768px		—
    md	≥992px		—
    lg	≥1200px		—
    xl	≥1920px -->
    <el-row :gutter="20">
        <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4" v-for="(item,index) in goodsListArray" :key="index">
            <div class="list-box">
                <div class="img-box" @click="imgPreview">
                    <el-image  :src="item.src" fit="cover"
                        :zoom-rate="1.2"
                        :max-scale="7"
                        :min-scale="0.2"
                        :preview-src-list="item.srcList"
                        :initial-index="4"
                    />
                </div>
                <div class="title-box" :title="item.title">
                    {{ item.title }}
                </div>
                <div class="list-info">
                    <div class="price">
                        <span>￥</span>
                        <span class="count">{{ item.price }}</span>
                    </div>
                    <div class="sales">
                        <span>累计销量:</span>
                        <span>{{ item.sales > 999 ? '999+': item.sales }}</span>
                    </div>
                    
                </div>
            </div>
        </el-col>
    </el-row>
</template>

<script setup lang="ts" name='goodsList'>

    // 产品列表，需要的信息全部是一致的
    // 获取父组件传递的产品信息defineProps
    defineProps<{
        goodsListArray:array
    }>()
    import { ref,reactive } from 'vue'
    interface Item {}
    const srcList = ref<Item[]>([])
    const imgPreview = ()=>{
        let src = 'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg'
        srcList.value.push(src)
    }
</script>
<style lang="scss" scoped>
    .list-box{
        background-color: #fff;
        width: 100%;
        border-radius: 6px;
        padding: 10px;
        display: flex;
        flex-direction:column;
        margin-bottom:12px;
        .img-box{
            width: 100%;
            height: 168px;
            cursor: pointer;
            .el-image{
                width: 100%;
                height: 100%;
            }
        }
        .title-box{
            padding: 5px 0px;
            width: 100%;
            height: 60px;
            overflow:hidden; 
            text-overflow:ellipsis;
            display:-webkit-box; 
            -webkit-box-orient:vertical;
            -webkit-line-clamp:2;
            font-size: 16px;
            color: #000;
            cursor: pointer;
        }
        .title-box:hover{
            color: #909399;
        }
        .list-info{
            width: 100%;
            display: flex;
            align-items: center;
            .price{
                width: 60px;
                .count{
                    font-size: 24px;
                    color: #F56C6C;
                }
            }
            .sales{
                width: calc(100% - 60px);
                font-size: 12px;
                color: #909399;
                display: flex;
                align-items: center;
                justify-content:flex-end;
                margin-top: 8px;
            }
        }
    }
</style>