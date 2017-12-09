//返回一个组件就可以使用

import React from 'react'
//在RN中不能使用html使用组件代替
import {
  View,//不能直接写文字包括空格
  Text,
  Image,//普通形式需要在source中用require();网络照片写为uri:'',且必须设置宽高
  Button
} from 'react-native'

import {TabNavigator} from 'react-navigation'


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
const TabRouter = TabNavigator({
  c:{
    screen:Center,
    navigationOptions:{
         // header: null,
         headerTitle: '个人中心',
         title: '个人中心啊'
    }
  },
  h: {
    // screen属性指定当前组件匹配到时要呈现的组件
    screen: Home,
    navigationOptions: {
      header: null,
      headerTitle: '首页',
      title: '首页啊',
    }
  }
},{
  tabBarPosition: 'bottom'
})


export default TabRouter
