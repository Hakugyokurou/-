<template>
    <div class="start">
        <div class="backdrop"></div>
        <div class="title">
            <div><img src="../assets/image/mountain.png" alt=""></div>
            <h1>每天 从这里开始<br>美好的时刻从现在开始</h1>
            <h3>星座伴侣<br>专业·有趣·专注</h3>
        </div>
    </div>
</template>

<script>
    export default {
        name: "start",
    }
</script>

<style lang="less">
    .start {
        width: 100%;
        position: relative;
        .backdrop{
            width: 100%;
            height: 100vh;
            min-height: 5.68rem;
            background: linear-gradient( #8637e7, 30%, #c764e8 );
        }
        .title{
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            color: #ffffff;
            text-align: center;
            div{
                width: 100%;
                position: absolute;
                top: 1.56rem;
                font-size: 0;
                img{
                    width: 4rem;
                }
            }
            h1{
                width: 100%;
                position: absolute;
                top: 6.96rem;
                font-size: 0.5rem;
            }
            h3{
                width: 100%;
                position: absolute;
                bottom: 0.5rem;
            }
        }
    }
</style>