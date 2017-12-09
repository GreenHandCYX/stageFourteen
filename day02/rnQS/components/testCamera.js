/**
 * 测试访问相册的能力
 */
import React from 'react'
import {
  View,
  Text,
  Image,
  Button
} from 'react-native'

import ImagePicker from 'react-native-image-crop-picker'

export default class testCamera extends React.Component {
  constructor () {
    super()
    this.state = {
      imgUrl: ''
    }
  }
  render () {
    const {imgUrl} = this.state
    return (
      <View>
        <Text>访问相册</Text>
        <Button onPress={e => this.handlerPress()} title='测试'/>
        {
          // require的参数必需直接是一个字符串
          // 或者是一个变量不可以在require中拼接
        //<Image source={require(imgUrl)}/>
          // 
        }
        <Image style={{width: 300, height: 400}} source={{uri: imgUrl}}/>
      </View>
      ) 
  }
  // 访问相册
  handlerPress () {
    // 打开相册选择图片，并可以裁切图片
    // ImagePicker.openPicker({
    ImagePicker.openCamera({
      width: 300,
      height: 300,
      cropping: true // 是否裁切图片
    }).then(image => {
      // console.log(image)
      // image.path 图片在手机上的地址
      this.setState({imgUrl: image.path})
    })
  }
}