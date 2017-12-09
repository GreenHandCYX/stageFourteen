//返回一个组件就可以使用

import React from 'react'

import {
  View,
  Text,
  Image,
  Button
} from 'react-native'


//在RN中通过react-navigation和react-router-native（类似于react-router-dom）设置路由
//引入
import {StackNavigator} from 'react-navigation'


const Home = (props)=>{
  return (
    <View>
      <Text>首页</Text>
      <Button onPress={e=>{
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
const StackRouter = StackNavigator({
  c:{
    screen:Center,
    navigationOptions:{
         // header: null,
         headerTitle: '个人中心'
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


export default StackRouter
