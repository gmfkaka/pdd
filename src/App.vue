<template>
    <div id="app">
        <keep-alive>
            <router-view></router-view>        
        </keep-alive>
       <tab-bar v-show="$route.meta.showBottomTabBar"></tab-bar>
    </div>
</template>

<script>
    import TabBar from './components/TabBar/TabBar'
    export default {
        name: "App",
        created(){
            this.$store.dispatch("getUserInfo")
        },
        components:{
            TabBar
        }
    }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
    #app
      width 100%
      height 100%
      background-color #f5f5f5
</style>