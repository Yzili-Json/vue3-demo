<template>
<div>
    <h1>{{ person.name }}</h1>
    <div class="test-div">
        <span>年龄：</span> <h4>{{ person.age }}</h4> <button @click="ageAdd">+</button><button @click="ageCut">-</button>
    </div>
    <!-- <div>
        <span>性别：</span> <h4>{{ person.sex }}</h4>
    </div> -->
    <TestSon :msg="person.sex" ref="testSon" @changeSex="changeSex"/>

</div>
</template>

<script setup lang="ts" name='TestIndex'>
    import TestSon from './TestSon.vue'
    import { ref,reactive,watch,watchEffect,onMounted,onUpdated} from 'vue'

    let person = reactive({
        name:"Hello Vue3",
        age:18,
        sex:'男'
    })
    function ageAdd(){
        person.age ++
    }
    function ageCut(){
        person.age --
    }
    
    const stopWatch = watchEffect(()=>{
        console.log(person.age)
        if(person.age > 20){
            console.log(person.age);
            stopWatch();
        }
        if(person.age < 0){
            person.age = 0;
        }
    });
    function changeSex(){
        console.log('子组件更改了父组件的值')
        person.sex = person.sex == '男' ? '女' : '男'
    };
    // 获取子组件的值
    const testSon = ref(null)
    function setTestSon(){
        // console.log(testSon.value.testName)
    }
    onMounted(()=>{
        // changeSex();
        setTestSon()
    })
    onUpdated(()=>{
        console.log('更新完毕')
    })
</script>
<style lang="scss" scoped>
    .test-div{
        span{
            display: inline-block;
            width: 120px;
            color: red;
        }
    }
</style>