import ajax from './ajax'

//1.基础路径
const BASE_URL = 'http://127.0.0.1:5050';

//2.请求方法

//2.1 请求首页轮播图
export const getHomeCasual = ()=>ajax(BASE_URL + '/api/homecasual');

//2.2 请求首页导航
export const getHomeNav = () => ajax(BASE_URL + '/api/homenav');

//2.3 请求首页商品数据
export const getHomeShopList = () => ajax(BASE_URL + '/api/homeshoplist');

//2.4 请求推荐数据
export const getRecommendShopList = () => ajax(BASE_URL + '/api/recommendshoplist');

//2.5 请求搜索列表数据
export const getSearchGoods = () => ajax(BASE_URL + '/api/searchgoods');

//2.6 请求短信验证码
export const getPhoneCode = (phone) => ajax(BASE_URL + '/api/send_code',{phone});

//2.7 手机验证码的登录
export const phoneCodeLogin = (phone,code) => ajax(BASE_URL + '/api/login_code', { phone,code },'POST');

// 2.8 用户名和密码登录
export const pwdLogin = (name, pwd, captcha) => ajax(BASE_URL + '/api/login_pwd', { name, pwd, captcha }, 'POST');

// 2.9 获取登录的用户信息
export const getUserInfo = () => ajax(BASE_URL + '/api/user_info');

// 2.10 退出登录
export const getLogOut = ()=>ajax(BASE_URL + '/api/logout');

// 2.11 加入购物车
export const addGoodsToCart = (user_id, goods_id, goods_name, thumb_url, price) => ajax(BASE_URL + '/api/add_shop_cart', {user_id, goods_id, goods_name, thumb_url, price}, 'POST');

// 2.12 请求购物车的数据
export const getCartsGoods = () => ajax(BASE_URL + '/api/cart_goods');