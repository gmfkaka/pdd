import axios from 'axios';

export default function ajax(url = '', params = {}, type = 'GET') {
    //1.定义promise对象
    let promise;
    return new Promise((resolve, reject) => {
        //2.判断请求方式
        if ('GET' === type) {
            //2.1 拼接请求字符串
            let parmaStr = '';
            Object.keys(params).forEach(key => {
                parmaStr += key + '=' + params[key] + '&';
            })
            //2.2过滤最后的&
            if (parmaStr != '') {
                parmaStr = parmaStr.substr(0, parmaStr.lastIndexOf('&'));
            }
            //2.3完整路径
            url += '?' + parmaStr;
            //2.4发送GET请求
            promise = axios.get(url);
        } else if ('POST' === type) {
            promise = axios.post(url, params);
        }
        //3返回请求结果
        promise.then((response) => {
            resolve(response.data)
        }).catch(error => {
            reject(error)
        })
    })
}