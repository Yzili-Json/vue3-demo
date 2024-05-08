<template>
    <div class="w100 h100 header-view">
            <div class="header-view-box logo-view">
                <LogoView></LogoView>
            </div>
            <div class="header-view-box header-menu">
                <headerMenu></headerMenu>
            </div>
    </div>
</template>

<script setup lang="ts" name='headerView'>
import LogoView from './logoView.vue';
import headerMenu from './headerMenu.vue';

</script>
<style lang="scss" scoped>
    .header-view{
        display: flex;
    }
    .header-view-box{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        height: 100%;
    }
    .logo-view{
        width: 200px;
        min-width: 150px;
    }
    .header-menu{
        width: calc(100% - 200px);
    }

</style>