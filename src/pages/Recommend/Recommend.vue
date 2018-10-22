<template>
    <div class="recommend-container" v-if="recommendshoplist.length > 0">
        <ul class="recommend">
            <!-- <li class="recommend-item" v-for="(item,index) in recommendshoplist" :key="index">
                <img :src="item.thumb_url" alt="" width="100%" v-if="item.thumb_url">
                <h4 class="item-title">{{item.short_name}}</h4>
                <div class="item-bottom">
                    <span class="item-price">¥{{item.price / 100}}</span>
                    <span class="item-sales">{{item.sales_tip}}</span>
                    <button class="item-btn">找相关</button>
                </div>
            </li> -->
            <shop-list  
                tag="li"
                v-for="(item,index) in recommendshoplist" 
                :key="index"
                :item=item
            />
        </ul>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import ShopList from './../../components/ShopList/ShopList'
    export default {
        name:"Recommend",
        mounted(){
            this.$store.dispatch('reqRecommendShopList');
        },
        computed:{
            ...mapState(['recommendshoplist'])
        },
        components: {
            ShopList
        }
    };
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
.recommend-container
    background #F5F5F5
    width 100%
    height 100%
    .recommend
      display flex
      flex-direction row
      flex-wrap wrap
      background #F5F5F5
      margin-bottom 50px
</style>