/**
 * 详情组件
 */
import React, {Component} from 'react'
import {
  StyleSheet,
  StatusBar,
  FlatList,
  View,
  TextInput,
  Text,
  Image
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import myAxios from '../utils/myAxios.js'
import Btn from './Btn'
import EditComment from './EditComment'

export default class Search extends Component {
  constructor () {
    super()
    this.state = {
      txt: '+点赞',
      topic: {}
    }
  }
  componentDidMount () {
    // 根据 id 获取话题的详情，及话题相关的评论
    const {id} = this.props.navigation.state.params
    myAxios.get('/topics/' + id).then(res => {
      console.log(res)
      if  (res.data.errcode !== 0) {
        return alert(res.data.errmsg)
      }
      alert(JSON.stringify(res.data))
      if (res.data.topic == null) {
        return alert('没有数据topic 为 null')
      }
      this.setState({
        topic: res.data.topic
      })
    }, err => {
      alert(JSON.stringify(err))
    })
  }
  render () {
    const {title, content} = this.state.topic
    // props.navgation.state.params.id
    // console.log(this.props)
    return (
      <View style={styles.container}>
        <StatusBar barStyle='dark-content'/>
        <EditComment isShow={false} />
        <Btn style={styles.qEditBtn}><Icon style={styles.qEditIcon} name="edit"/></Btn>
        <View style={styles.qBox}>
          <Text style={styles.qTitle}>{title}</Text>
          <Text style={styles.qContent}>{content}</Text>
          <View style={styles.qInfo}>
            <Text style={[styles.qSup, styles.qTmp]}>189人点赞</Text>
            <Text style={[styles.qCom, styles.qTmp]}>19 条评论</Text>
            <View style={styles.qOpt}>
            <Btn
              onPress={e => { this.thumbUp()}}
              style={styles.qBingo} title={this.state.txt}/>
            </View>
          </View>
        </View>
        <View style={styles.comBox}>
          <FlatList
            data={[{key: '1'}, {key: '2 '}, {key: '3'}, {key: 4}]}
            renderItem={() => (
              <View style={styles.comItem}>
                <View style={styles.comUser}>
                  <Image source={require('../assets/images/avatar.png')} style={styles.comAvatar}/>
                  <Text style={styles.comName}>火骑士空空</Text></View>
                <View style={styles.comContext}>
                  <Text numberOfLines={3} style={styles.comInner}>评论内容，评论内容评论内容，评论内容评论内容，评论内容评论内容，评论内容评论内容，评论内容评论内容，评论内容评论内容，评论内容评论内容，评论内容评论内容，评论内容评论内容，评论内容评论内容，评论内容评论内容，评论内容评论内容，评论内容评论内容，评论内容评论内容，评论内容评论内容，评论内容评论内容，评论内容评论内容，评论内容</Text>
                </View>
                <View style={styles.comInfo}>
                  <Text style={styles.comDate}>2017-03-12</Text>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    )
  }
  thumbUp () {
    // get, post
    // put, patch, delete
    // restful, 是一种后端Api的设计风格
    // 把请求地址当作资源, 通过不同的请求类型来操作资源
    // /topics 获取话题列表(get)
    // /topics/xxxid 获取指定话题(get)
    // /topics/xxxid 添加话题(post)
    // /topics/xxxid 修改话题的全部内容 (put)
    // /topics/xxxid 修改话题的部分内容 (patch)
    // /topics/xxxid 删除话题 (delete)
    // 
    // thumbup 1 是点赞，0 是取消赞
    const {id} = this.props.navigation.state.params
    myAxios.patch('/thumbup/' + id, {thumbUp: 1})
    .then(res => {
      alert(JSON.stringify(res.data))
      // ss
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  qEditBtn: {
    position: 'absolute',
    // alignItems: 'center',
    // justifyContent: 'center',
    width: 60,
    height: 60,
    borderRadius: 50,
    zIndex: 100,
    bottom: 100,
    right: 30,
    shadowColor: '#000',
    // shadowOffset: 10,
    shadowOpacity: 0.3,
    shadowRadius: 4
  },
  qEditIcon: {
    fontSize: 24
  },
  qBox: {
    paddingTop: 24,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: '#fff'
  },
  qTitle: {
    fontSize: 20
  },
  qContent: {
    marginTop: 16,
    marginBottom: 16,
    fontSize: 15,
    lineHeight: 20,
    color: '#575757'
  },
  qInfo: {
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center'
  },
  qOpt: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  qBingo: {
    width: 200,
    height: 32,
    borderRadius: 4
  },
  qSup: {},
  qCom: {},
  qTmp: {
    marginRight: 16,
    fontSize: 13,
    color: '#222'
  },
  comBox: {
    flex: 1
    // backgroundColor: ''
  },
  comItem: {
    marginTop: 8,
    paddingTop: 24,
    paddingLeft: 16,
    paddingBottom: 16,
    backgroundColor: '#fff'
  },
  comUser: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  comAvatar: {
    width: 25,
    height: 25
  },
  comName: {
    flex: 1,
    marginLeft: 16
  },
  comContext: {
    marginTop: 16,
    // height: 80,
    paddingBottom: 8,
    overflow: 'hidden'
  },
  comInner: {
    fontSize: 14,
    color: '#333',
    lineHeight: 18
  },
  comInfo: {
  },
  comDate: {
    color: '#aaa',
    fontSize: 15
  }
})
