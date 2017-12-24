# React-Native (RN)

移动App(需要学会不同系统的编程语言: java/c++/oc ...)
特点: 性能好, 开发和维护没有web快
手机: 打电话，发短信, 上网
赛班系统: 移动App
安卓系统: qq,微信是 App
IOS系统
黑莓
​      

移动Web (js,html,css)
特点: 性能一般， 开发维护比App快
  (移动端网页，网站)

# 混合App

> 一部分是原生App的，一部分是网页
> 比如现在的微信: 原生为主，网页为辅

混合App的极端之一:
几乎全部以网页做为的开发的核心。

- cordova, ionic,phonegap
- appcan, hbuild
- 本质就是一个没有搜索框，没有菜单键等的浏览器，有一个默认首页(就是我们开发的页面)

// 1 前端= 1 ios + 1 android + 1windowsphone + 1 黑莓....

# React-Native

> react jsx语法
> 需要提交将开发所需要的环境(软件及相关配置)准备好

# 关于sdk

- 解压到一个英文路径
- 1.新建一个一变量
  - 变量名: ANDROID_HOME
  - 变量值: sdk解压后的路径, 我电脑上是 c:\iscDev\sdk
- 2.将sdk中的 `platform-tools` 和 `tools` 目录的路径添加到环境变量PATH中

# gradle



1. 在C 盘当前用户文件夹中新建一个名为 `.gradle` 的文件夹
   需要把.grandle-wrapper中的内容解压到.gradle文件夹中

# 开始开发一个App

> 之前安装过`npm install -g yarn react-native-cli`
>
> 1. 在想开始项目的文件夹中打开cmd
>    输入`react-native init 文件夹名` // 初始化一个项目的基本结构
>    示例: 假设在桌面输入: `react-native init testApp` 这个命令会在桌面生成testApp 文件夹，会包含基本的代码结构!
> 2. 如果让生成的代码能够运行起来!
>    a. 要有一个安卓手机
>     启用这个手机的【开发人员选项】 ...(开发者选项)
>     (不同的手机开启方式会不太一样)(有些手机默认是开启)
>     开启之后连接到电脑，会有一个【已连接到USB调试】的选项
>     **搜索自己手机的类型，都能找到对应的方式**
>    b. 运行前一定要将手机通过数据线【连接到电脑】
>     如何验证手机是否连接到电脑上了：在命令行中输入：`adb devices`
>     [注意观察手机],手机可能会有一个是否允许连接到电脑的提示，全部选择同意
>    c. 在上面1中生成的文件夹中打开cmd: 输入: `react-native run-android`
>     接下来软件就会被自动安装到手机上运行了!
>     **在电脑上第一次执行这个命令时, 会连网下载一些东西**
>
> #### d. 开启这个app的手机悬浮窗权限, 否则页面是白屏
>
>   【设置】->【应用管理】->【已安装】->找到软件，启用权限
>
> 补充一个注意点: 启用usb调试
>











# RN使用

在app.js中暴露一个组件就可以

## 在RN中html的标签都不能使用

//要使用RN中封装好的标签(组件)来使用

```jsx
import {
	View,//相当于div
	Text,//相当于span或者p，用于写文字
 	Image, // 相当于img标签，用于指定图片
    StyleSheet, // 用来创建样式,生成后，
     //即使重新渲染了还是原来的对象
  	TextInput, // 即是input又是textarea
}from 'react-native'

```



## Text

所有文字必须使用Text包裹,包括空格



## 写样式不能写css文件

### //要以内联对象(或数组)的方式来写样式,不需要写单位

```jsx
//对象形式
<View>
	<text
	style={{width:200}}
    <Text>
</View>
 //数组形式
 <Text
   style={ [{color: '#f00', fontSize: 40}, {fontSize: 20}] }//属性名相同时会被最后一个覆盖
 >测试多个样式</Text>
      
      
```

​	**缺点**:每次setState都会创建一个新的style对象

