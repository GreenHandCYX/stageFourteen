/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

// 1.引入进行路由配置的
import {StackNavigator} from 'react-navigation'
import axios from 'axios'

// 引入路由中需要使用的组件
import SignInScreen from './components/SignIn.js'
import SignUpScreen from './components/SignUp.js'
import TabBarSrceen from './components/TabBar.js'
import NewTopic from './components/NewTopic.js'
import MyAnimated from './components/MyAnimated.js'
import SwiperTest from './components/SwiperTest.js'
import TestCamera from './components/testCamera.js'
import Detail from './components/Detail.js'
// axios 拦截器
axios.interceptors.request.use(config => {
  // config.url // /user/signup
  // config.url = 'http://192.168.179.25:8080' + config.url
  // console.log('123')
  // console.log(config)
  console.log('11111111')
  // console.log()
  return config
})

// 这个方法返回值是个组件
const StackRouter = StackNavigator({
  // testCamera: {
  //   screen: TestCamera
  // },
  // SwiperTest: {
  //   screens: SwiperTest
  // },
  // MyAnimated: {
  //   screen: MyAnimated
  // },
  // 登陆
  signin: {
    screen: SignInScreen
  },
  tabbar: {
    screen: TabBarSrceen
  },
  detail: {
    screen: Detail
  },
  // key: { screen: 组件}
  // 注册
  signup: {
    screen: SignUpScreen
  },
  newtopic: {
    screen: NewTopic
  }
})

export default class App extends Component<{}> {
  render() {
    return (
      //这个 <StackRouter></StackRouter> 必需作为根元素来使用
      <StackRouter></StackRouter>
    );
  }
}

const styles = StyleSheet.create({
});
