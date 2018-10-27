<template>
    <div class="me">
        <select-login></select-login>
    </div>
</template>

<script>
    import SelectLogin from "./../Login/SelectLogin"
    export default {
        name:"Me",
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