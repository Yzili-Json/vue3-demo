<template>
<div class="h100 w100 home">
    <div class="home-T">
        <el-row :gutter="20" class="h100">
            <el-col :span="8"><div class="bg-f h100"></div></el-col>
            <el-col :span="16">
                <div class="h100">
                    <el-row :gutter="20" class="h100">
                        <el-col :span="12"><div class="bg-f is-home-view mb-2"></div></el-col>
                        <el-col :span="12"><div class="bg-f is-home-view mb-2"></div></el-col>
                        <el-col :span="12"><div class="bg-f is-home-view mt-2"></div></el-col>
                        <el-col :span="12"><div class="bg-f is-home-view mt-2"></div></el-col>
                    </el-row>
                </div>
            </el-col>
        </el-row>
    </div>
    <div class="home-B">
        <el-row :gutter="20" class="h100">
            <el-col :span="8"><div class="bg-f h100"></div></el-col>
            <el-col :span="16"><div class="bg-f h100"></div> </el-col>
        </el-row>
    </div>
</div>
</template>

<script setup lang="ts" name='homeView'>
import { ref } from 'vue'



</script>
<style lang="scss" scoped>
    .home{
        display: flex;
        flex-direction:column;
        justify-content:space-between;
        .home-T{
            width: 100%;
            height: 49%;
            .is-home-view{
                height: 96%;
            }
            .mb-2{
                margin-bottom: 1%;
            }
            .mt-2{
                margin-top: 1%;
            }
        }
        .home-B{
            width: 100%;
            height: 49%;
        }
    }
</style>