### //StyleSheet用来创建样式，生成后即使重新渲染也是原来的对象

//把需要的方法写在create方法中

//参数的key不是普通样式属性

//参数的value都是样式对象

```jsx
<Text style={styles.mytext}></Text>

const styles = StyleSheet.create({
  mytext: {
    color: '#DB7676',
    marginTop: 20,
    marginBottom: 18,
    fontSize: 80,
  },
  mytext2: {

  }
})
```







### 所有元素的display默认是:flex

#### flexDirection:'column' RN中默认是从上往下排





> 样式3中形式:
>
> 对象的形式
>
> 数组的形式
>
> StyleSheet.create创建的形式
>
> 默认的布局方式是flex且是从上到下排列



## 图片

1.引入静态文件时需要用require引入

```jsx
<Image source={ require('./assets/images/demo.jpg') }/>
```

### 注：require的参数必须直接是一个变量或字符串不可以直接拼接字符串



2.图片中嵌入网络地址图片

//注意:网络图片必须指定宽高才能看的到

```jsx
<Image source={{uri:'网络地址'}} style={{width:300,height:400}}>
```

RN图片标签可以自动选择设备对应的图片进行加载

​	如andriod加载demo.android.jpg

uri也可加载本地图片







## TextInput

TextInput即是input也是textarea

通过onChangText修改只读，并且可以直接设置为当前value所代表的值

```jsx
<TextInput onChangeText={txt=>{this.setState({txt})}} value={this.state.txt}></TextInput>
```





# Button

只能简单的修改背景色和文字颜色

```jsx
<Button title='按钮' onPress={}/>	
```





# 解决连接手机容易中断问题

1. 安装之后，可以使用无线连接，来更新
   a. 让手机和电脑连接同一个局域网(wifi)

   b. 电脑开热点让手机连接

   c. 手机开热点让电脑连接

2. 查看电脑ip -. 是【无线网卡】的IP

   摇一摇手机 - 选择 【Dev-Setting】 然后在倒数第三个选项中，输入自己的ip:8081

   **注意点: 如果电脑连接的wifi换了，手机上输入的地址也要变换****









# 对于不能点击的元素，如果需要注册点击事件的话需要使用特定的组件包裹一下

> RN中大部分组件不能够注册点击事件(onPress或onLongPress), 比如 View, Image。 如果需要给这些组件注册事件，则需要在这些
>
> 组件外层包裹: `Touchable` 开头的组件, 如下:
>
> **TouchableHighlight**点击元素高亮
>
> **TouchableNativeFeedback** 原生特有，扩散小圆圈(仅安卓中可以使用)
>
> **TouchableOpacity**透明度变化
>
> **TouchableWithoutFeedback**无任何特性

可以给以上4个组件添加`onPress` 属性来注册点击事件，或者添加`onLongPress`来注册长按事件!

```jsx
// 示例
import {TouchableOpacity} from 'react-native'
const App = () => (
  <TouchableOpacity>
    <View style={{backgroundColor: '#f0f'}}>
      <Text>TouchableOpacity</Text>
      <Text>哈哈</Text>
    </View>
  </TouchableOpacity>
  <TouchableNativeFeedback
    onPress={e => console.warn('TouchableNativeFeedback')}
    >
    <View style={{backgroundColor: '#ff0'}}>
      <Text>TouchableNativeFeedback</Text>
      <Text>哈哈</Text>
    </View>
  </TouchableNativeFeedback>
  <TouchableHighlight
    onPress={e => console.warn('我是Highlight')}
    >
    <View style={{backgroundColor: '#f00'}}>
      <Text>嘻嘻</Text>
      <Text>哈哈</Text>
    </View>
  </TouchableHighlight>
)
```





#  console.warn可以在手机上看到警告信息



# ScrollView普通滚动插件

**ScrollView在页面内容超出显示屏或规定的边界时就会显示滚动条**

