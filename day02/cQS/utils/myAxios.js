//设置自定义的axios对象以对请求响应做更方便的操作
import axios from 'axios';
//引入AsyncStorage对token进行处理
import {AsyncStorage} from 'react-native'

//与原axios几乎一致，除了一些配置
const myAxios = axios.create({
  //设置每次访问的起始路径
  baseURL:'http://'
})


//对请求进行处理以在token存在时将token发至后台进行验证
myAxios.interceptors.request.use(config=>{

  //返回一个promise进行条件判断
  return new Promise((resolve,reject)=>{
    AsyncStorage.getItem('userInfo',(err,data)=>{
        //判断token是否存在
      if(err){
        return reject(config)
      }
      //将token携带在请求中发给后台
      config.headers['access-token']=data
      resolve(config)
    })
  })
})


//在响应时自动将服务器发来的token放在AsyncStorage中
myAxios.interceptors.response.use(res=>{
  const token = res.headers['access-token']
  AsyncStorage.setItem('userInfo',token,(err)=>{
    console.log()
  })
  return res;
})

export default myAxios