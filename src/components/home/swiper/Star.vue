<template>
    <div class="star">
        <ul>
            <li v-for="(item, index) in evaluate" :key="index"><img :src=item alt=""></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "star",

        props: {
            size: {
                type: String,
                default: 'xs'
            },
            num: {
                type: Number,
                default: 5
            },
            eval: {
                type: Number,
                default: 4
            }
        },
        methods: {

        },
        computed: {

            evaluate() {

                let result = [];

                let score = Number(this.eval);

                while (result.length < Math.floor(score)) {

                    result.push(require(`@/assets/image/star${this.size}_on.png`));
                }

                if (score % 1 !== 0) {

                    result.push(require(`@/assets/image/star${this.size}_half.png`));
                }

                while (result.length < this.num) {

                    result.push(require(`@/assets/image/star${this.size}_off.png`));
                }

                return result
            }
        }
    }
</script>

<style scoped lang="less">
    .star {
        display: inline-block;

        ul {
            display: flex;
            justify-content: center;
            li{
                margin-left: .05rem;
            }
        }
    }

</style>