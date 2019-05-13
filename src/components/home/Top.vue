<template>
    <div class="top">
        <div class="top-backdrop"></div>
        <div class="top-con">
            <div class="cut" @click="go"><img src="../../assets/image/switch.png" alt=""></div>
            <div class="con">
                <h3>星座伴侣</h3>
                <plan class="star" :data="today"></plan>
            </div>
        </div>
    </div>
</template>

<script>
    import Plan from './Plan.vue'

    export default {
        name: "top",
        data() {
            return {
                today: null
            }
        },
        components: {
            Plan
        },
        methods: {
            go () {
                this.$router.push('/select')
            }
        },
        created () {
            let date = new Date();
            let arr = [20, 19, 21, 21, 21, 22, 23, 23, 23, 23, 22, 22];
            let num = date.getDate() < arr[date.getMonth()] ? date.getMonth() - 3 : date.getMonth() - 2;
            let obj = JSON.parse(window.localStorage.getItem('item'));
            this.today = obj?obj:this.$store.state.starMap[num];
        },
        mounted() {
            this.$parent.$emit('fun',this.today.Name)
        }
    }
</script>

<style lang="less">
    .top {
        position: relative;

        .top-backdrop {
            min-height: 5rem;
            background: url(../../assets/image/today.png) no-repeat;
            background-size: 7.5rem 4.19rem;
        }

        .top-con {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;

            .cut {
                position: absolute;
                top: 1rem;
                left: 0.42rem;
            }

            .con {
                margin-top: 1rem;
                text-align: center;
                font-size: .4rem;
                color: #ffffff;
            }
            .star{
                color: #4e4e4e;
                padding-top: .6rem;
            }
        }
    }
</style>