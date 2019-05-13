<template>
    <div class="select">
        <div class="backdrop"></div>
        <div class="con">
            <div class="title"><h2>选择星座</h2></div>
            <ul class="item">
                <li v-for="(item,index) in star" :key="index" @click="set(item)"><plan :data="item"></plan></li>
            </ul>
            <div class="back"><img src="../assets/image/cancel.png" alt="" @click="back"></div>
        </div>
    </div>
</template>

<script>
    import Plan from './home/Plan.vue'

    export default {
        name: "mSelect",
        components: {
            Plan
        },
        computed: {
            star () {
                return this.$store.state.starMap
            }
        },
        methods: {
            set (e) {
                window.localStorage.setItem('item', JSON.stringify(e));
                this.$router.push('/home')
            },
            back () {
                this.$router.go(-1)
            }
        }
    }
</script>

<style lang="less">
    .select{
        height: 100vh;
        position: relative;
        overflow: hidden;
        .backdrop{
            width: 100%;
            height: 100vh;
            background: linear-gradient( #8637e7, 30%, #c764e8 );
        }
        .con{
            position: absolute;
            top: 0;
            left: 0;
            .title{
                margin-top: 1rem;
                text-align: center;
                h2{
                    font-size: .5rem;
                    color: #ffffff;
                }
            }
            .item{
                padding-top: .5rem;
                display: flex;
                flex-wrap: wrap;
                li{
                    padding-top: .2rem;
                    width: 33.3%;
                    color: #ffffff;
                }
            }
            .back{
                padding-top: .4rem;
                text-align: center;
            }
        }
    }
</style>