import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import {StackNavigator} from 'react-navigation';

import SigninScreen from './components/SignIn.js'
import SignupScreen from './components/SignUp.js'


import TabBarScreen from './components/TabRouter.js'
import SwiperTest from './components/SwiperTest.js'
import NewTopicScreen from './components/NewTopic.js'
import TestCamera from './components/testCamera.js'

//配置普通路由
//StackNavigator方法返回的是一个组件
const StackRouter = StackNavigator({
  tabbar:{
    //选项卡路由
    screen:TabBarScreen
  },
  signin:{
    screen:SigninScreen
  },
  signup:{
    screen:SignupScreen
  },
  swiper:{
    screen:SwiperTest
  }, 
  testCamera:{
    screen:TestCamera
  },

  newTopic:{
    screen:NewTopicScreen
  },
 
})

export default class App extends React.Component {
  render() {
    return (
      <StackRouter></StackRouter>
    )
  }
}

