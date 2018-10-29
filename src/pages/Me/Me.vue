<template>
    <div class="me">
        <select-login v-if="!userInfo.id"/>
        <div v-else>
            <me-top />
        </div>
    </div>
</template>

<script>
    import SelectLogin from "./../Login/SelectLogin"
    import MeTop from './MeTop';
    import {mapState} from 'vuex';
    export default {
        name:"Me",
        computed: {
            ...mapState(['userInfo'])
        },
        components:{
            SelectLogin,
            MeTop
        }
    };
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .me   
    background  #F5F5F5
    width 100%
    height 100%
</style>