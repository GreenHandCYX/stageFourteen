import axios from 'axios'

import {AsyncStorage} from 'react-native'
// 新的axios和 axios有同样的功能,
// 但是有些默认的配置不同
const myAxios = axios.create({
   // method
   baseURL: 'http://192.168.179.25:8080',
})

myAxios.interceptors.request.use(config => {
  // 由于AsyncStorage是一个异步方法
  // 读取token
  // return config
  return new Promise((resove, reject) => {
    AsyncStorage.getItem('userinfo', (err, data) => {
      config.headers['access-token'] = data
      console.log('即将发请求')
      resove(config)
    })
  })
})
myAxios.interceptors.response.use(res => {
  // 保存token
  const token = res.headers['access-token']
  AsyncStorage.setItem('userinfo', token, (err) => {
    console.log('done')
  })
  // 验证有没有登陆
  // 为10043表示 没有登陆 
  // if (res.data.errcode === 10043) {
  //   // 导航到登陆页面
  //   AsyncStorage.setItem('status', '', (err) => {
  //     if (err) {
  //       return alert('设置失败')
  //     }
  //     // 导航到登陆页面
      
  //   })
  // }
  return res
})
export default myAxios
// var a= 32fa;lskdfa;slfkajs;dfa