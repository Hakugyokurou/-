<template>
    <div class="spell">
        <div v-if="show">
            <div class="star-index" v-if="timer==='today'||timer==='tomorrow'">
                <ul>
                    <li>综合指数:
                        <star :eval="eval(data.all)"></star>
                    </li>
                    <li>爱情指数:
                        <star :eval="eval(data.love)"></star>
                    </li>
                    <li>工作指数:
                        <star :eval="eval(data.work)"></star>
                    </li>
                    <li>幸运颜色: {{data.color}}</li>
                </ul>
                <ul>
                    <li>健康指数:
                        <star :eval="eval(data.health)"></star>
                    </li>
                    <li>财运指数:
                        <star :eval="eval(data.money)"></star>
                    </li>
                    <li>速配星座: {{data.QFriend}}</li>
                    <li>幸运数字: {{data.number}}</li>
                </ul>
            </div>
            <div class="text" v-else>
                <div class="box" v-if="data.mima">
                    <div class="title">
                        <div><img src="../../../assets/image/mima.png" alt=""></div>
                        <h2>年度密码</h2>
                        <p>{{data.mima.info}}</p>
                    </div>
                    <h3>年度说明</h3>
                    <p>{{data.mima.text[0]}}</p>
                </div>
                <div class="box" v-if="data.finance">
                    <div class="title">
                        <div><img src="../../../assets/image/mima.png" alt=""></div>
                        <h2>财运</h2>
                    </div>
                    <p>{{data.finance[0]}}</p>
                </div>
                <div class="box" v-if="data.health">
                    <div class="title">
                        <div><img src="../../../assets/image/health.png" alt=""></div>
                        <h2>健康</h2>
                    </div>
                    <p v-if="typeOf(data.health)">{{data.health}}</p>
                    <p v-else>{{data.health[0]}}</p>
                </div>
                <div class="box" v-if="data.job">
                    <div class="title">
                        <div><img src="../../../assets/image/job.png" alt=""></div>
                        <h2>工作</h2>
                    </div>
                    <p>{{data.job}}</p>
                </div>
                <div class="box" v-if="data.love">
                    <div class="title">
                        <div><img src="../../../assets/image/love.png" alt=""></div>
                        <h2>恋情</h2>
                    </div>
                    <p v-if=typeOf(data.love)>{{data.love}}</p>
                    <p v-else>{{data.love[0]}}</p>
                </div>
                <div class="box" v-if="data.money">
                    <div class="title">
                        <div><img src="../../../assets/image/money.png" alt=""></div>
                        <h2>财运</h2>
                    </div>
                    <p>{{data.money}}</p>
                </div>
                <div class="box" v-if="data.work">
                    <div class="title">
                        <div><img src="../../../assets/image/work.png" alt=""></div>
                        <h2>工作</h2>
                    </div>
                    <p>{{data.work}}</p>
                </div>
            </div>
            <div class="text" v-if="timer==='today'||timer==='tomorrow'">
                <div class="box">
                    <div class="title">
                        <div><img src="../../../assets/image/todayfate.png" alt=""></div>
                        <h2>今日概述</h2>
                    </div>
                    <p>{{data.summary}}</p>
                </div>
            </div>
            <div class="text">
                <div class="box">
                    <div class="title">
                        <div><img src="../../../assets/image/crown.png" alt=""></div>
                        <h2>每日推荐</h2>
                    </div>
                    <p><img src="../../../assets/image/footer.jpg" alt=""></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Star from './Star.vue'

    export default {
        name: "spell",
        props: ['type', 'time'],
        data() {
            return {
                data: null,
                show: false,
                timer: null
            }
        },
        components: {
            Star
        },
        watch: {
            type() {
                let arr = [this.type, this.time];
                this.$store.dispatch('get', arr);
                setTimeout(function () {
                    this.data = this.$store.state.data[this.time];
                    this.show = true
                }.bind(this), 1000);
                this.timer = this.time;
            }
        },
        methods: {
            eval(e) {
                return parseInt(e) * 0.05;
            },
            typeOf (e) {
                return e.constructor===String;
            }
        }
    }
</script>

<style lang="less">
    .spell {
        width: 7.5rem;
        .star-index {
            display: flex;
            justify-content: space-around;
            padding-top: .3rem;
            padding-bottom: .5rem;

            &:after {
                content: "";
                width: 100%;
                position: absolute;
                top: 3.5rem;
                transform: scale(.8);
                border-bottom: .01rem solid #6a6a6a;
            }

            li {
                margin-top: .2rem;
                color: #4e4e4e;
            }
        }

        .text {
            margin: 0 .5rem;


            .box {
                margin-top: .5rem;

                .title {
                    padding: .2rem 0;
                    position: relative;
                    font-size: .4rem;

                    div {
                        position: absolute;
                        top: .16rem;
                        font-size: 0;
                    }

                    h2 {
                        padding-left: .6rem;
                    }
                }

                p {
                    color: #4e4e4e;
                    font-size: .3rem;
                    line-height: 1.2;

                    img {
                        width: 100%;
                    }
                }
            }
        }
    }
</style>