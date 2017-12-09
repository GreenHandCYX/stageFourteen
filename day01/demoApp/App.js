import React from 'react'
import {
  View,
  Text,
  Image,
  TextInput,
  Button
} from 'react-native'
import axios from 'axios'


export default class App extends React.Component {
  constructor () {
    super()
    this.state = {
      user: {} // 用户信息
    }
  }
  // 此处没有WillMount
  componentDidMount () {
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
  }
  render () {
    const {user} = this.state
    return (
      <View>
        <Text>哈哈，测试请求 </Text>
        <Text>用户名: {user.username}</Text>
        <Image
        style={{width: 100, height: 100}}
        source={ {uri: user.avatar} }/>
      </View>)
  }
}
// export default App