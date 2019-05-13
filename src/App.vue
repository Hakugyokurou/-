<template>
    <div id="app">
        <transition>
            <div v-if="show"><router-view/></div>
            <start v-else></start>
        </transition>
    </div>
</template>

<script>
    import Start from './components/Start.vue'

    export default {
        name: 'app',
        data () {
          return {
              show: false
          }
        },
        created () {
            let deviceWidth = document.documentElement.clientWidth;
            if (deviceWidth > 1200) {
                document.documentElement.style.fontSize = 1200 / 12 + "px";
            } else {
                document.documentElement.style.fontSize = deviceWidth / 7.5 + "px";
            }
            this.$store.dispatch('getDf');
        },
        mounted () {
            setTimeout( function () {
                this.show = true }.bind(this), 3000 );

        },
        components: {
            Start,
        }
    }
</script>

<style lang="less">
    body {
        font-size: 0.3rem !important;
        #app{
            width: 7.5rem;
            margin: 0 auto;
            .v-leave-active {
                transition: opacity .5s
            }
            .v-leave-active {
                opacity: 0
            }
            .v-enter{
                padding-left: 8rem;
            }
            .v-enter-active{
                transition: padding-left 1.5s;
            }
        }
    }
</style>