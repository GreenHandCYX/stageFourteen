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
  View
} from 'react-native'
import Btn from './Btn'
const {width, height} = Dimensions.get('window')
export default class NewTopic extends Component {
  render () {
    return (
      <View style={styles.container}>
        <StatusBar barStyle='dark-content' />
        <View style={styles.comment}>
          <TextInput style={[styles.title, {width: '100%'}]} placeholder='话题'/>
          <View style={styles.coverBtnBxo}>
            <Btn style={styles.coverBtn} title='选择话题封面'/>
          </View>
          <View style={styles.coverBox}>
            <Image style={[styles.cover, {width: '100%', height: 200}]} source={require('../assets/images/cover.png')}/>

          </View>
          <TextInput multiline={true} style={[styles.content, {width: '100%'}]}
            placeholder='话题内容'
            placeholderTextColor='#bbb' />
          <Btn style={styles.sub} title="评论"/>
        </View>
      </View>
    )
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
