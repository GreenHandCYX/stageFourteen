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