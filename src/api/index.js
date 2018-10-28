import ajax from './ajax'

//1.基础路径
const BASE_URL = 'http://localhost:3000/api';

//2.请求方法

//2.1 请求首页轮播图
export const getHomeCasual = ()=>ajax(BASE_URL + '/homecasual');

//2.2 请求首页导航
export const getHomeNav = () => ajax(BASE_URL + '/homenav');

//2.3 请求首页商品数据
export const getHomeShopList = () => ajax(BASE_URL + '/homeshoplist');

//2.4 请求推荐数据
export const getRecommendShopList = () => ajax(BASE_URL + '/recommendshoplist');

//2.5 请求搜索列表数据
export const getSearchGoods = () => ajax(BASE_URL + '/searchgoods');

//2.6 请求短信验证码
export const getPhoneCode = (phone) => ajax(BASE_URL + '/send_code',{phone});

//2.7 手机验证码的登录
export const phoneCodeLogin = (phone,code) => ajax(BASE_URL + '/login_code', { phone,code },'POST');

// 2.8 用户名和密码登录
export const pwdLogin = (name, pwd, captcha) => ajax(BASE_URL + '/login_pwd', { name, pwd, captcha }, 'POST');