**页面布局比较随意，不是列表时使用!**

```jsx
//使用ScrollView标签代替内容超出的view标签即可
<ScrollView>
  <Image source={require('./assets/images/demo.jpg')} onPress={e => alert('Image')} />
  <Image source={require('./assets/images/demo.jpg')} onPress={e => alert('Image')} />
  <Image source={require('./assets/images/demo.jpg')} onPress={e => alert('Image')} />
  <Image source={require('./assets/images/demo.jpg')} onPress={e => alert('Image')} />
  <Image source={require('./assets/images/demo.jpg')} onPress={e => alert('Image')} />
  <Image source={require('./assets/images/demo.jpg')} onPress={e => alert('Image')} />
  <Image source={require('./assets/images/demo.jpg')} onPress={e => alert('Image')} />
</ScrollView >
```





# FlatList长列表滚动组件

#### 长列表滚动:只会加载当前屏幕显示的而不会全部一次性加载

#### 在RN中使用FlatList组件处理长列表滚动(包括渲染列表,下拉刷新和上拉加载)

//注:通常上拉加载新的数据必须有数据的更新否则不会生效

```jsx
  <FlatList 
       data={this.state.list}//代表要渲染的列表数据
       refreshing={this.state.refreshing}//原生特有，代表下拉刷新时顶部的加载圆圈动画是否显示，通常设置为false,在下拉时先true请求完毕后再false
       renderItem={this._renderItem}//设置每条数据的格式
       onRefresh={e=>{
    	//下拉刷新触发的方法
         this.setState({refreshing:true})
         setTimeout(()=>{
          this.setState({refreshing:false})
         },2000)
         //可以在手机上看到警告信息
         console.warn('下拉refresh')
       }}
       onEndReachedThreshold={10}//设置最后一条数据距当前显示屏的底部的距离，从而在小于这个值的时候触发上拉加载事件
       onEndReached={e=>{
    	//上拉加载触发的方法
           console.warn('快滚动完了')
           this.state.list.push({id: 5, name: '你好吗4'})
           this.state.list.push({id: 6, name: '你好吗5'})
           this.setState({})
       }}
       />


 _renderItem({item,index}){
  	//此处{item,index}是对data属性中的数据进行解构,item代表每条数据,index代表每条数据的索引
    return (
      <View key={index} style={{height: 200, backgroundColor: '#E464F1'}}>
      <Text>{item.id},{item.name}</Text>
      </View>
    )
  }
```





# 路由

在RN中通过react-navigation和react-router-native（类似于react-router-dom）设置路由

#### 通过组件的props.navigation.navigate('路由')可以完成路由的跳转

### StackNavigator普通路由这个方法返回值是个组件

```jsx
//1.引入
import {StackNavigator} from 'react-navigation'
//2.设置路由组件
const Home = (props)=>{
  return (
    <View>
      <Text>首页</Text>
      <Button onPress={e=>{
          //跳转到c路由所匹配的组件
        props.navigation.navigate('c')
      }}
       title='去个人中心' />
    </View>
  )
}
const Center = (props) => {
  return (
    <View>
      <Text>
        个人中心
      </Text>
      <Button
      onPress= {e => {
        // 导航到首页
        // console.log(props)
        props.navigation.navigate('h')
      }}
       title='回到首页'/>

    </View>
    )
}


//3.通过StackNavigator对象设置路由匹配规则
const StackRouter = StackNavigator({
  c:{
    //第一个书写的会作为默认的来显示
    screen:Center,//表示匹配规则对应的组件
    navigationOptions:{
         // header: null,//设置是否有返回上一页按钮，默认有
         headerTitle: '个人中心'//设置导航标题
    }
  },
  h: {
    // screen属性指定当前组件匹配到时要呈现的组件
    screen: Home,
    navigationOptions: {
      header: null,
      headerTitle: '首页'
    }
  }
})
//4.将StackNavigator暴露出去
//StackRouter必须作为最外层的标签来使用
export default class App extends React.Component{
  render(){
    return (<StackRouter></StackRouter>)
  }
}
```

