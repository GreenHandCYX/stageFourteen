import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  Text,
  TextInput
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import myAxios from '../utils/myAxios'
import axios from 'axios'
import Btn from './Btn'

export default class SignUp extends Component {
  constructor () {
    super()
    this.state = {
      username: '',
      password: '',
      aFocus: false,
      bFocus: false
    }
  }
  render () {
    const {aFocus, username, password} = this.state
    const bFocus = !aFocus
    return (
      <View style={[styles.container]}>
        <View style={[styles.signType]}>
          <Text style={[styles.type, styles.typeActive]}>账号密码注册</Text>
          <Text style={styles.separate}>|</Text>
          <Text style={styles.type}>验证码注册</Text>
        </View>
        <View style={styles.inputBox}>
          <View style={styles.inputItem}>
            <Icon style={styles.icon} name='user' size={25} color='#ccc' />
            <TextInput
              onChangeText={txt => this.setState({username: txt})}
              value={username}
              // onFocus={() => this.setState({aFocus: true})}
              // onBlur={() => this.setState({aFocus: false})}
              // style={[styles.input, styles.inputFocus && aFocus]}
              style={[styles.input, styles.inputFocus]}
              placeholder='账号' />
          </View>
          <View style={styles.inputItem}>
            <Icon style={styles.icon} name='lock' size={25} color='#ccc' />
            <TextInput
              onChangeText={txt => this.setState({password: txt})}
              value={password}
              // onFocus={() => this.setState({aFocus: false})}
              // onBlur={() => this.setState({aFocus: true})}
              // style={[styles.input, styles.inputFocus && (!bFocus)]}
              style={[styles.input, styles.inputFocus]}
              placeholder='密码' />
          </View>
        </View>
        <View style={styles.btnBox}>
          <Btn
            onPress={e => this.handlerSignUp()}
            btnStyle={[styles.btn, styles.signBtnIn]} textStyle={[styles.signTextIn]} title='注册' />
          <Btn
          onPress={e => this.props.navigation.navigate('signin')}
          btnStyle={[styles.btn, styles.signBtnUp]} 
          textStyle={[styles.signTextUp]} >已有账号? 登陆!</Btn>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>©2017 huoqishi.net 京ICP证 火骑士空空 号</Text>
        </View>
      </View>
    )
  }
  // 注册按钮的事件方法
  handlerSignUp () {
    const {username, password} = this.state
    // 发请求给服务器进行注册
    // http:/192.168.1.1
    myAxios.post('/user/signup', {
    // axios.get('http://api.douban.com/v2/movie/top250', {
      // count: 3,
      // start: 0
      username,
      password
    })
    .then(({data: {errcode, errmsg}}) => {
      if (errcode !== 0) {
        return alert(errmsg)
      }
      // alert(res.data.errmsg)
      this.props.navigation.navigate('signin')
    }, err => {
      alert('出错了')
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    backgroundColor: '#fff'
  },
  /**
   * 账号密码输入框部分-start
   */
  inputBox: {
    alignItems: 'center',
    marginTop: 16,
    paddingTop: 16,
    // paddingLeft: 8,
    // paddingRight: 8,
    borderTopWidth: 1,
    borderTopColor: '#ccc'
  },
  inputItem: {
    width: '90%',
    marginTop: 8,
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopColor: '#ccc',
    borderRightColor: '#ccc',
    borderBottomColor: '#ccc',
    borderLeftColor: '#ccc',
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1
    // backgroundColor: '#ccc'
  },
  input: {
    flex: 1,
    height: 39,
    fontSize: 18,
    color: '#ccc'
    // backgroundColor: '#f0f'
  },
  inputFocus: {
    // fontSize: 40,
    color: '#676767',
    borderTopColor: '#3dc6b6',
    borderRightColor: '#3dc6b6',
    borderBottomColor: '#3dc6b6',
    borderLeftColor: '#3dc6b6'
  },
  icon: {
    paddingLeft: 16,
    paddingRight: 16
  },
  /**
   * 账号密码输入框-end
   */

  /**
   * 登陆注册按钮-start
   */
  btnBox: {
    marginTop: 32,
    alignItems: 'center'
  },
  btn: {
    marginTop: 16,
    width: '90%',
    height: 39,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  signBtnIn: {
    backgroundColor: '#6cafea'
  },
  signBtnUp: {
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderTopColor: '#6cafea',
    borderRightColor: '#6cafea',
    borderBottomColor: '#6cafea',
    borderLeftColor: '#6cafea',
    backgroundColor: '#fff'
  },
  signTextIn: {
    color: '#fff'
  },
  signTextUp: {
    color: '#6cafea'
  },
  /**
   * 登陆注册按钮-end
   */

  signType: {
    // flex: 1,
    // heigh
    marginTop: 24,
    flexDirection: 'row'
    // justifyContent: 'center'
  },
  type: {
    flex: 1,
    textAlign: 'center',
    fontSize: 23,
    color: '#666',
    fontWeight: '600'
  },
  typeActive: {
    color: '#6cafea'
  },
  separate: {
    color: '#666'
  },
  footer: {
    width: '100%',
    position: 'absolute',
    bottom: 100,
    alignItems: 'center'
    // justifyContent: 'center'
    // backgroundColor: '#ccc'
  },
  footerText: {
    color: '#ccc',
    fontSize: 18
  }
})

// 给注册按钮事件
// 账号框和密码的值的处理change
// axios拦截器：
// http://bxg.huoqishi.net/signin
// http://bxg.huoqishi.net/signup