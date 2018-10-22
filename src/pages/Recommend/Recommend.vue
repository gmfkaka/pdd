<template>
    <div class="recommend-container" >
        <ul class="recommend">
            <li class="recommend-item" v-for="(item,index) in recommendshoplist" :key="index">
                <!-- <img :src="item.thumb_url" alt=""> -->
            </li>
        </ul>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    export default {
        name:"Recommend",
        mounted(){
            this.$store.dispatch('reqRecommendShopList');
        },
        computed:{
            ...mapState(['recommendshoplist'])
        }
    };
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
.recommend-container
    background: #f5f5f5;
    width: 100%;
    height: 100%;
</style>