### TabNavigator选项卡(tabbar)路由

(如微信底部菜单栏，有动画效果,并且可以通过触摸左右滑动切换)

```jsx
//用法同StackNavigator几乎一致

import React from 'react'
import {
  View,
  Text,
  Image,
  TextInput,
  Button
} from 'react-native'

// 引入路由组件
import {TabNavigator} from 'react-navigation'

// TabNavigator是个方法，可以用来配tabbar
const Home = (props) => {
  return (
    <View>
      <Text>首页</Text>
      <Button onPress={
        e => {
          props.navigation.navigate('c')
        }
      } title='去个人中心'/>
    </View>)
}

const Center = (props) => {
  return (
    <View>
      <Text>
        个人中心
      </Text>
      <Button
      onPress= {e => {
        // 导航到首页
        // console.log(props)
        props.navigation.navigate('h')
      }}
       title='回到首页'/>

    </View>
    )
}

// 配置路由
// 参数是对象, 对象中每一个属性都是一个规则
const TabRouter = TabNavigator({
  c: {
    // title: '个人中心',
    screen: Center,
    navigationOptions: {
      // header: null,
      headerTitle: '个人中心',
      title: '个人中心啊'
    }
  },
  h: {
    // title: '首页啊',
    // screen属性指定当前组件匹配到时要呈现的组件
    screen: Home,
    navigationOptions: {
      // header: null,
      title: '首页啊',//会同时设置导航条和标签栏的title  
      headerTitle: '首页'
    }
  }
}, {
  tabBarPosition: 'bottom'//设置tabbar的 位置,android手机默认在顶部,需设置
})

// 暴露返回值
export default TabRouter
```



### 结合使用StackRouter和TabRouter

**本质是使用StackRouter设置一条指向TabRouter的路由**

```jsx
import React from 'react'
import {
  View,
  Text,
  Image,
  TextInput,
  Button
} from 'react-native'
import {TabNavigator, StackNavigator} from 'react-navigation'



// Tab中对应的组件
const HomeScreen = (props) => (<View>
  <Text style={{fontSize: 38}}>首页</Text>
  <Button onPress={
    e => props.navigation.navigate('friends')
  } title='进入朋友圈'/>
  </View>)
const CenterScreen = () => (<View><Text style={{fontSize: 38}}>个人中心</Text></View>)
const ConcatScreen = () => (<View><Text style={{fontSize: 38}}>联系人</Text></View>)

//普通路由Stack对应组件
const SignInScreen = (props) => (<View>
  <Text style={{fontSize: 38}}>登陆</Text>
  <Button onPress={
    e => props.navigation.navigate('tabbar')
  } title='跳转到tabBar'/>
  </View>)
const FriendsScreen = () => (<View><Text style={{fontSize: 38}}>朋友圈</Text></View>)


// 进行路由配置
// TabBar组件路由配置

const TabRouter = TabNavigator({
  home: {
    screen: HomeScreen
  },
  center: {
    screen: CenterScreen
  },
  concat: {
    screen: ConcatScreen
  }
})

//普通路由Stack配置
const StackRouter = StackNavigator({
  signin: {
    screen: SignInScreen
  },
  friends: {
    screen: FriendsScreen
  },
  // 随便写个key，代表tabbar的路由
  tabbar: {
    screen: TabRouter,
    navigationOptions: {
      // header: null // 
    }
  }
})
export default StackRouter
```







# props.navigation.navigate('路由'，{})第二个参数表示动态路由的参数,通过props.navigation.state.params获取路由参数



# 在RN中发请求：

> 有一个仿浏览器XMlHttpRequest封装的XMlHttpRequest对象
>
> fetch
>
> axios（基于XMlHttpRequest并且不对Dom进行操作）

