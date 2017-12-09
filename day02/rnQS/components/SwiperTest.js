/**
 * requestAnimationFrame 实现的轮播图
 */
import React from 'react'
import {
  Animated,
  View,
  Text,
  Button,
  StyleSheet,
  Dimensions,
} from 'react-native'
const {width, height} = Dimensions.get('window')
export default class  SwiperTest extends React.Component {
  constructor () {
    super()
    this.state = {
      // left: 0,
      left: new Animated.Value(0),
      page: 1, // 默认是第一页
      showAnimate: true,
      nowTime: Date.now() // 当前时间
    }
  }
  // 组件加载完成之后，就开始动画
  componentDidMount() {
    this.handlerAnimate(this.state.nowTime)
  }
  // 处理动画 
  handlerAnimate (timeStamp = 0) {

    if (!this.state.showAnimate) return
    // 根据 timeStamp的值来设置View标签的left
    // if (timeStamp >= 1000) {
    //   this.setState({left: -width})
    // }
    // 如果diff大于等于1000 就有动画
    // 然后让 this.state.nowTime变成当前时间
    const diff = (timeStamp - this.state.nowTime)
    // console.warn(left)
    // spring

    // Animated.spring(                            // 随时间变化而执行的动画类型
    //   // Animated.decay(                           // 随时间变化而执行的动画类型
    //     this.state.left,                      // 动画中的变量值
    //     {
    //       toValue: Math.random() * 100                             // 新值
    //     }
    //    ).start()
    if (this.state.page > 2) {
      // return
      // this.state.page = 0
      // this.state.showAnimate = false
    }
    if (diff >= 1000) {
        // alert(this.state.left.toString())
      Animated.timing(
        this.state.left,
        {
         toValue: -width * this.state.page
        }
      ).start()
      this.state.page += 1
      this.state.nowTime = Date.now()
    }
    // this.setState({left: left})
    // this.setState({left: 100})
    requestAnimationFrame ((...arg) => {this.handlerAnimate(...arg)})
  }
  render () {
    // const {left} = this.state
    return (
    <View style={styles.container}>
    <View><Text>{this.state.page}</Text></View>
      <Animated.View style={[styles.list, {left: this.state.left}]}>
        <View style={[styles.item]}><Text>第一页</Text></View>
        <View style={[styles.item]}><Text>第二页</Text></View>
        <View style={[styles.item]}><Text>第三页</Text></View>
      </Animated.View>
    </View>)
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
    // xxx: { // 这种形式是不支持的
    //   color:'fff'
    // }
  },
  list: {
    flexDirection: 'row',
    width: width * 3
  },
  item: {
     width: width,
     height: 150,
     backgroundColor: '#E86F6F'
  }
})