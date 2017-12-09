import Icon from 'react-native-vector-icons/FontAwesome'
import React, {Component} from 'react'
import {StyleSheet,View,Text} from 'react-native'

import {TabNavigator} from 'react-navigation'




import HomeScreen from './Home.js'
import SearchScreen from './Search.js'
import MineScreen from './Mine.js'
const FindScreen = () => (<View style={styles.container}><Text>我是Find组件</Text></View>)


//路由规则
const optionsA = {
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null,
      // headerTitle: '嘻嘻',
      tabBarLabel: '首页',
      // tabBarIcon的值需要是一个组件
      // 这个组件会作为TabBar的图标
      // tabBarIcon: () => {
      //   return <Image source={}/>
      // }
      tabBarIcon: ({focused, tintColor}) => (
        <Icon
          style={{width: 25, height: 25, color: tintColor}}
          name='home' size={25} color='#ccc' />
      )
    }
  },
  Search: {
    screen: SearchScreen,
    navigationOptions: {
      header: null,
      // headerTitle: 'dd',
      tabBarLabel: '搜索',
      tabBarIcon: ({focused, tintColor}) => (
        <Icon
          style={{width: 25, height: 25, color: tintColor}}
          name='search' size={25} color='#ccc' />
      )
    }
  },
  Mine: {
    screen: MineScreen,
    navigationOptions: {
      headerTitle: '个人中心',
      tabBarLabel: '我的',
      tabBarIcon: ({focused, tintColor}) => (
        <Icon
          style={{width: 25, height: 25, color: tintColor}}
          name='user' size={25} color='#ccc' />
      )
    }
  },
  Find: {
    screen: FindScreen,
    navigationOptions: {
      tabBarLabel: '发现',
      tabBarIcon: ({focused, tintColor}) => (
        <Icon
          style={{width: 25, height: 25, color: tintColor}}
          name='compass' size={25} color='#ccc' />
      )
    }
  }
}
//tabbar的设置
const optionsB = {
  // tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  // animationEnabled: true,
  lazy: true,
  tabBarOptions: {
    activeTintColor: '#06c1ae',
    inactiveTintColor: '#979797',
    style: {
      backgroundColor: '#ffffff',
      height: 49
    },
    labelStyle: {
      fontSize: 14 // 文字大小
    }
  }

}


const TabBar = TabNavigator(optionsA, optionsB)
export default TabBar

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue'
  }
})