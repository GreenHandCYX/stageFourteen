import React from 'react'
import {
  Animated,
  View,
  Text,
  Button,
  StyleSheet,
  Dimensions
} from 'react-native'
//设备高宽
const {width,height} = Dimensions.get('window')
export default class SwiperTest extends React.Component{
  constructor(){
    super();
    this.state={
      left:new Animated.Value(0),
      time:null,
      nowTime:Date.now(),//当前时间,
      page:0
    }
  }
  componentDidMount(){
    this.handlerSwiper()
  }
  handlerSwiper(timestamp){
    const diff = timestamp-this.state.nowTime
    if(this.state.page > 2){
      this.state.page=0
    }
    if(diff > 1000){
      Animated.timing(
        this.state.left,
        {
         toValue: -width * this.state.page
        }
      ).start()
      this.state.page ++
      this.state.nowTime = Date.now()
    }
   
   
    requestAnimationFrame((...arg)=>this.handlerSwiper(...arg));
  }
  render(){
    return (
      <View styel={styles.container}>
        {/* <View><Text>{this.state.time}</Text></View> */}
        <Animated.View style={[styles.list,{left:this.state.left}]}>
          <View style={styles.item}><Text>第一页</Text></View>
          <View style={styles.item}><Text>第二页</Text></View>
          <View style={styles.item}><Text>第三页</Text></View>
        </Animated.View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flexDirection:'row'
  },
  list:{
    flexDirection:'row',
    width:width*3
  },
  item: {
    width: width,
    height: 150,
    backgroundColor: '#E86F6F'
 }
})