import {
    HOME_CASUAL,
    HOME_NAV
    ,HOME_SHOP_LIST
} from './mutations-types'

export default {
    [HOME_CASUAL](state,{homecasual}){
        state.homecasual = homecasual;
    },
    [HOME_NAV](state, { homenav }) {
        state.homenav = homenav;
    },
    [HOME_SHOP_LIST](state, { homeshoplist }) {
        state.homeshoplist = homeshoplist;
    }
}