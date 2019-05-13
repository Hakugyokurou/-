<template>
    <div class="home">
        <top></top>
        <destiny></destiny>
        <foot></foot>
    </div>
</template>

<script>
    import Top from './home/Top.vue'
    import Destiny from './home/Destiny.vue'
    import Foot from './home/Foot.vue'

    export default {
        name: 'home',
        components: {
            Top,
            Destiny,
            Foot
        }
    }
</script>

<style lang="less">
    .home{
        min-height: 100vh;
        position: relative;
    }
</style>