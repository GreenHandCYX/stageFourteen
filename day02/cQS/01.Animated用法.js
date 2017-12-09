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

