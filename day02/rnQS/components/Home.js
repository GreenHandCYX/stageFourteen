import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
  Dimensions
} from 'react-native'
import Carousel from './Carousel'
import Btn from './Btn'
import Icon from 'react-native-vector-icons/FontAwesome'
import myAxios from '../utils/myAxios.js'

const {width, height} = Dimensions.get('window')
export default class Home extends Component {
  constructor () {
    super()
    this.state = {
      refreshing: false,
      page: 0, // 表示当前是第几页
      count: 5, // 表示 取几条数据
      swipers: [], // 轮播图的图片
      data: [
        {
          key: 'dfd',
          id: 'xx'
        },
        {
          key: 'dd',
          id: 1,
          src: '../assets/images/timg-pai.jpeg'},
        {
          key: 'ff',
          id: 2,
          src: '../assets/images/timg-shala.jpeg'},
        {
          key: 'aa',
          id: 3,
          src: '../assets/images/timg-shala.jpeg'}]
    }
  }
  componentDidMount () {
    // 获取轮播图的图片和列表里的数据(默认只获取第一页)
    myAxios.get('/topics/swipers')
    .then(res => {
      alert(res.data.swipers.length)
      this.setState({swipers: res.data.swipers})
      // alert(1)
      console.log(res)
    }, err => {console.log('ersssror')})
    this.getPage()
  }
  render () {
    return (
      <View style={[styles.container]}>
        <Btn
        onPress={e => this.handlerClick()}
        style={styles.qEditBtn}><Icon style={styles.qEditIcon} name="edit"/></Btn>
        {/* <Image style={styles.img} source={{uri: 'http://m.paixin.com/static/img/rectangle-19@2x.f2d3663.jpg'}} /> */}
        <Carousel
              // interval={1000}
                data={this.state.swipers}
                renderItem={this._renderItem}
              />
        <FlatList
          onEndReachedThreshold={10}
          onEndReached={e => this.handlerEnd()}
          // data={[{id: 1}, {id: 3}, {id: 4}, {id: 5}, {id: 6}]}
          data={this.state.data}
          refreshing={this.state.refreshing}
          onRefresh={e => this.refresh()}
          renderItem={({index, item}) => {
            // console.log(row, item)
            // if (index === 0) {
            //   return <Carousel
            //   // interval={1000}
            //     data={this.state.swipers}
            //     renderItem={this._renderItem}
            //   />
            // }
            return (
              <TouchableOpacity onPress={
                // navigate第二个参数会被传递
                e => this.props.navigation.navigate('detail', {id: item.id})
              }>
                <View
              //  keyExtractor={(item, index) => item.id} style={styles.qsList}
              >
                <View style={styles.qsItem}>
                  <View style={styles.qsUser}><Image style={styles.qsAvatar} source={require('../assets/images/avatar.png')} />
                    <Text style={styles.qsUserName}>火骑士空空{item.id}</Text></View>
                  {/* <Image style={styles.qsImg} source={require('../assets/images/timg-pai.jpeg')} /> */}
                  <Image style={styles.qsImg} source={require('../assets/images/test2.jpg')} />
                  <Text style={styles.qsSummary} >{item.content}</Text>
                  <View style={styles.qsData}><Text style={[styles.qsBingo, styles.qsDataTxt]}>699 赞同</Text><Text style={[styles.qsCom, styles.qsDataTxt]}>98 评论</Text><Text style={[styles.qsTime, styles.qsDataTxt]}>20 小时前</Text></View>
                </View>
              </View>
              </TouchableOpacity>
            )
          }}
        />
      </View>
    )
  }

  // 获取指定页面的数据
  getPage () {
    let {page, count} = this.state
    page += 1
    const start = (page - 1) * count
    myAxios.get('/topics',  {
      params: {
        start: start,
        count
      }
    }).then(res => {
      // alert('有请求了')
      if (res.data.errcode !== 0) {
        return alert('出错了')
      }

      // data // total, topics
      console.warn(res.data.topics.length, '-数据长度')
      const arr = this.state.data.concat(res.data.topics)
      this.setState({
        data: arr,
        page
      })
    })
  }
  _renderItem (row, index) {
    // alert(row)
    return (
      <View key={Math.random()}
        style={[styles.item, {backgroundColor: 'blue'}]}
      >
        {/*<Image style={styles.img} source={{uri: row}} /> */}
        <Image style={styles.img} source={require('../assets/images/timg-pai.jpeg')} />
        {/* <Image style={styles.img} source={{uri: 'http://m.paixin.com/static/img/rectangle-19@2x.f2d3663.jpg'}} /> */}
      </View>
    )
  }
  // 点击跳转到一个新的页面发表话题
  handlerClick () {
    this.props.navigation.navigate('newtopic')
  }
  // 下拉时执行的方法
  refresh () {
    this.state.page = 0
    this.getPage()
  }
  // 加载下一页数据
  handlerEnd () {
    this.getPage()
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
  item: {
    flex: 1,
    width: width / 2,
    justifyContent: 'center',
    height: 200,
    // shadowRadiuds: 'ss',
    // shadowOpacity,
    // shadowOffset,
    // shadowColor
    // borderRightWidth: 10
    // flexDirection: 'row'
  },
  img: {
    flex: 1,
    width: width,
    height: 100
    // height: 100
  },
  qsCom: {

  },
  qsTime: {

  },
  qsBingo: {

  },
  qsDataTxt: {
    color: '#999',
    fontSize: 16,
    marginRight: 8
  },
  qsData: {
    marginTop: 8,
    flexDirection: 'row'
    // color: '#ccc'
  },
  qsSummary: {
    fontSize: 16
  },
  qsUser: {
    flexDirection: 'row',
    alignItems: 'center'
    // justifyContent: 'center'
  },
  qsAvatar: {
    width: 24,
    height: 24,
    borderRadius: 12
  },
  qsUserName: {
    paddingLeft: 16,
    color: '#a7a7a7',
    fontSize: 14
  },
  qsImg: {
    marginBottom: 8,
    marginTop: 16,
    width: '100%',
    height: 150,
    borderRadius: 8
    // resizeMode: 'stretch'
  },
  qsItem: {
    marginTop: 8,
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  qsList: {

  }
})

function getColor () {
  // 定义字符串变量colorValue存放可以构成十六进制颜色值的值
  var colorValue = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f'
  // 以","为分隔符，将colorValue字符串分割为字符数组["0","1",...,"f"]
  var colorArray = colorValue.split(',')
  var color = '#'// 定义一个存放十六进制颜色值的字符串变量，先将#存放进去
  // 使用for循环语句生成剩余的六位十六进制值
  for (var i = 0; i < 6; i++) {
    // colorArray[Math.floor(Math.random()*16)]随机取出
    // 由16个元素组成的colorArray的某一个值，然后将其加在color中，
    // 字符串相加后，得出的仍是字符串
    color += colorArray[Math.floor(Math.random() * 16)]
  }
  return color
}
