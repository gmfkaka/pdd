<template>
    <div class="me">
        <div v-if="userInfo">
            主面板
        </div>
        <select-login v-else/>
    </div>
</template>

<script>
    import SelectLogin from "./../Login/SelectLogin"
    import {mapState} from 'vuex';
    export default {
        name:"Me",
        computed: {
            ...mapState(['userInfo'])
        },
        components:{
            SelectLogin
        }
    };
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .me   
    background  #F5F5F5
    width 100%
    height 100%
</style>