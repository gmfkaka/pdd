import Vue from 'vue'
import {
    HOME_CASUAL,
    HOME_NAV,
    HOME_SHOP_LIST,
    RECOMMEND_SHOP_LIST,
    SEARCH_GOODS,
    USER_INFO,
    CART_GOODS_LIST,
    ADD_GOODS_COUNT,
    REDUCE_GOODS_COUNT,
    SELECTED_ALL_GOODS
} from './mutations-types'

export default {
    [HOME_CASUAL](state, { homecasual }) {
        state.homecasual = homecasual;
    },
    [HOME_NAV](state, { homenav }) {
        state.homenav = homenav;
    },
    [HOME_SHOP_LIST](state, { homeshoplist }) {
        state.homeshoplist = homeshoplist;
    },
    [RECOMMEND_SHOP_LIST](state, { recommendshoplist }) {
        state.recommendshoplist = recommendshoplist;
    },
    [SEARCH_GOODS](state, { searchgoods }) {
        state.searchgoods = searchgoods;
    },
    [USER_INFO](state, { userInfo }) {
        state.userInfo = userInfo;
    },
    [CART_GOODS_LIST](state, { cartgoods }) {
        state.cartgoods = cartgoods;
    },
    [ADD_GOODS_COUNT](state,{goods}){
        goods.buy_count++
    },
    [REDUCE_GOODS_COUNT](state,{goods}){
        if(goods.buy_count){
            goods.buy_count--;
            if(goods.buy_count === 0 ){
                const index = state.cartgoods.indexOf(goods);
                state.cartgoods.splice(index,1);
            }
        }   
    },
    [SELECTED_ALL_GOODS](state,{isSelected}){
        state.cartgoods.forEach((goods,index)=>{
            if(goods.checked){ //该属性存在
                goods.checked = !isSelected
            }else{ //该属性不存在
                Vue.set(goods,'checked',!isSelected);
            }
        })
    }
}