无法使用jquery,zepto,vue-resource这些,因为他们都是基于dom操作的,而RN中不存在DOM

```jsx
  axios.get('http://xxx.com')
    .catch(err => {
      console.warn('请求出错')
    })
    axios.post('http://bxg.huoqishi.net/signin', {
      username: '前端学院',
      password: '123456'
    })
    .then(res => {
      console.log(res.data)
      console.warn('请求成功!')
      this.setState({user: res.data.user})
    })
    .catch(err => {
      console.warn('请求出错!')
    })
```









# 引入react-native-vector-icons包处理图标

引入后就有一个<Icon/>标签来控制图标

其中包括FontAwesome







# 可以通过axios拦截器统一对请求地址做处理

```js
axios.interceptors.request.use(config=>{
  //config中有一个url属性代表请求地址
  config.url='http://127.0.0.1'+config.url
  return config
})
```





axios允许自己定义一个axios对象

新的axios和axios有同样的功能，但是优先默认配置不同

```js
const myAxios = axios.create({
  baseURL:'http://127.0.0.1'
})
export default myAxios 


//用的时候用这个自定义的axios替换原来的axios
//这样每次请求地址就会自动加上baseURL
```









# RN中无componentWillMount







# RN不是网页所以不存在cookie，也不存在localstorage，利用token解决

客户端需要将服务器端响应的token保存起来,并且在每次请求时携带token

//token可能在响应头也可能在响应主体中

//将token存在AsyncStorage中

//通过axios拦截器在每次请求中加入token

![token与sessionid](.\images\token与sessionid.png)



# 在react-native中AsyncStorage和localStorage几乎一致但是他是异步的需要一个回调函数

```js
  AsyncStorage.setItem('userinfo',token,(err)=>{
    console.log('done')
  })
```







# 利用axios处理AsyncStorage存储与异步读取token

```js
//读取时可以利用promise对象在获取到token时才发送token并返回config配置
myAxios.interceptors.request.use(conig=>{
  return new Promise((resolve,reject)=>{
   AsyncStorage.getItem('userInfo',(err,data)=>{
     if(err){
       return reject(config)
     }
     //将accses-token存储在请求头中
     config.headers['access-token']=data
     console.log('即将发请求')
     resolve(config)
   })
  })
})



//服务器会自动在返回的响应中添加assess-token
//需要在每次响应中存储token，避免token过期
myAxios.interceptors.response.use(res=>{
  //保存token
  const token=res.headers['access-token']
  AsyncStorage.setItem('userinfo',token,(err)=>{
    console.log('done')
  })
})
```







# 登录验证分析

1.如果从未登录则需要发送请求存储用户状态到storage,下次访问时直接判断storage中有没有该用户状态就可以

2.而token是用于搭配后台判断跳转到指定页面时用户是否登录



# 打开相册，访问图片，视频,相机

使用第三方包react-native-image-crop-picker

需要更改平台编码

如在android平台使用

> 修改android目录下build/gradle

```jsx
 dependencies {
   //指定为2.2.x以上版本，指Android底层需要使用的包的版本
        classpath 'com.android.tools.build:gradle:2.2.3'

        // NOTE: Do not place your application dependencies here; they belong
        // in the individual module build.gradle files
    }
```

> 修改android/app/build.gradle

```jsx
   defaultConfig {
       ...
       vectorDrawables.useSupportLibrary = true;//添加一行,调取原生硬件库
    }
```

> 修改android/app/src/AndroidManifest.xml

```js
<uses-permission android:name="android.permission.CAMERA"/>//添加,调取摄像头
```











RN中FormData需要指定图片地址

```js
const fd = new FormData()
fd.append('cover',{
  uri:image.path,//指定图片路径
  type:'image/jpeg'
})
```









# RN中使用react-native包中的Animated实现动画

给需要加动画的标签前加Animated. ,如<Animated.View>

变化值设为new Animated.Value(),如left:new Animated.Value()

