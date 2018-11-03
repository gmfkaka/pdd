<template>
    <div class="recommend-container">
        <ul class="recommend" v-if="userInfo.id && recommendshoplist.length > 0">
            <shop-list  
                tag="li"
                v-for="(item,index) in recommendshoplist" 
                :key="index"
                :item=item
                :clickCellBtn="dealWithCellBtnClick"
            />
        </ul>
        <select-login v-else/>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import ShopList from './../../components/ShopList/ShopList'
    import { addGoodsToCart } from '../../api';
    import SelectLogin from "./../Login/SelectLogin"
    import {Toast} from 'mint-ui';

    export default {
        name:"Recommend",
        mounted(){
            this.$store.dispatch('reqRecommendShopList');
        },
        computed:{
            ...mapState(['recommendshoplist','userInfo'])
        },
        components: {
            ShopList,
            SelectLogin
        },
        methods:{
            //监听商品点击
            async dealWithCellBtnClick(goods){
                //1.发送请求
                let result = await addGoodsToCart(this.userInfo.id, goods.goods_id, goods.goods_name, goods.thumb_url, goods.price);
                console.log(result);
                Toast({
                    message: "加入购物车成功",
                    position: 'center',
                    duration: 3000
                });
            }
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