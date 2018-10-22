import {
    getHomeCasual,
    getHomeNav,
    getHomeShopList,
    getRecommendShopList
} from '../api'

import {
    HOME_CASUAL,
    HOME_NAV,
    HOME_SHOP_LIST,
    RECOMMEND_SHOP_LIST
} from './mutations-types'

export default {
    //1.获取首页的轮播图
    async reqHomeCasual({ commit }) {
        const result = await getHomeCasual();
        commit(HOME_CASUAL, { homecasual: result.message.data })
    },
    //2.获取首页的导航
    async reqHomeNav({ commit }) {
        const result = await getHomeNav();
        commit(HOME_NAV, { homenav: result.message.data })
    },
    //3.获取首页的商品列表
    async reqHomeShopList({ commit }) {
        const result = await getHomeShopList();
        commit(HOME_SHOP_LIST, { homeshoplist: result.message.goods_list })
    },
    //4.获取推荐商品的数据
    async reqRecommendShopList({ commit }) {
        const result = await getRecommendShopList();
        commit(RECOMMEND_SHOP_LIST, { recommendshoplist: result.message.data })
    }
}