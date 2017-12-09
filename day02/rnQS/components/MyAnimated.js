/**
 * ReactNative里面的动画的实现方案
 */
import React from 'react'
import {
  View,
  Text,
  Animated
} from 'react-native'
export default class Test extends React.Component {
  constructor () {
    super()
    this.state = {
      // left: 0
      left: new Animated.Value(0)
    }
  }
  componentDidMount () {
    setInterval(() => {
      // Animated.timing(                            // 随时间变化而执行的动画类型
      // this.setState({left: this.state.left+1})
    }, 1000)
  }
  render () {
    return (
      <View>
      
        <Animated.View style={{left: this.state.left}}>
          <Text>我是中国人，我爱自己的祖国</Text>
        </Animated.View>
      </View>
      )
  }
// export default class Test extends React.Component {
//   constructor () {
//     super()
//     this.state = {
//       left: 0
//     }
//   }
//   componentDidMount () {
//     setInterval(() => {
//       this.setState({left: this.state.left+1})
//     }, 100)
//   }
//   render () {
//     return (
//       <View>
      
//         <View style={{left: this.state.left}}>
//           <Text>我是中国人，我爱自己的祖国</Text>
//         </View>
//       </View>
//       )
//   }
}
// 1.希望文字从左往右移动

// 20-30W 人工智能
// 40W

