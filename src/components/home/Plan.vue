<template>
    <div class="plan">
        <div><img :src=url alt=""></div>
        <h2>{{data.Name}}</h2>
        <h3>{{data.EnglishName}}</h3>
        <p>{{data.Time}}</p>
    </div>
</template>

<script>
    export default {
        name: "plan",
        data () {
          return {
              url: null
          }
        },
        props: ['data'],
        mounted() {
            this.url = require(`@/assets/plan/${this.data.Img}`)
        }
    }
</script>

<style lang="less">
    .plan{
        text-align: center;
        color: inherit;
        div{
            font-size: 0;
            img{
                width: 1.2rem;
            }
        }
        h2{
            margin-top: .26rem;
            font-size: .4rem;
            font-weight: 500;
        }
        p{
            margin-top: .11rem;
        }
    }
</style>