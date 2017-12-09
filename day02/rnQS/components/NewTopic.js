/**
 * 添加新话题组件
 */
/**
 * 自己封装的按钮!
 */
import React, { Component } from 'react'
import {
  StyleSheet,
  StatusBar,
  TextInput,
  Image,
  TouchableOpacity,
  Dimensions,
  Text,
  View,
  CameraRoll
} from 'react-native'
// 引入用来访问相册的包
import ImagePicker from 'react-native-image-crop-picker'
import myAxios from '../utils/myAxios.js'
import Btn from './Btn'
const {width, height} = Dimensions.get('window')
export default class NewTopic extends Component {
  constructor () {
    super()
    this.state = {
      title: '',
      content: '',
      imgUri: '../assets/images/cover.png'
    }
  }
  componentDidMount() {
      // var fetchParams = {
      //       first: 2, // 每次取六张
      //       // groupTypes: 'All',
      //       assetType: 'Photos'
      //   }
  // CameraRoll.getPhotos(fetchParams)
    // alert( typeof ImagePicker)
    // ImagePicker.openPicker({
    //   width: 300,
    //   height: 400,
    //   cropping: true
    // }).then(image => {
    //   console.log(image);
    // });
  }
  render () {
    const {imgUri, title, content} = this.state
    return (
      <View style={styles.container}>
        <StatusBar barStyle='dark-content' />
        <View style={styles.comment}>
          <TextInput
          onChangeText={txt => this.setState({title: txt})}
          value={title}
          style={[styles.title, {width: '100%'}]} placeholder='话题'/>
          <View style={styles.coverBtnBxo}>
            <Btn 
            onPress={e => this.handlerChooseCover()}
            style={styles.coverBtn} title='选择话题封面'/>
          </View>
          <View style={styles.coverBox}>
            <Image 
            style={[styles.cover, {width: '100%', height: 200}]}
            // source={require('../assets/images/cover.png')}/>
            source={{uri: imgUri}}/>

          </View>
          <TextInput multiline={true} style={[styles.content, {width: '100%'}]}
            onChangeText={txt => this.setState({content: txt})}
            value={content}
            placeholder='话题内容'
            placeholderTextColor='#bbb' />
          <Btn
          onPress={e => {
            this.handlerClick()
          }}
          style={styles.sub} title="发表话题"/>
        </View>
      </View>
    )
  }
  // 选择并上传话题封面
  handlerChooseCover () {
    // ImagePicker.openCamera
    ImagePicker.openPicker({
      width: 400,
      height: 300,
      cropping: true
    }).then(image => {
      // image.path 图片地址 
      this.setState({imgUri: image.path})
      // 行把话题，的图片上传到服务器，
      // 然后再上传话题内容!
      const fd = new FormData()
      fd.append('cover', {
        uri: image.path,  // 指定图片地址
        type: 'image/jpeg'
      })
      myAxios.post('/topics/cover', fd)
      .then(res => {
        alert(res.data.errmsg)
      }, err => {
        // alert('')
        console.log(err)
      })
    })
  }
  // 发表话题事件
  handlerClick () {
    // 就是将话题标题、
    // 话题的封面图片、
    // 话题的具体内容发给服务器
    // axios.
    const {title, imgUri, content} = this.state
    myAxios.post('/topics', {
      title,
      imgUri,
      content
    }).then(res => {
      // alert(res.data.errmsg)
      if (res.data.errcode !== 0) {
        return alert(res.data.errmsg)
      }
      alert('发表成功')
      this.props.navigation.navigate('Home')
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // position: 'absolute',
    // zIndex: 101,
    // top: ,
    width: width,
    height: height,
    // backgroundColor: 'rgba(0, 0, 0, 0.6)',
    alignItems: 'center'
    // top: 0,
    // left: 0
    // backgroundColor: '#3dc6b6'
  },
  comment: {
    width: '94%',
    marginTop: 24,
    paddingTop: 16,
    paddingBottom: 32,
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: '#fff',
    borderRadius: 4
  },
  title: {
    // width: '90%',
    fontSize: 16,
    height: 48,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: '#fff'
    // paddingRight：
  },
  coverBox: {
    marginTop: 8,
    width: '100%',
    // paddingLeft: 16,
    // paddingRight: 16,
    backgroundColor: '#000'
  },
  coverBtnBxo: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start'
    // backgroundColor: '#000'
  },
  cover: {
    width: '100%',
    backgroundColor: '#f1f1f1'
    // width: 'auto',
    // marginLeft: 16,
    // marginRight: 16
  },
  coverBtn: {
    borderRadius: 2,
    paddingLeft: 8,
    paddingRight: 8,
    backgroundColor: '#5dae5d'
  },
  sub: {
    marginTop: 16,
    width: '100%'
  },
  content: {
    marginTop: 16,
    // width: '90%',
    fontSize: 16,
    paddingTop: 8,
    paddingRight: 16,
    paddingBottom: 16,
    paddingLeft: 16,
    height: 150,
    backgroundColor: '#fff'
  }
})

// 要打开相册，访问照片，并上传
// react-native-image-crop-picker
// new FormData, axios