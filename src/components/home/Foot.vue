<template>
    <div class="foot">
        <div>
            <ul :class="{check: show}" @click="show=1">
                <li><img src="../../assets/image/home.png" alt=""></li>
                <li>首页</li>
            </ul>
            <ul :class="{check: !show}" @click="show=0">
                <li><img src="../../assets/image/headline.png" alt=""></li>
                <li>头条</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "foot",
        data () {
            return {
                show: 1
            }
        }
    }
</script>

<style lang="less">
.foot{
    height: 1.6rem;
    div{
        width: 100%;
        display: flex;
        justify-content: space-around;
        height: 1.6rem;
        position: absolute;
        bottom: 0;
        ul{
            margin-top: -.2rem;
            height: .6rem;
            padding: .3rem;
            color: #6a6a6a;
            li{
                text-align: center;
            }
        }
        .check{
            color: #b73ed6;
            border-radius: 50%;
            background: #ffffff;
        }
    }
}
</style>