使用Animated.timing进行变化

```JS
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  View
} from 'react-native';



export default class App extends React.Component {
  constructor(){
    super()
    this.state={
      left:new Animated.Value(0)
    }
  }
  componentDidMount(){
    setInterval(()=>{
      this.setState({}, () => {
        //通过这个回调函数获取更新后的值
        Animated.timing( // 随时间变化而执行的动画类型
          this.state.left,// 动画中的变量值
          {
            toValue: Math.random()*100                             // 新值
          }
        ).start()
      })
 
    },1000)
  }
  render() {
    return (
      <View>
        <Animated.View style={{left:this.state.left}}>
        <Text>我是原生动画</Text>
        </Animated.View>
      </View>
    );
  }
}


```









# 按浏览器刷新频率即requestAnimationFrame来实现动画

requestAnimationFrame指浏览器每秒渲染

//用户最小化浏览器时会停止执行

利用cancelAnimationFrame取消requestAnimationFrame事件

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>requestAnimationFrame</title>
  <style>
    .test {
      position: absolute;
      /*left: 0px;*/
    }
  </style>
</head>
<body>
  <h1>requestAnimationFrame</h1>
  <button style="left: 0px" class='test'>哈哈</button>
</body>
</html>
<script>
  // 每隔 一秒输出 一个1
  // 用户最小化浏览器时它会停止执行
  var oBtn = document.querySelector('.test')
  // const 
  function test (timestamp) {
    // console.log(timestamp)
    //Frame中不是立即调用test，是当浏览器渲染
    // 页面时调用test
    oBtn.style.left = ( timestamp / 10 ) + 'px'
    requestAnimationFrame(test)
  }
  test()
</script>
```









# 结合requestAnimationFrame和Animated做轮播图

```js
import React from 'react'
import {
  Animated,
  View,
  Text,
  Button,
  StyleSheet,
  Dimensions
} from 'react-native'
//设备高宽
const {width,height} = Dimensions.get('window')
export default class SwiperTest extends React.Component{
  constructor(){
    super();
    this.state={
      left:new Animated.Value(0),
      time:null,
      nowTime:Date.now(),//当前时间,
      page:0
    }
  }
  componentDidMount(){
    this.handlerSwiper()
  }
  handlerSwiper(timestamp){
    const diff = timestamp-this.state.nowTime
    if(this.state.page > 2){
      this.state.page=0
    }
    if(diff > 1000){
      Animated.timing(
        this.state.left,
        {
         toValue: -width * this.state.page
        }
      ).start()
      this.state.page ++
      this.state.nowTime = Date.now()
    }
   
   
    requestAnimationFrame((...arg)=>this.handlerSwiper(...arg));
  }
  render(){
    return (
      <View styel={styles.container}>
        {/* <View><Text>{this.state.time}</Text></View> */}
        <Animated.View style={[styles.list,{left:this.state.left}]}>
          <View style={styles.item}><Text>第一页</Text></View>
          <View style={styles.item}><Text>第二页</Text></View>
          <View style={styles.item}><Text>第三页</Text></View>
        </Animated.View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flexDirection:'row'
  },
  list:{
    flexDirection:'row',
    width:width*3
  },
  item: {
    width: width,
    height: 150,
    backgroundColor: '#E86F6F'
 }
})
```





# 通过Dimensions组件获取屏幕宽高

const {width,height} = Dimensions.get('window')





# yarn下载时会自动加到package.json中





# 常用请求方式get,post,put,path,delete

### 常用风格

### restful是一种后端api的设计风格,把请求地址当作资源,通过不同请求类型来操作资源

restful 如:/topics/xxxid

 /topics/xxxid 获取指定话题(get)

```
/topics/xxxid 添加话题(post)
/topics/xxxid 修改话题的全部内容 (put)
/topics/xxxid 修改话题的部分内容 (patch)
/topics/xxxid 删除话题 (delete)
```










