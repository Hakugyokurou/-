<template>
    <div class="destiny">
        <swiper class="row" :options="swiperOption">
            <swiper-slide>
                <first :type="type" :time="'today'"></first>
            </swiper-slide>
            <swiper-slide>
                <first :type="type" :time="'tomorrow'"></first>
            </swiper-slide>
            <swiper-slide>
                <first :type="type" :time="'week'"></first>
            </swiper-slide>
            <swiper-slide>
                <first :type="type" :time="'month'"></first>
            </swiper-slide>
            <swiper-slide>
                <first :type="type" :time="'year'"></first>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    import First from './swiper/Spell.vue'
    import 'swiper/dist/css/swiper.css'
    import {swiper, swiperSlide} from 'vue-awesome-swiper'

    export default {
        name: "destiny",
        data() {
            return {
                type: null,
                swiperOption: {
                    autoHeight: true,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                        loadPrevNext: true,
                        renderBullet: function (index, className, text) {
                            switch (index) {
                                case 0:
                                    text = '今日';
                                    break;
                                case 1:
                                    text = '明日';
                                    break;
                                case 2:
                                    text = '本周';
                                    break;
                                case 3:
                                    text = '本月';
                                    break;
                                case 4:
                                    text = '本年';
                                    break;
                            }
                            return '<span class="' + className + '">' + text + '</span>';
                        }
                    }
                }

            }
        },
        created() {
            this.$parent.$on('fun', (val) => {
                this.type = val
            })
        },
        components: {
            First,
            swiper,
            swiperSlide
        },
        computed: {}
    }
</script>

<style lang="less">
    .destiny {
        position: relative;

        .swiper-container {
            position: relative;
            padding-top: 0.8rem !important;
        }

        .swiper-pagination-bullet-active {
            border-bottom: .05rem solid red;
            border-radius: 0;
        }

        .swiper-pagination-bullet {
            color: blueviolet;
            font-size: 0.4rem;
            width: 1rem !important;
            background: transparent !important;
            height: 0.5rem !important;
            line-height: 0.5rem;
            position: relative;
            top: -0.4rem;
        }

        .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets {
            position: absolute;
            top: .6rem;
            left: 0;
            width: 100%;
        }
    }
</style>