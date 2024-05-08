<template>
    <div class="information">
        <div>
            <lockViewVue></lockViewVue>
        </div>
        <div>
            <fullScreen></fullScreen>
        </div>
        <div>
            <themeColor></themeColor>
        </div>
        <div>
            <operation></operation>
        </div>
    </div>
</template>

<script setup lang="ts" name='information'>
    import themeColor from './themeColor.vue';
    import fullScreen from './fullScreen.vue';
    import lockViewVue from './lockView.vue';
    import operation from './operation.vue';
</script>
<style lang="scss" scoped>
    .information{
        display: flex;
        justify-content: center;
        align-items: center;
        div{
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0px 5px;
            cursor: pointer;
        }
    }
</style>