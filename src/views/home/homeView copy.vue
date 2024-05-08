<template>
<div class="h100 w100">
    <el-row :gutter="0" class="h100">
        <el-col :span="4"><div class=""></div></el-col>
        <el-col :span="16">
            <div class="home-view h100">
                <div class="home-info">
                    <div class="info-box">
                        <!-- 头像 -->
                        <div class="info-img">
                            头像
                        </div>
                        <!-- 用户信息 -->
                        <div class="info-user">
                            <div class="user-box">
                                <el-text class="mx-1">姓名：</el-text>
                                <el-text class="mx-1">我叫白小飞</el-text>
                            </div>
                            <div class="user-box">
                                <el-text class="mx-1">年龄：</el-text>
                                <el-text class="mx-1">188</el-text>
                            </div>
                        </div>
                        <!-- 当前日期 -->
                        <div class="info-time">
                            {{ currentTime }}
                        </div>
                    </div>
                    
                </div>
            </div>
        </el-col>
        <el-col :span="4"><div class=""></div></el-col>
    </el-row>
</div>
</template>

<script setup lang="ts" name='homeView'>
import { ref,watchEffect } from 'vue'

const currentTime = ref('');
const setDate = (oDate:any) =>{
    const year = oDate.getFullYear();
    const month = (oDate.getMonth() + 1).toString().padStart(2, '0')
    const day = oDate.getDate().toString().padStart(2, '0')
    const hour = oDate.getHours().toString().padStart(2, '0')
    const minutes = oDate.getMinutes().toString().padStart(2, '0')
    const seconds = oDate.getSeconds().toString().padStart(2, '0')
    return year+'-'+month+'-'+day+' '+hour+':'+minutes+':'+seconds
}

watchEffect(()=>{
    setInterval(() => {
        currentTime.value= setDate(new Date())
    }, 1000);
})

</script>
<style lang="scss" scoped>
    .home-view{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .home-info{
            width: 100%;
            height: 90%;
            display: flex;
            align-items: center;
            flex-direction: column;
            .info-box{
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                flex-direction: column;
                .info-img{
                    min-width:166px;
                    min-height: 198px;
                    border: 1px solid #999399;
                    border-radius: 25px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                }
                .info-user{
                    width: 100%;
                    margin-top: 24px;
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                    .user-box{
                        width: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        span:first-child {
                            font-weight: bold;
                            font-size: 18px;
                            min-width: 60px;
                        }
                        span:last-child{
                            min-width: 100px;
                        }
                    }
                }
                .info-time{
                    width: 100%;
                    min-width: 166px;
                    margin-top: 24px;
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                }
            }
            
        }
    }
</style>